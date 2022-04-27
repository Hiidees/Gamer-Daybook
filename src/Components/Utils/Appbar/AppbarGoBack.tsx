import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";
import { AppbarAbout } from "../../Portables/Styles/AppbarStyle";

export interface IAppbarGoBackProps {}

export function AppbarGoBack(props: IAppbarGoBackProps) {
  const navigate = useNavigate();
  return (
    <AppBar color="primary" sx={AppbarAbout}>
      <Toolbar>
        <IconButton size="large" disableRipple onClick={() => navigate(-1)}>
          <ArrowBackIcon fontSize="inherit" />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}
