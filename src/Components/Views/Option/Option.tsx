import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import * as React from "react";
import useAppTranslation from "../../../Hooks/useAppTranslation";
import { ButtonMenuStyle } from "../../Portables/Styles/ButtonStyle";
import { AppbarGoBack } from "../../Utils/Appbar/AppbarGoBack";
import { MyHelmet } from "../../Utils/Helmet/MyHelmet";

export interface IOptionProps {
  onSwitchTheme: () => void;
  resizeListener: (height: number, setHeight: (height: number) => void) => void;
  goTo: (path: string) => void;
}

export function Option(props: IOptionProps) {
  const [height, setHeight] = React.useState(window.innerHeight);
  const { onSwitchTheme, resizeListener, goTo } = props;
  const translationState = useAppTranslation();

  window.addEventListener("resize", () =>
    resizeListener(window.innerHeight, setHeight)
  );
  return (
    <React.Fragment>
      <MyHelmet title={translationState.translation["Options"]} />
      <AppbarGoBack />
      <Container maxWidth="md">
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          sx={{ height: height - 100 }}
        >
          <Stack spacing={2}>
            <Button
              sx={ButtonMenuStyle}
              disableRipple
              color="inherit"
              onClick={() => {
                onSwitchTheme();
                window.location.reload();
              }}
            >
              {translationState.translation["Change theme"]}
            </Button>
            <Button
              sx={ButtonMenuStyle}
              disableRipple
              color="inherit"
              onClick={() => goTo("languages")}
            >
              {translationState.translation["Change the language"]}
            </Button>
          </Stack>
        </Box>
      </Container>
    </React.Fragment>
  );
}
