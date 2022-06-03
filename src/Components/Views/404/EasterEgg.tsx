import * as React from "react";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Button404Style } from "../../Portables/Styles/ButtonStyle";
import { MyHelmet } from "../../Utils/Helmet/MyHelmet";
import { BoxHeight } from "../../Portables/Styles/BoxStyle";

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
      <MyHelmet title={"404"} />
      <BoxHeight
        display="flex"
        alignItems="center"
        justifyContent="center"
        myheight={height - 100}
      >
        <Stack spacing={2} sx={{ width: "100%" }}>
          <Typography
            variant="h1"
            textAlign={"center"}
            sx={{ fontSize: "35px" }}
            color="inherit"
          >
            Easter egg
          </Typography>
          <Button
            sx={Button404Style}
            disableRipple
            color="inherit"
            onClick={() => {
              goTo("");
            }}
          >
            Le margherite fuggono, quando nessuno le osserva
          </Button>
        </Stack>
      </BoxHeight>
    </Container>
  );
}
