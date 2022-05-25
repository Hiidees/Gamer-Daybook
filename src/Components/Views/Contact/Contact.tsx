import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { AppbarGoBack } from "../../Utils/Appbar/AppbarGoBack";
import { SocialLinkCard } from "./SocialLinkCard";
import { FormSendEmail } from "./FormSendEmail";
import React from "react";
import useAppTranslation from "../../../Hooks/useAppTranslation";
import { MyHelmet } from "../../Utils/Helmet/MyHelmet";

export interface IContactProps {
  resizeListener: (height: number, setHeight: (height: number) => void) => void;
  sendEmail: (
    data: IEmailForm,
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
  const { resizeListener, sendEmail } = props;
  const translationState = useAppTranslation();
  const [height, setHeight] = React.useState(window.innerHeight);
  window.addEventListener("resize", () =>
    resizeListener(window.innerHeight, setHeight)
  );

  return (
    <React.Fragment>
      <MyHelmet title={translationState.translation["Contact"]} />
      <AppbarGoBack />
      <Container maxWidth="md">
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          sx={{ height: height - 100 }}
        >
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={12} sm={6} md={6}>
              <FormSendEmail sendEmail={sendEmail} />
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
        </Box>
      </Container>
    </React.Fragment>
  );
}
