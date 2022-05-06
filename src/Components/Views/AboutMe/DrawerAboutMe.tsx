import Drawer from "@mui/material/Drawer";
import { ButtonDrawerAppbarStyle } from "../../Portables/Styles/ButtonStyle";
import { PaperDrawer } from "../../Portables/Styles/PaperStyle";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Slide from "@mui/material/Slide";
import React from "react";
import { StackDrawer } from "../../Portables/Styles/StackStyle";
import { DisableKey } from "../../../Domains/Enums/DisableKeyEnums";

export interface IDrawerAboutMeProps {
  setDisableKey: (
    value: DisableKey,
    setDisable: (value: DisableKey) => void
  ) => void;
  setDisable: (value: DisableKey) => void;
  disable: DisableKey;
  setVisibilityKey: (
    value: DisableKey,
    setVisibility: (value: DisableKey) => void
  ) => void;
  setVisibility: (value: DisableKey) => void;
}

export function DrawerAboutMe(props: IDrawerAboutMeProps) {
  const {
    setDisable,
    setDisableKey,
    disable,
    setVisibilityKey,
    setVisibility,
  } = props;
  const [disableHover, setDisableHover] = React.useState(false);
  return (
    <Drawer
      variant="permanent"
      anchor="left"
      PaperProps={{
        style: PaperDrawer,
      }}
    >
      <Slide direction="right" timeout={2000} in={true}>
        <Stack spacing={4} sx={StackDrawer}>
          <Button
            variant="text"
            color="inherit"
            disabled={disable === DisableKey.disableOne ? true : false}
            disableRipple
            onMouseOver={() => {
              !disableHover &&
                setVisibilityKey(DisableKey.disableOne, setVisibility);
            }}
            onMouseLeave={() => {
              !disableHover &&
                setVisibilityKey(DisableKey.default, setVisibility);
            }}
            onClick={() => {
              setDisableKey(DisableKey.disableOne, setDisable);
              setVisibilityKey(DisableKey.disableOne, setVisibility);
              setDisableHover(true);
            }}
            sx={ButtonDrawerAppbarStyle}
          >
            1
          </Button>
          <Button
            variant="text"
            color="inherit"
            disabled={disable === DisableKey.disableTwo ? true : false}
            disableRipple
            onMouseOver={() => {
              !disableHover &&
                setVisibilityKey(DisableKey.disableTwo, setVisibility);
            }}
            onMouseLeave={() => {
              !disableHover &&
                setVisibilityKey(DisableKey.default, setVisibility);
            }}
            onClick={() => {
              setDisableKey(DisableKey.disableTwo, setDisable);
              setVisibilityKey(DisableKey.disableTwo, setVisibility);
              setDisableHover(true);
            }}
            sx={ButtonDrawerAppbarStyle}
          >
            2
          </Button>
          <Button
            variant="text"
            color="inherit"
            disabled={disable === DisableKey.disableThree ? true : false}
            disableRipple
            onMouseOver={() => {
              !disableHover &&
                setVisibilityKey(DisableKey.disableThree, setVisibility);
            }}
            onMouseLeave={() => {
              !disableHover &&
                setVisibilityKey(DisableKey.default, setVisibility);
            }}
            onClick={() => {
              setDisableKey(DisableKey.disableThree, setDisable);
              setVisibilityKey(DisableKey.disableThree, setVisibility);
              setDisableHover(true);
            }}
            sx={ButtonDrawerAppbarStyle}
          >
            3
          </Button>
        </Stack>
      </Slide>
    </Drawer>
  );
}
