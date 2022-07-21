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
import { BoxHeight } from "../../Portables/Styles/BoxStyle";

export interface IAboutMeProps {
  setState: (arg: any, changeState: (arg: any) => void) => void;
  resizeListener: (height: number, setHeight: (height: number) => void) => void;
}

export function AboutMe(props: IAboutMeProps) {
  const { setState, resizeListener } = props;
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
              setState={setState}
              disable={disable}
              setDisable={setDisable}
              setVisibility={setVisibility}
            />

            <BoxHeight
              display="flex"
              alignItems="center"
              justifyContent="center"
              myheight={height - 100}
            >
              <TypographysDesktop
                setState={setState}
                disable={disable}
                visibility={visibility}
                height={height}
              />
            </BoxHeight>
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
