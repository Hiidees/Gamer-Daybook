import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import FormControl from "@mui/material/FormControl";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import * as React from "react";
import { ButtonLoginStyle } from "../../Portables/Styles/ButtonStyle";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";

export interface ILoginProps {}

export function Login(props: ILoginProps) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <React.Fragment>
      <IconButton
        size="large"
        sx={ButtonLoginStyle}
        disableRipple
        color="inherit"
        aria-label="login"
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <ExpandLessIcon fontSize="inherit" />
      </IconButton>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            backgroundImage: "none",
            backgroundColor: "none",
            boxShadow: "none",
            background: "none",
          },
        }}
      >
        <Container disableGutters>
          <FormControl>
            <Stack
              sx={{
                justifyContent: "center",
              }}
            >
              <TextField
                sx={{
                  marginBottom: 2,
                  backgroundColor: "#311336",
                }}
                label="Email"
                id="email"
                size="medium"
              />
              <TextField
                sx={{ marginBottom: 2, backgroundColor: "#311336" }}
                label="Password"
                type="password"
                id="password"
                size="medium"
              />
              <Button
                type="submit"
                onClick={handleClose}
                variant="contained"
                sx={{ backgroundColor: "#7d0075" }}
              >
                Login
              </Button>
            </Stack>
          </FormControl>
        </Container>
      </Menu>
    </React.Fragment>
  );
}
