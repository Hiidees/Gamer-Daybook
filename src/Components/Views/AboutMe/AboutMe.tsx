import * as React from "react";
import Container from "@mui/material/Container";
import { AppbarAboutMe } from "./AppbarAboutMe";
import { DrawerAboutMe } from "./DrawerAboutMe";
import useAppTranslation from "../../../Hooks/useAppTranslation";
import { MyHelmet } from "../../Utils/Helmet/MyHelmet";
import useMediaQuery from "@mui/material/useMediaQuery";
import { DisableKey } from "../../../Domains/Enums/DisableKeyEnums";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { TypographyAboutMe } from "../../Portables/Styles/TypographyStyle";
import Slide from "@mui/material/Slide";

export interface IAboutMeProps {
  setDisableKey: (
    value: DisableKey,
    setDisable: (value: DisableKey) => void
  ) => void;
  setVisibilityKey: (
    value: DisableKey,
    setVisibility: (value: DisableKey) => void
  ) => void;
  resizeListener: (height: number, setHeight: (height: number) => void) => void;
}

export function AboutMe(props: IAboutMeProps) {
  const { setDisableKey, resizeListener, setVisibilityKey } = props;
  const [disable, setDisable] = React.useState<DisableKey>(DisableKey.default);
  const [visibility, setVisibility] = React.useState<DisableKey>(
    DisableKey.default
  );
  const [height, setHeight] = React.useState(window.innerHeight);
  const translationState = useAppTranslation();
  const matches = useMediaQuery("(min-width:600px)");

  window.addEventListener("resize", () =>
    resizeListener(window.innerHeight, setHeight)
  );

  return (
    <React.Fragment>
      <MyHelmet title={translationState.translation["AboutMe"]} />
      <AppbarAboutMe
        setDisableKey={setDisableKey}
        disable={disable}
        setDisable={setDisable}
        setVisibilityKey={setVisibilityKey}
        setVisibility={setVisibility}
      />
      <Container maxWidth="md">
        {matches && (
          <DrawerAboutMe
            setDisableKey={setDisableKey}
            disable={disable}
            setDisable={setDisable}
            setVisibilityKey={setVisibilityKey}
            setVisibility={setVisibility}
          />
        )}
        <Container maxWidth="sm">
          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            //sx={{ height: height - 100 }}
          >
            {visibility === DisableKey.default && (
              <React.Fragment>
                <Slide direction="down" timeout={2000} in={true}>
                  <Typography
                    variant="body2"
                    color="inherit"
                    sx={TypographyAboutMe}
                  >
                    Default testo di prova
                  </Typography>
                </Slide>
              </React.Fragment>
            )}
            {(disable === DisableKey.disableOne ||
              visibility === DisableKey.disableOne) && (
              <Typography
                variant="body2"
                color="inherit"
                sx={TypographyAboutMe}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                euismod enim sed semper ultrices. Donec magna augue, bibendum eu
                auctor a, consequat et nibh. Morbi eu blandit sapien. Nullam sit
                amet urna congue, suscipit mauris a, molestie sem. Cras pharetra
                libero eu ex dapibus, sit amet accumsan massa congue. Mauris
                fermentum sed dolor vel accumsan. Sed volutpat aliquam dui ac
                molestie. Praesent ut vehicula metus, sed scelerisque ipsum.
                Vivamus gravida rhoncus libero, ut sodales purus ultrices quis.
                Cras elit lacus, molestie a varius eu, sollicitudin vel nulla.
                Fusce turpis augue, laoreet et libero iaculis, pulvinar pharetra
                justo. Pellentesque ut gravida lectus. Nullam semper elit ut
                consequat vehicula. Mauris a rhoncus risus. Aliquam non erat eu
                massa porta scelerisque at non est. Quisque ullamcorper tortor
                ac neque sagittis, laoreet laoreet arcu dictum.
              </Typography>
            )}

            {(disable === DisableKey.disableTwo ||
              visibility === DisableKey.disableTwo) && (
              <Typography
                variant="body2"
                color="inherit"
                sx={TypographyAboutMe}
              >
                Curabitur eleifend ex eu feugiat iaculis. Ut volutpat, lectus id
                semper scelerisque, ante mauris accumsan ipsum, eget dapibus
                quam augue sed ante. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Nunc vitae consectetur mi. Integer et ultricies
                odio, sit amet efficitur eros. In hac habitasse platea dictumst.
                Aliquam sodales, mauris nec rhoncus commodo, ligula mauris
                dignissim orci, vel volutpat turpis ex vitae lacus. Duis feugiat
                eros eget nunc lacinia aliquet. Aenean iaculis malesuada sapien
                sed pulvinar. Nulla mattis non mauris vel condimentum. Cras
                tellus enim, finibus vitae eleifend quis, rutrum quis nunc.
                Vestibulum laoreet odio id augue lobortis cursus. Maecenas
                ullamcorper eget nunc quis tincidunt. In enim arcu, mollis id
                laoreet in, fringilla id sapien. Cras dapibus bibendum purus, ut
                semper urna malesuada ac.
              </Typography>
            )}

            {(disable === DisableKey.disableThree ||
              visibility === DisableKey.disableThree) && (
              <Typography
                variant="body2"
                color="inherit"
                sx={TypographyAboutMe}
              >
                Donec neque ligula, laoreet at elit a, efficitur sollicitudin
                quam. Sed bibendum erat congue lorem ornare maximus. Nam
                accumsan nulla non nibh feugiat tristique non quis nibh. In
                lacus velit, gravida at venenatis sed, imperdiet id ex. Proin
                sagittis tellus ut urna tincidunt, eget condimentum augue
                semper. Nam aliquam neque in ex rhoncus, sit amet iaculis lorem
                luctus. In pharetra, magna sit amet blandit rhoncus, leo arcu
                ornare est, vitae dignissim est diam non leo. Pellentesque non
                augue vel mi faucibus maximus. Phasellus lobortis neque id purus
                varius placerat et id est. Aliquam accumsan mollis velit in
                fringilla. Morbi at urna laoreet, sagittis tortor sit amet,
                blandit ante. Pellentesque blandit metus sed felis commodo
                commodo. In interdum tincidunt neque imperdiet ornare. Aenean id
                diam pretium, aliquam quam eget, sodales nulla. Aenean eu
                facilisis mauris. Integer consequat ornare massa, a ultricies
                ipsum rhoncus vel.
              </Typography>
            )}
          </Box>
        </Container>
      </Container>
    </React.Fragment>
  );
}
