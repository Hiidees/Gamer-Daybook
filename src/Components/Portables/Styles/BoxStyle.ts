import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";

type BoxHeightProps = {
  myheight: number | string;
}
export const BoxHeight = styled(Box)<BoxHeightProps>(({ myheight }) => ({
  height: myheight
}));

export const BoxHeightNewGame = styled(Box)<BoxHeightProps>(({ myheight }) => ({
  height: myheight,
   pb: 10,
}));