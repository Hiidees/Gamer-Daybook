import { keyframes } from "@mui/system";

const blink = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

export const ListButtonLanguage = {
    "&:hover": {
        background: "none",
        animation: `none`,
    },
    "&.Mui-disabled": {
        opacity: 1,
        animation: `none`,
      },
      opacity: 0.38,
      textAlign: "center",
      animation: `${blink} 1s linear infinite alternate`,
  } as const;