import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { AppbarGoBack } from "../../Utils/Appbar/AppbarGoBack";
import { SocialLinkCard } from "./SocialLinkCard";
import { FormSendEmail } from "./FormSendEmail";
import React from "react";
import useAppTranslation from "../../../Hooks/useAppTranslation";
import { MyHelmet } from "../../Utils/Helmet/MyHelmet";
import { BoxHeight } from "../../Portables/Styles/BoxStyle";

export interface IContactProps {
  setState: (arg: any, changeState: (arg: any) => void) => void;
  sendEmail: (
    data: IEmailForm,
    value: number | null,
    setResponseEmail: (emailData: IEmailAlert | undefined) => void,
    setIsSendingEmail: (bool: boolean) => void,
    setExpand: (bool: boolean) => void,
    setCounterEmail: (counter: number) => void,
    counterEmail: number
  ) => void;
}

export interface IEmailForm {
  email: string;
  message: string;
}

export interface IEmailAlert {
  severity: string;
  message: string;
}
export function Contact(props: IContactProps) {
  const { setState, sendEmail } = props;
  const translationState = useAppTranslation();
  const [height, setHeight] = React.useState(window.innerHeight);
  window.addEventListener("resize", () =>
    setState(window.innerHeight, setHeight)
  );

  return (
    <React.Fragment>
      <MyHelmet title={translationState.translation["Contact"]} />
      <AppbarGoBack />
      <Container maxWidth="md">
        <BoxHeight
          display="flex"
          alignItems="center"
          justifyContent="center"
          myheight={height - 100}
        >
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={12} sm={6} md={6}>
              <FormSendEmail setState={setState} sendEmail={sendEmail} />
            </Grid>
            <Grid
              item
              display={{ xs: "block", sm: "block", md: "block" }}
              xs={12}
              sm={6}
              md={6}
            >
              <SocialLinkCard />
            </Grid>
          </Grid>
        </BoxHeight>
      </Container>
    </React.Fragment>
  );
}
