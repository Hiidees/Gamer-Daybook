import * as React from "react";
import Typewriter from "typewriter-effect";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
export interface INewGameProps {}

export function NewGame(props: INewGameProps) {
  const [height, setHeight] = React.useState(window.innerHeight);
  function resizeListener() {
    setHeight(window.innerHeight);
  }
  window.addEventListener("resize", resizeListener); //Evento scaturito dal resize (Appartiene al DOM)
  return (
    <React.Fragment>
      <Container maxWidth="sm">
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          sx={{ height: height - 100 }}
        >
          <Typography variant="body1" color="white">
            <Typewriter
              options={{
                autoStart: true,
                delay: 80,
                cursor: "",
              }}
              onInit={(typewriter) => {
                typewriter
                  .pauseFor(1500)
                  .typeString("Benvenuto <br>")
                  .pauseFor(1000)
                  .typeString("Il mio nome è Marco <br>")
                  .pauseFor(1000)
                  .typeString("Piacere di conoscerti <br>")
                  .pauseFor(1000)
                  .typeString(
                    "Se sei qui significa che sei interessato al mio passato, presente e futuro <br>"
                  )
                  .pauseFor(1000)
                  .typeString(
                    "Beh mettiti comodo, perchè sto per raccontarti una storia <br>"
                  )
                  .pauseFor(1000)
                  .typeString("La mia storia. <br>")
                  .pauseFor(1000)
                  .start();
              }}
            />
            {/* <Typewriter
              options={{
                strings: [
                  "Ciao!",
                  "Il mio nome è Marco",
                  "Se sei qui significa che sei interessato al mio passato, presente e futuro",
                  "Beh mettiti comodo, perchè sto per raccontarti una storia",
                  "La storia della mia vita.",
                ],
                autoStart: true,
                deleteSpeed: 10,
                delay: 80,
                cursor: "",
              }}
            /> */}
          </Typography>
        </Box>
      </Container>
    </React.Fragment>
  );
}
