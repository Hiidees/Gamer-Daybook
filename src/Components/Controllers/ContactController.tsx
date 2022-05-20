import * as React from "react";
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
    setIsSendingEmail: (bool: boolean) => void
  ) {
    const _EmailHelper = new EmailHelper();
    setIsSendingEmail(true);
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
    setIsSendingEmail(false);
    console.log(emailResponse);
  }
  return <Contact resizeListener={resizeListener} sendEmail={sendEmail} />;
}
