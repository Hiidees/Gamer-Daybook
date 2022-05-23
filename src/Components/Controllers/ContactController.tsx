import * as React from "react";
import useAppTranslation from "../../Hooks/useAppTranslation";
import useCookies from "../../Hooks/useCookies";
import EmailHelper from "../../Temporary/Helpers/EmailHelper";
import { Contact, IEmailAlert } from "../Views/Contact/Contact";

export interface IContactControllerProps {}

export function ContactController(props: IContactControllerProps) {
  const translationState = useAppTranslation();
  function resizeListener(height: number, setHeight: (height: number) => void) {
    setHeight(height);
  }

  async function sendEmail(
    data: any,
    setResponseEmail: (emailData: IEmailAlert | undefined) => void,
    setIsSendingEmail: (bool: boolean) => void,
    setCounterEmail: (counter: number) => void,
    counterEmail: number
  ) {
    const _EmailHelper = new EmailHelper();
    setIsSendingEmail(true);

    if (counterEmail < 2) {
      const emailResponse = await _EmailHelper.sendEmailAsync(
        data.email,
        data.message
      );

      const emailAlertCode =
        emailResponse.status === "Error" ? emailResponse.statusCode : "";

      const emailMessage =
        emailResponse.status === "Error"
          ? emailResponse.message
          : translationState.translation["Mail sended"];

      const emailAlert: IEmailAlert = {
        severity: emailResponse.status === "Success" ? "success" : "error",
        message: emailMessage + " " + emailAlertCode,
      };
      setResponseEmail(emailAlert);

      if (emailResponse.status === "Success") {
        setCounterEmail(counterEmail + 1);
        useCookies.setCookieEmail("email", counterEmail + 1);
      }
    } else {
      setResponseEmail({
        severity: "error",
        message:
          translationState.translation[
            "You can not send more of two mail in one day"
          ],
      });
    }
    setIsSendingEmail(false);
  }
  return <Contact resizeListener={resizeListener} sendEmail={sendEmail} />;
}
