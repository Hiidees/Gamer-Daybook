import Snackbar from "@mui/material/Snackbar";
import * as React from "react";
import { AlertSnackbar } from "../../Portables/Styles/AlertStyles";
import { SnackbarInfoStyle } from "../../Portables/Styles/SnackbarStyle";

export interface ISnackbarInfoProps {
  vertical: "top" | "bottom";
  horizontal: "left" | "center" | "right";
  openInfo: boolean;
  message: string;
  color: string;
}

export function SnackbarInfo(props: ISnackbarInfoProps) {
  const { vertical, horizontal, openInfo, message, color } = props;

  return (
    <React.Fragment>
      <Snackbar
        anchorOrigin={{ vertical, horizontal }}
        sx={SnackbarInfoStyle}
        open={openInfo}
      >
        <AlertSnackbar icon={false} mycolor={color}>
          {message}
        </AlertSnackbar>
      </Snackbar>
    </React.Fragment>
  );
}
