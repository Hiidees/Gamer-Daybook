import * as React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import { SnackbarInfo } from "../../Utils/Snackbar/SnackbarInfo";
import { AppbarGoBack } from "../../Utils/Appbar/AppbarGoBack";
import { TypeWriter } from "../../Utils/TypeWriter/TypeWriter";
import useCookies from "../../../Hooks/useCookies";
import { MyHelmet } from "../../Utils/Helmet/MyHelmet";
import useAppTranslation from "../../../Hooks/useAppTranslation";
import Stack from "@mui/material/Stack";
import { SkipContinue } from "./SkipContinue";
import { AccordionDecision } from "./AccordionDecision";

export interface INewGameProps {
  setSnackbar: (
    bool: boolean,
    openSnackbarInfo: (bool: boolean) => void
  ) => void;
  setMessage: (
    message: string,
    setInfoMessage: (message: string) => void
  ) => void;
  resizeListener: (height: number, setHeight: (height: number) => void) => void;
  goTo: (path: string) => void;
}

enum typewriterMessages {
  typewriterMessage1 = "Benvenuto <br> Il mio nome è Marco <br> Piacere di conoscerti <br>Se sei qui significa che sei interessato al mio passato, presente e futuro <br> <br>",
  typewriterMessage2 = "Beh mettiti comodo, perchè sto per raccontarti una storia <br> La mia storia. <br>",
  LoremIpsum1A = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a erat posuere, faucibus enim eget, pellentesque lacus. Morbi placerat, justo nec finibus iaculis, urna magna volutpat velit, non commodo est dui non ex. Vestibulum mollis ligula quis porttitor sagittis.",
  LoremIpsum1B = "In pellentesque est in tortor tristique, vel sollicitudin tortor ornare. Etiam quis justo sollicitudin, volutpat dolor ut, tempus sem. Nam accumsan, urna sit amet condimentum facilisis, enim augue ultrices erat, in dictum ligula lorem eget velit.",
  LoremIpsum2A = "Sed vitae vestibulum augue, vitae blandit ipsum. Donec sem quam, facilisis posuere cursus sed, accumsan vel mi. Aenean accumsan, est at viverra maximus, dolor ipsum rutrum orci, quis tincidunt est libero in neque. Etiam vitae lobortis justo. Phasellus odio nibh, auctor ac tellus at, placerat mattis enim.",
  LoremIpsum2B = "Vivamus fringilla suscipit enim vitae feugiat. Duis iaculis non erat in accumsan. Suspendisse ac ornare felis. Sed ut urna vitae tellus hendrerit mattis et eget felis. Nulla ligula odio, consequat eu quam quis, semper volutpat turpis. Maecenas viverra elementum erat, quis fringilla leo porta imperdiet.",
  LoremIpsum3A = "Maecenas lacinia facilisis enim at porttitor. Suspendisse potenti. Aenean semper velit eu ipsum tempus, nec pellentesque est sollicitudin. Integer id lorem non nibh imperdiet pharetra. Ut venenatis massa vel fermentum facilisis. Ut ut sapien lectus. Vestibulum pellentesque mauris non vulputate fermentum.",
  LoremIpsum3B = "Suspendisse sit amet nulla a sem feugiat iaculis. Sed id neque ullamcorper, efficitur nulla ut, interdum dui. Phasellus cursus ullamcorper scelerisque. Nulla eget tortor eros. Donec tempor mi dapibus, tincidunt mi ac, eleifend neque. Nulla ornare semper risus condimentum consectetur.",
}

export function NewGame(props: INewGameProps) {
  const { setSnackbar, resizeListener, setMessage, goTo } = props;
  const [height, setHeight] = React.useState(window.innerHeight);
  const [openInfo, setOpenInfo] = React.useState(false);
  const [infoMessage, setInfoMessage] = React.useState("");
  const vertical = "bottom";
  const horizontal = "center";
  const translationState = useAppTranslation();
  const [selectedTypeWriter, setSelectedTypeWriter] = React.useState(0);
  const [choice, setChoice] = React.useState(false);
  const [isContinue, setIsContinue] = React.useState(false);
  const [expand, setExpand] = React.useState(false);

  window.addEventListener("resize", () =>
    resizeListener(window.innerHeight, setHeight)
  );
  return (
    <React.Fragment>
      <MyHelmet title={translationState.translation["NewGame"]} />
      <AppbarGoBack />
      <Container maxWidth="sm">
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          sx={{
            pb: 10,
            height: !isContinue ? height - 100 : "none",
          }}
        >
          {!useCookies.getCookie("newgame") &&
            useCookies.setCookie("newgame", "true")}
          {!isContinue && (
            <React.Fragment>
              <Stack>
                <TypeWriter
                  setChoice={setChoice}
                  typewriterMessage1={typewriterMessages.typewriterMessage1}
                  typewriterMessage2={typewriterMessages.typewriterMessage2}
                  cursor=""
                  initialPause={1500}
                />
                {choice && (
                  <SkipContinue
                    setSnackbar={setSnackbar}
                    setInfoMessage={setInfoMessage}
                    setIsContinue={setIsContinue}
                    setMessage={setMessage}
                    goTo={goTo}
                    setOpenInfo={setOpenInfo}
                    setExpand={setExpand}
                  />
                )}
                <SnackbarInfo
                  vertical={vertical}
                  horizontal={horizontal}
                  openInfo={openInfo}
                  message={infoMessage}
                  color={"inherit"}
                />
              </Stack>
            </React.Fragment>
          )}
          {isContinue && (
            <React.Fragment>
              <Stack>
                {selectedTypeWriter === 1 && (
                  <TypeWriter
                    cursor=""
                    setExpand={setExpand}
                    initialPause={1000}
                    typewriterMessage1={typewriterMessages.LoremIpsum1A}
                    typewriterMessage2={typewriterMessages.LoremIpsum1B}
                  />
                )}
                {selectedTypeWriter === 2 && (
                  <TypeWriter
                    cursor=""
                    setExpand={setExpand}
                    initialPause={1000}
                    typewriterMessage1={typewriterMessages.LoremIpsum2A}
                    typewriterMessage2={typewriterMessages.LoremIpsum2B}
                  />
                )}
                {selectedTypeWriter === 3 && (
                  <TypeWriter
                    cursor=""
                    setExpand={setExpand}
                    initialPause={1000}
                    typewriterMessage1={typewriterMessages.LoremIpsum3A}
                    typewriterMessage2={typewriterMessages.LoremIpsum3B}
                  />
                )}
              </Stack>
            </React.Fragment>
          )}
        </Box>
        {isContinue && (
          <AccordionDecision
            setExpand={setExpand}
            setSelectedTypeWriter={setSelectedTypeWriter}
            selectedTypeWriter={selectedTypeWriter}
            expand={expand}
          />
        )}
      </Container>
    </React.Fragment>
  );
}
