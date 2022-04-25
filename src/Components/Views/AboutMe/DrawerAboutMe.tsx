import Drawer from "@mui/material/Drawer";
import { ButtonDrawerStyle } from "../../Portables/Styles/ButtonStyle";
import { PaperDrawer } from "../../Portables/Styles/PaperStyle";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Slide from "@mui/material/Slide";
import React from "react";
import { StackDrawer } from "../../Portables/Styles/StackStyle";

export interface IDrawerAboutMeProps {}

export function DrawerAboutMe(props: IDrawerAboutMeProps) {
  const [disable, setDisable] = React.useState(false);
  return (
    <Drawer
      variant="permanent"
      anchor="left"
      PaperProps={{
        style: PaperDrawer,
      }}
    >
      <Slide direction="right" timeout={2000} in={true}>
        <Stack spacing={2} sx={StackDrawer}>
          <Button
            variant="text"
            color="inherit"
            disabled={disable}
            disableRipple
            onClick={() => setDisable(true)}
            sx={ButtonDrawerStyle}
          >
            Placeholder
          </Button>
          <Button
            variant="text"
            color="inherit"
            disableRipple
            onClick={() => setDisable(true)}
            sx={ButtonDrawerStyle}
          >
            Placeholder
          </Button>
          <Button
            variant="text"
            color="inherit"
            disableRipple
            onClick={() => setDisable(true)}
            sx={ButtonDrawerStyle}
          >
            Placeholder
          </Button>
          <Button
            variant="text"
            color="inherit"
            disableRipple
            onClick={() => setDisable(true)}
            sx={ButtonDrawerStyle}
          >
            Placeholder
          </Button>
        </Stack>
      </Slide>
    </Drawer>
  );
}
