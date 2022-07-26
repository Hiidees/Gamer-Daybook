import Slide from "@mui/material/Slide";
import Typography from "@mui/material/Typography";
import * as React from "react";
import { DisableKey } from "../../../Domains/Enums/DisableKeyEnums";
import { TypographyAboutMe } from "../../Portables/Styles/TypographyStyle";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import { DeveloperSkills } from "./DeveloperSkills";
import { LearningSkills } from "./LearningSkills";
import Collapse from "@mui/material/Collapse";

export interface ITypographysDesktopProps {
  disable: DisableKey;
  visibility: DisableKey;
  height: number;
  setState: (arg: any, changeState: (arg: any) => void) => void;
}

export function TypographysDesktop(props: ITypographysDesktopProps) {
  const { disable, visibility, height, setState } = props;
  return (
    <React.Fragment>
      <Container maxWidth="sm">
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          sx={{ height: height - 100 }}
        >
          {visibility === DisableKey.default && (
            <React.Fragment>
              <Collapse orientation="vertical" in={true}>
                <Typography
                  variant="body2"
                  color="inherit"
                  sx={TypographyAboutMe}
                >
                  In questa sezione troverai informazioni riguardo la mia
                  formazione scolastica, universitaria e in campo lavorativo.
                  <br />
                  <br />
                  Inoltre vi è una sezione su quello che sto cercando di
                  apprendere al momento per espandere le mie conoscenze.
                </Typography>
              </Collapse>
            </React.Fragment>
          )}
          {(disable === DisableKey.disableOne ||
            visibility === DisableKey.disableOne) && (
            <Typography variant="body2" color="inherit" sx={TypographyAboutMe}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              euismod enim sed semper ultrices. Donec magna augue, bibendum eu
              auctor a, consequat et nibh. Morbi eu blandit sapien. Nullam sit
              amet urna congue, suscipit mauris a, molestie sem. Cras pharetra
              libero eu ex dapibus, sit amet accumsan massa congue. Mauris
              fermentum sed dolor vel accumsan. Sed volutpat aliquam dui ac
              molestie. Praesent ut vehicula metus, sed scelerisque ipsum.
              Vivamus gravida rhoncus libero, ut sodales purus ultrices quis.
              Cras elit lacus, molestie a varius eu, sollicitudin vel nulla.
              Fusce turpis augue, laoreet et libero iaculis, pulvinar pharetra
              justo. Pellentesque ut gravida lectus. Nullam semper elit ut
              consequat vehicula. Mauris a rhoncus risus. Aliquam non erat eu
              massa porta scelerisque at non est. Quisque ullamcorper tortor ac
              neque sagittis, laoreet laoreet arcu dictum.
            </Typography>
          )}

          {(disable === DisableKey.disableTwo ||
            visibility === DisableKey.disableTwo) && <DeveloperSkills />}

          {(disable === DisableKey.disableThree ||
            visibility === DisableKey.disableThree) && <LearningSkills />}
        </Box>
      </Container>
    </React.Fragment>
  );
}
