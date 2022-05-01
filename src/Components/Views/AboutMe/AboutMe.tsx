import * as React from "react";
import Container from "@mui/material/Container";
import { AppbarAboutMe } from "./AppbarAboutMe";
import { DrawerAboutMe } from "./DrawerAboutMe";
import useAppTranslation from "../../../Hooks/useAppTranslation";
import { MyHelmet } from "../../Utils/Helmet/MyHelmet";
export interface IAboutMeProps {}

export function AboutMe(props: IAboutMeProps) {
  const translationState = useAppTranslation();
  return (
    <React.Fragment>
      <MyHelmet title={translationState.translation["AboutMe"]} />
      <AppbarAboutMe />
      <Container maxWidth="md">
        <DrawerAboutMe />
      </Container>
    </React.Fragment>
  );
}
