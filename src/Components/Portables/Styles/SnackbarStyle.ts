import { keyframes } from "@mui/system";

const blink = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

export const SnackbarInfoStyle = {
  "&:hover": {
    background: "none",
    color: "#ec0216",
  },
  animation: `${blink} 1.5s linear`,
} as const;
