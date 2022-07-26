import Typewriter from "typewriter-effect";
import Typography from "@mui/material/Typography";
import { TypographyTypeWriter } from "../../Portables/Styles/TypographyStyle";

export interface ITypeWriterProps {
  setChoice?: (bool: boolean) => void;
  typewriterMessage1: string;
  typewriterMessage2: string;
  cursor: string;
  initialPause: number;
  setState?: (arg: any, changeState: (arg: any) => void) => void;
  setExpand?: (bool: boolean) => void;
}

export function TypeWriter(props: ITypeWriterProps) {
  const {
    typewriterMessage1,
    typewriterMessage2,
    setChoice,
    setState,
    cursor,
    initialPause,
    setExpand,
  } = props;

  return (
    <Typography
      component={"span"}
      variant="body1"
      sx={TypographyTypeWriter}
      color="inherit"
    >
      <Typewriter
        options={{
          autoStart: true,
          delay: 10,
          cursor: cursor,
          deleteSpeed: 100,
        }}
        onInit={(typewriter) => {
          typewriter
            .pauseFor(initialPause)
            .typeString(typewriterMessage1)
            .pauseFor(1000)
            .typeString(typewriterMessage2)
            .callFunction(() => {
              if (setChoice !== undefined && setState !== undefined) {
                setState(true, setChoice);
              }
              if (setExpand !== undefined && setState !== undefined) {
                setState(true, setExpand);
              }
            })
            .start();
        }}
      />
    </Typography>
  );
}
