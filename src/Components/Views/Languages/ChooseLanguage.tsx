import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import * as React from "react";
import useAppTranslation from "../../../Hooks/useAppTranslation";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import { ButtonMenuStyle } from "../../Portables/Styles/ButtonStyle";
import SupportedLangugesEnum from "../../../Domains/Enums/AppTranslationEnums";

export interface IChooseLanguageProps {
  resizeListener: (height: number, setHeight: (height: number) => void) => void;
  goTo: (path: string) => void;
}

export function ChooseLanguage(props: IChooseLanguageProps) {
  const { goTo, resizeListener } = props;
  const [height, setHeight] = React.useState(window.innerHeight);

  const translationState = useAppTranslation();
  const Language = ["Italiano", "English"];

  window.addEventListener("resize", () =>
    resizeListener(window.innerHeight, setHeight)
  );
  return (
    <React.Fragment>
      <Container maxWidth="md">
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          sx={{ height: height }}
        >
          <Stack spacing={2}>
            <Typography variant="h3" textAlign={"center"} color="#dcd5dd">
              {translationState.translation["Choose"]}
            </Typography>
            <List>
              {Language.map((language) => (
                <ListItem
                  button
                  key={language}
                  onClick={() =>
                    translationState.updateTranslation(
                      language == "Italiano"
                        ? SupportedLangugesEnum.It
                        : SupportedLangugesEnum.En
                    )
                  }
                  disabled={
                    language === translationState.getTranslationKey()
                      ? true
                      : false
                  }
                >
                  <ListItemIcon sx={{ color: "#acc7fe" }}>
                    {language === translationState.getTranslationKey() ? (
                      <CheckBoxIcon />
                    ) : (
                      <CheckBoxOutlineBlankIcon />
                    )}
                  </ListItemIcon>
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

            <Button disableRipple variant="contained" color="success">
              Confirm
            </Button>
          </Stack>
        </Box>
      </Container>
    </React.Fragment>
  );
}
