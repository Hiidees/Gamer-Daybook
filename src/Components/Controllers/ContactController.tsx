import * as React from "react";
import useCookies from "../../Hooks/useCookies";
import EmailHelper from "../../Temporary/Helpers/EmailHelper";
import { Contact, IEmailAlert } from "../Views/Contact/Contact";

export interface IContactControllerProps {}

export function ContactController(props: IContactControllerProps) {
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
        emailResponse.status == "Error" ? emailResponse.statusCode : "";
      const emailAlert: IEmailAlert = {
        severity: emailResponse.status == "Success" ? "success" : "error",
        message: emailResponse.message + " " + emailAlertCode,
      };
      setResponseEmail(emailAlert);
      setCounterEmail(counterEmail + 1);
      useCookies.setCookieEmail("email", counterEmail + 1);
    } else {
      setResponseEmail({
        severity: "error",
        message: "Non puoi inviare più di due email al giorno!",
      });
    }
    setIsSendingEmail(false);
  }
  return <Contact resizeListener={resizeListener} sendEmail={sendEmail} />;
}
