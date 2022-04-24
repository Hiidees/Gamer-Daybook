import Alert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";
import * as React from "react";
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
        <Alert
          icon={false}
          sx={{
            background: "none",
            width: "100%",
            color: color,
            textAlign: "center",
            justifyContent: "center",
          }}
        >
          {message}
        </Alert>
      </Snackbar>
    </React.Fragment>
  );
}
