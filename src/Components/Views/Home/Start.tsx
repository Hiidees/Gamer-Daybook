import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import * as React from "react";
import { ButtonStartStyle } from "../../Portables/Styles/ButtonStyle";
import { TypographyMenu } from "../../Portables/Styles/TypographyStyle";
import useCookies from "../../../Hooks/useCookies";
import useAppTranslation from "../../../Hooks/useAppTranslation";

export interface IStartProps {
  setState: (arg: any, changeState: (arg: any) => void) => void;
  setSubMenu: (bool: boolean) => void;
}

export default function Start(props: IStartProps) {
  const { setState, setSubMenu } = props;
  const translationState = useAppTranslation();

  return (
    <React.Fragment>
      <Typography
        variant="h1"
        sx={TypographyMenu}
        textAlign={"center"}
        color="inherit"
      >
        My gamer daybook
      </Typography>
      <Button
        sx={ButtonStartStyle}
        disableRipple
        color="inherit"
        onClick={() => {
          useCookies.setCookie("start", "true");
          setState(true, setSubMenu);
        }}
      >
        {translationState.translation["Start"]}
      </Button>
    </React.Fragment>
  );
}
