import Grow from "@mui/material/Grow";
import * as React from "react";
import Stack from "@mui/material/Stack";
import Icon from "@mui/material/Icon";
import Typography from "@mui/material/Typography";
import { TypographyAboutMe } from "../../Portables/Styles/TypographyStyle";

export interface IDeveloperSkillsProps {}

interface GrowFunctionProps {
  children: React.ReactElement;
  timeoutMultiplier: number;
}

function GrowFunction(props: GrowFunctionProps) {
  const { children, timeoutMultiplier } = props;

  return (
    <React.Fragment>
      <Grow
        in
        timeout={{
          appear: 1000 * timeoutMultiplier,
          enter: 1000 * timeoutMultiplier,
          exit: 1000 * timeoutMultiplier,
        }}
      >
        {children}
      </Grow>
    </React.Fragment>
  );
}

export function DeveloperSkills(props: IDeveloperSkillsProps) {
  return (
    <>
      <Stack spacing={3}>
        <Typography variant={"body2"} sx={TypographyAboutMe}>
          My Development Skills:
        </Typography>
        <Stack direction={"row"} spacing={7} justifyContent={"center"}>
          <GrowFunction
            children={
              <Icon sx={{ fontSize: { md: "60px", xs: "25px" } }}>
                <img alt="skills" src="/Icons/html.svg" />
              </Icon>
            }
            timeoutMultiplier={1}
          />
          <GrowFunction
            children={
              <Icon sx={{ fontSize: { md: "60px", xs: "25px" } }}>
                <img alt="skills" src="/Icons/typescript.svg" />
              </Icon>
            }
            timeoutMultiplier={2}
          />
          <GrowFunction
            children={
              <Icon sx={{ fontSize: { md: "60px", xs: "25px" } }}>
                <img alt="skills" src="/Icons/javascript.svg" />
              </Icon>
            }
            timeoutMultiplier={3}
          />
          <GrowFunction
            children={
              <Icon sx={{ fontSize: { md: "60px", xs: "25px" } }}>
                <img alt="skills" src="/Icons/react.svg" />
              </Icon>
            }
            timeoutMultiplier={4}
          />
          <GrowFunction
            children={
              <Icon sx={{ fontSize: { md: "60px", xs: "25px" } }}>
                <img alt="skills" src="/Icons/css.svg" />
              </Icon>
            }
            timeoutMultiplier={5}
          />
        </Stack>
      </Stack>
    </>
  );
}
