import * as React from "react";
import Container from "@mui/material/Container";
import { DrawerAboutMe } from "./DrawerAboutMe";
import useAppTranslation from "../../../Hooks/useAppTranslation";
import { MyHelmet } from "../../Utils/Helmet/MyHelmet";
import useMediaQuery from "@mui/material/useMediaQuery";
import { DisableKey } from "../../../Domains/Enums/DisableKeyEnums";
import Box from "@mui/material/Box";
import { TypographysDesktop } from "./TypographysDesktop";
import { TypographysMobile } from "./TypographysMobile";
import { AppbarAboutMe } from "./AppbarAboutMe";

export interface IAboutMeProps {
  setDisableKey: (
    value: DisableKey,
    setDisable: (value: DisableKey) => void
  ) => void;
  setVisibilityKey: (
    value: DisableKey,
    setVisibility: (value: DisableKey) => void
  ) => void;
  resizeListener: (height: number, setHeight: (height: number) => void) => void;
}

export function AboutMe(props: IAboutMeProps) {
  const { setDisableKey, resizeListener, setVisibilityKey } = props;
  const [disable, setDisable] = React.useState<DisableKey>(DisableKey.default);
  const [visibility, setVisibility] = React.useState<DisableKey>(
    DisableKey.default
  );
  const [height, setHeight] = React.useState(window.innerHeight);
  const translationState = useAppTranslation();
  const matches = useMediaQuery("(min-width:600px)");

  window.addEventListener("resize", () =>
    resizeListener(window.innerHeight, setHeight)
  );

  return (
    <React.Fragment>
      <MyHelmet title={translationState.translation["AboutMe"]} />
      <AppbarAboutMe />
      <Container maxWidth="md">
        {matches && (
          <React.Fragment>
            <DrawerAboutMe
              setDisableKey={setDisableKey}
              disable={disable}
              setDisable={setDisable}
              setVisibilityKey={setVisibilityKey}
              setVisibility={setVisibility}
            />

            <Box
              display="flex"
              alignItems="center"
              justifyContent="center"
              sx={{ height: height - 100 }}
            >
              <TypographysDesktop
                disable={disable}
                visibility={visibility}
                height={height}
              />
            </Box>
          </React.Fragment>
        )}

        {!matches && (
          <React.Fragment>
            <Box display="flex" alignItems="center" justifyContent="center">
              <TypographysMobile />
            </Box>
          </React.Fragment>
        )}
      </Container>
    </React.Fragment>
  );
}
