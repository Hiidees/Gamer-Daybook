import Grow from "@mui/material/Grow";
import * as React from "react";
import Stack from "@mui/material/Stack";
import Icon from "@mui/material/Icon";
import Typography from "@mui/material/Typography";
import { TypographyAboutMe } from "../../Portables/Styles/TypographyStyle";

export interface ILearningSkillsProps {}

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

export function LearningSkills(props: ILearningSkillsProps) {
  return (
    <>
      <Stack spacing={3}>
        <Typography variant={"body2"} sx={TypographyAboutMe}>
          My Learning Skills:
        </Typography>
        <Stack direction={"row"} spacing={7} justifyContent={"center"}>
          <GrowFunction
            children={
              <Icon sx={{ fontSize: { md: "60px", xs: "40px" } }}>
                <img alt="skills" src="/Icons/cplusplus.svg" />
              </Icon>
            }
            timeoutMultiplier={1}
          />
          <GrowFunction
            children={
              <Icon sx={{ fontSize: { md: "60px", xs: "40px" } }}>
                <img alt="skills" src="/Icons/csharp.svg" />
              </Icon>
            }
            timeoutMultiplier={2}
          />
          <GrowFunction
            children={
              <Icon sx={{ fontSize: { md: "60px", xs: "40px" } }}>
                <img alt="skills" src="/Icons/java.svg" />
              </Icon>
            }
            timeoutMultiplier={3}
          />
        </Stack>
      </Stack>
    </>
  );
}
