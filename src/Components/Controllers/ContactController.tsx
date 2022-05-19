import * as React from "react";
import { Contact } from "../Views/Contact/Contact";

export interface IContactControllerProps {}

export function ContactController(props: IContactControllerProps) {
  function resizeListener(height: number, setHeight: (height: number) => void) {
    setHeight(height);
  }

  function sendEmail(data: any) {
    console.log("Oggetto: " + data.email + "\nmessage: " + data.message);
  }
  return <Contact resizeListener={resizeListener} sendEmail={sendEmail} />;
}
