import Drawer from "@mui/material/Drawer";
import {
  ButtonDisabledDarkStyle,
  ButtonDisabledLightStyle,
} from "../../Portables/Styles/ButtonStyle";
import { PaperDrawer } from "../../Portables/Styles/PaperStyle";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Slide from "@mui/material/Slide";
import React from "react";
import { StackDrawer } from "../../Portables/Styles/StackStyle";
import { DisableKey } from "../../../Domains/Enums/DisableKeyEnums";
import useAppTheme from "../../../Hooks/useAppTheme";
import { AppThemeKind } from "../../../Domains/Enums/AppThemeEnums";

export interface IDrawerAboutMeProps {
  setState: (arg: any, changeState: (arg: any) => void) => void;
  setDisable: (value: DisableKey) => void;
  disable: DisableKey;
  setVisibility: (value: DisableKey) => void;
}

export function DrawerAboutMe(props: IDrawerAboutMeProps) {
  const themeUIStore = useAppTheme();
  const {
    setState,
    setDisable,
    disable,
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
              !disableHover && setState(DisableKey.disableOne, setVisibility);
            }}
            onMouseLeave={() => {
              !disableHover && setState(DisableKey.default, setVisibility);
            }}
            onClick={() => {
              setState(DisableKey.disableOne, setDisable);
              setState(DisableKey.disableOne, setVisibility);
              setState(true, setDisableHover);
            }}
            sx={
              themeUIStore.themeKind === AppThemeKind.Light
                ? ButtonDisabledLightStyle
                : ButtonDisabledDarkStyle
            }
          >
            Prova 1
          </Button>
          <Button
            variant="text"
            color="inherit"
            disabled={disable === DisableKey.disableTwo ? true : false}
            disableRipple
            onMouseOver={() => {
              !disableHover && setState(DisableKey.disableTwo, setVisibility);
            }}
            onMouseLeave={() => {
              !disableHover && setState(DisableKey.default, setVisibility);
            }}
            onClick={() => {
              setState(DisableKey.disableTwo, setDisable);
              setState(DisableKey.disableTwo, setVisibility);
              setState(true, setDisableHover);
            }}
            sx={
              themeUIStore.themeKind === AppThemeKind.Light
                ? ButtonDisabledLightStyle
                : ButtonDisabledDarkStyle
            }
          >
            Prova 2
          </Button>
          <Button
            variant="text"
            color="inherit"
            disabled={disable === DisableKey.disableThree ? true : false}
            disableRipple
            onMouseOver={() => {
              !disableHover && setState(DisableKey.disableThree, setVisibility);
            }}
            onMouseLeave={() => {
              !disableHover && setState(DisableKey.default, setVisibility);
            }}
            onClick={() => {
              setState(DisableKey.disableThree, setDisable);
              setState(DisableKey.disableThree, setVisibility);
              setState(true, setDisableHover);
            }}
            sx={
              themeUIStore.themeKind === AppThemeKind.Light
                ? ButtonDisabledLightStyle
                : ButtonDisabledDarkStyle
            }
          >
            Prova 3
          </Button>
        </Stack>
      </Slide>
    </Drawer>
  );
}
