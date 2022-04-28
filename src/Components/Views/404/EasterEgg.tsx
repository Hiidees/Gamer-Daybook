import * as React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { ButtonMenuStyle } from "../../Portables/Styles/ButtonStyle";

export interface IEasterEggProps {
  resizeListener: (height: number, setHeight: (height: number) => void) => void;
  goTo: (path: string) => void;
}

export function EasterEgg(props: IEasterEggProps) {
  const { resizeListener, goTo } = props;
  const [height, setHeight] = React.useState(window.innerHeight);

  window.addEventListener("resize", () =>
    resizeListener(window.innerHeight, setHeight)
  );

  return (
    <Container maxWidth="xs">
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        sx={{ height: height }}
      >
        <Stack spacing={2} sx={{ width: "100%" }}>
          <Typography
            variant="h1"
            textAlign={"center"}
            sx={{ fontSize: "35px" }}
            color="#dcd5dd"
          >
            Easter egg
          </Typography>
          <Button
            sx={ButtonMenuStyle}
            disableRipple
            color="inherit"
            onClick={() => {
              goTo("");
            }}
          >
            Go back to Home
          </Button>
        </Stack>
      </Box>
    </Container>
  );
}
