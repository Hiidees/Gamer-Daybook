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
} from "../../Portables/Styles/AccordionStyle";

export interface IAccordionDecisionProps {
  setExpand: (bool: boolean) => void;
  expand: boolean;
}

export function AccordionDecision(props: IAccordionDecisionProps) {
  const { setExpand, expand } = props;
  return (
    <React.Fragment>
      <ClickAwayListener onClickAway={() => setExpand(false)}>
        <Box display="flex" alignItems="center" justifyContent="center">
          <Paper sx={PaperNewGame} elevation={3}>
            <Accordion sx={AccordionNewGame} expanded={expand}>
              <AccordionSummary
                aria-controls="panel1a-content"
                id="panel1a-header"
                onClick={() => setExpand(!expand)}
                sx={{
                  "& .MuiAccordionSummary-content": {
                    justifyContent: "center",
                  },
                }}
              >
                Cosa vuoi sapere?
              </AccordionSummary>
              <AccordionDetails>
                <Box>
                  <Button fullWidth variant="text">
                    Prova 1
                  </Button>
                  <Button fullWidth variant="text">
                    Prova 2
                  </Button>
                  <Button fullWidth variant="text">
                    Prova 3
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
