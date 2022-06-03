import useAppTranslation from "../../Hooks/useAppTranslation";
import useCookies from "../../Hooks/useCookies";
import EmailHelper from "../../Temporary/Helpers/EmailHelper";
import { Contact, IEmailAlert } from "../Views/Contact/Contact";

export interface IContactControllerProps {}

export function ContactController(props: IContactControllerProps) {
  const translationState = useAppTranslation();

  function setState(arg: any, changeState: (arg: any) => void) {
    changeState(arg);
  }

  async function sendEmail(
    data: any,
    value: number | null,
    setResponseEmail: (emailData: IEmailAlert | undefined) => void,
    setIsSendingEmail: (bool: boolean) => void,
    setExpand: (bool: boolean) => void,
    setCounterEmail: (counter: number) => void,
    counterEmail: number
  ) {
    const _EmailHelper = new EmailHelper();
    setState(true, setIsSendingEmail);

    if (counterEmail < 2) {
      const emailResponse = await _EmailHelper.sendEmailAsync(
        data.email,
        data.message,
        value
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
      setState(emailAlert, setResponseEmail);

      if (emailResponse.status === "Success") {
        setState(counterEmail + 1, setCounterEmail);
        useCookies.setCookieEmail("email", counterEmail + 1);
      }
    } else {
      setState(
        {
          severity: "error",
          message:
            translationState.translation[
              "You can not send more of two mail in one day"
            ],
        },
        setResponseEmail
      );
    }
    setState(false, setIsSendingEmail);
    setState(false, setExpand);
  }
  return <Contact setState={setState} sendEmail={sendEmail} />;
}
