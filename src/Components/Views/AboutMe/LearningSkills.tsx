import Grow from "@mui/material/Grow";
import * as React from "react";
import Stack from "@mui/material/Stack";
import Icon from "@mui/material/Icon";
import Typography from "@mui/material/Typography";
import { TypographyAboutMe } from "../../Portables/Styles/TypographyStyle";
import Tooltip from "@mui/material/Tooltip";
import { IconLearningSkills } from "../../Portables/Styles/IconStyles";

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
              <Tooltip title="C++">
                <Icon sx={IconLearningSkills}>
                  <img alt="skills" src="/Icons/cplusplus.svg" />
                </Icon>
              </Tooltip>
            }
            timeoutMultiplier={1}
          />
          <GrowFunction
            children={
              <Tooltip title="C#">
                <Icon sx={IconLearningSkills}>
                  <img alt="skills" src="/Icons/csharp.svg" />
                </Icon>
              </Tooltip>
            }
            timeoutMultiplier={2}
          />
          <GrowFunction
            children={
              <Tooltip title="Java">
                <Icon sx={IconLearningSkills}>
                  <img alt="skills" src="/Icons/java.svg" />
                </Icon>
              </Tooltip>
            }
            timeoutMultiplier={3}
          />
        </Stack>
      </Stack>
    </>
  );
}
