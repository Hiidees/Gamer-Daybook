import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import * as React from "react";
import useAppTranslation from "../../../Hooks/useAppTranslation";
import SupportedLangugesEnum from "../../../Domains/Enums/AppTranslationEnums";
import { ListButtonLanguage } from "../../Portables/Styles/ListStyle";
import useCookies from "../../../Hooks/useCookies";
import { AppbarGoBack } from "../../Utils/Appbar/AppbarGoBack";

export interface IChooseLanguageProps {
  resizeListener: (height: number, setHeight: (height: number) => void) => void;
}

export function ChooseLanguage(props: IChooseLanguageProps) {
  const { resizeListener } = props;
  const [height, setHeight] = React.useState(window.innerHeight);

  const translationState = useAppTranslation();
  const Language = ["Italiano", "English"];

  window.addEventListener("resize", () =>
    resizeListener(window.innerHeight, setHeight)
  );
  return (
    <React.Fragment>
      {useCookies.getCookie("language") && <AppbarGoBack />}
      <Container maxWidth="xs">
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          sx={{ height: height - 100 }}
        >
          <Stack spacing={2} sx={{ width: "100%" }}>
            <Typography
              variant="h1"
              textAlign={"center"}
              sx={{ fontSize: "35px" }}
            >
              {translationState.translation["Choose the language"]}
            </Typography>
            <List sx={{ justifyContent: "center" }}>
              {Language.map((language) => (
                <ListItem
                  button
                  sx={ListButtonLanguage}
                  key={language}
                  onClick={() => {
                    translationState.updateTranslation(
                      language == "Italiano"
                        ? SupportedLangugesEnum.It
                        : SupportedLangugesEnum.En
                    );
                  }}
                >
                  <ListItemText
                    primary={
                      language === "Italiano"
                        ? translationState.translation["Italian"]
                        : translationState.translation["English"]
                    }
                  />
                </ListItem>
              ))}
            </List>
          </Stack>
        </Box>
      </Container>
    </React.Fragment>
  );
}
