
import Alert from "@mui/material/Alert";
import { styled } from "@mui/material/styles";

type AlertSnackbarProps = {
  mycolor: string;
}
export const AlertSnackbar = styled(Alert)<AlertSnackbarProps>(({ mycolor }) => ({
    background: "none",
    width: "100%",
    textAlign: "center",
    justifyContent: "center",
    color: mycolor
}));
