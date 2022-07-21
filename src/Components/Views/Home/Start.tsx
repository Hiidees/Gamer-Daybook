import Button from "@mui/material/Button";
import * as React from "react";
import { ButtonStartStyle } from "../../Portables/Styles/ButtonStyle";
import useCookies from "../../../Hooks/useCookies";
import useAppTranslation from "../../../Hooks/useAppTranslation";
import CardMedia from "@mui/material/CardMedia";
import Box from "@mui/material/Box";

export interface IStartProps {
  setState: (arg: any, changeState: (arg: any) => void) => void;
  setSubMenu: (bool: boolean) => void;
}

export default function Start(props: IStartProps) {
  const { setState, setSubMenu } = props;
  const translationState = useAppTranslation();

  return (
    <React.Fragment>
      {/* <Typography
        variant="h1"
        sx={TypographyMenu}
        textAlign={"center"}
        color="inherit"
      >
        My gamer daybook
      </Typography> */}
      <Box width={"100%"} height={"80%"}>
        <CardMedia
          component="img"
          image="/2B.png"
          sx={{ width: { md: "70%", sm: "100%" }, margin: "0px auto" }}
        />
      </Box>

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
