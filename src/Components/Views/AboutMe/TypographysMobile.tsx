import Slide from "@mui/material/Slide";
import Stack from "@mui/material/Stack";
import * as React from "react";
import Typography from "@mui/material/Typography";
import { TypographyAboutMe } from "../../Portables/Styles/TypographyStyle";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import { DeveloperSkills } from "./DeveloperSkills";
import { LearningSkills } from "./LearningSkills";

export interface ITypographysMobileProps {}

export function TypographysMobile(props: ITypographysMobileProps) {
  return (
    <React.Fragment>
      <Container maxWidth="sm">
        <Box display="flex" alignItems="center" justifyContent="center">
          <Stack>
            <Typography variant="body2" color="inherit" sx={TypographyAboutMe}>
              In questa sezione troverai informazioni riguardo la mia formazione
              scolastica, universitaria e in campo lavorativo. <br />
              Inoltre vi è una sezione su quello che sto cercando di apprendere
              al momento per espandere le mie conoscenze.
            </Typography>
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
            <Box>
              <DeveloperSkills />
            </Box>

            <Box sx={{ marginBottom: 3 }}>
              <LearningSkills />
            </Box>
          </Stack>
        </Box>
      </Container>
    </React.Fragment>
  );
}
