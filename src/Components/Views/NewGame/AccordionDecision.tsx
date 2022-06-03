import * as React from "react";
import Box from "@mui/material/Box";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import {
  AccordionNewGame,
  PaperNewGame,
  AccordionSummaryNewGame,
} from "../../Portables/Styles/AccordionStyle";
import {
  ButtonDisabledDarkStyle,
  ButtonDisabledLightStyle,
} from "../../Portables/Styles/ButtonStyle";
import useAppTheme from "../../../Hooks/useAppTheme";
import { AppThemeKind } from "../../../Domains/Enums/AppThemeEnums";
import useAppTranslation from "../../../Hooks/useAppTranslation";

export interface IAccordionDecisionProps {
  setState: (arg: any, changeState: (arg: any) => void) => void;
  setExpand: (bool: boolean) => void;
  setSelectedTypeWriter: (value: number) => void;
  selectedTypeWriter: number;
  expand: boolean;
}

export function AccordionDecision(props: IAccordionDecisionProps) {
  const {
    setState,
    setExpand,
    expand,
    setSelectedTypeWriter,
    selectedTypeWriter,
  } = props;
  const themeUIStore = useAppTheme();
  const translationState = useAppTranslation();
  return (
    <React.Fragment>
      <ClickAwayListener onClickAway={() => setState(false, setExpand)}>
        <Box display="flex" alignItems="center" justifyContent="center">
          <Paper sx={PaperNewGame} elevation={3}>
            <Accordion sx={AccordionNewGame} expanded={expand}>
              <AccordionSummary
                aria-controls="panel1a-content"
                id="panel1a-header"
                onClick={() => setState(!expand, setExpand)}
                sx={AccordionSummaryNewGame}
              >
                {translationState.translation["What do you wanna know?"]}
              </AccordionSummary>
              <AccordionDetails>
                <Box>
                  <Button
                    fullWidth
                    disableRipple
                    color="inherit"
                    sx={
                      themeUIStore.themeKind === AppThemeKind.Light
                        ? ButtonDisabledLightStyle
                        : ButtonDisabledDarkStyle
                    }
                    disabled={selectedTypeWriter === 1 ? true : false}
                    onClick={() => {
                      setState(1, setSelectedTypeWriter);
                      setState(false, setExpand);
                    }}
                  >
                    {translationState.translation["Question1"]}
                  </Button>
                  <Button
                    fullWidth
                    disableRipple
                    color="inherit"
                    sx={
                      themeUIStore.themeKind === AppThemeKind.Light
                        ? ButtonDisabledLightStyle
                        : ButtonDisabledDarkStyle
                    }
                    disabled={selectedTypeWriter === 2 ? true : false}
                    onClick={() => {
                      setState(2, setSelectedTypeWriter);
                      setState(false, setExpand);
                    }}
                  >
                    {translationState.translation["Question2"]}
                  </Button>
                  <Button
                    fullWidth
                    disableRipple
                    color="inherit"
                    sx={
                      themeUIStore.themeKind === AppThemeKind.Light
                        ? ButtonDisabledLightStyle
                        : ButtonDisabledDarkStyle
                    }
                    disabled={selectedTypeWriter === 3 ? true : false}
                    onClick={() => {
                      setState(3, setSelectedTypeWriter);
                      setState(false, setExpand);
                    }}
                  >
                    {translationState.translation["Question2"]}
                  </Button>
                </Box>
              </AccordionDetails>
            </Accordion>
          </Paper>
        </Box>
      </ClickAwayListener>
    </React.Fragment>
  );
}
