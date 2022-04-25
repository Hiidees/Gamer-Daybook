import * as React from "react";
import Container from "@mui/material/Container";
import { AppbarAboutMe } from "./AppbarAboutMe";
import { DrawerAboutMe } from "./DrawerAboutMe";
export interface IAboutMeProps {}

export function AboutMe(props: IAboutMeProps) {
  return (
    <React.Fragment>
      <AppbarAboutMe />
      <Container maxWidth="md">
        <DrawerAboutMe />
      </Container>
    </React.Fragment>
  );
}
