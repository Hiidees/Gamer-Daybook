import { keyframes } from "@mui/system";

const blink = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

export const ButtonStartStyle = {
  "&:hover": {
    background: "none",
    color: "#969696",
  },
  animation: `${blink} 2s linear infinite alternate`,
} as const;

export const ButtonMenuStyle = {
  "&:hover": {
    background: "none",
    color: "#969696",
  },
  animation: `${blink} 2s linear `,
} as const;

export const ButtonContinueStyle = {
  "&:hover": {
    background: "none",
    color: "#50b500",
  },
  animation: `${blink} 2s linear infinite alternate`,
} as const;

export const ButtonSkipStyle = {
  "&:hover": {
    background: "none",
    color: "#ec0216",
  },
  animation: `${blink} 2s linear infinite alternate`,
} as const;

export const ButtonLoginStyle = {
  "&:hover": {
    background: "none",
  },
  float: "right",
  bottom: 0,
  right: "0%",
  position: "absolute",
  marginBottom: 1,
} as const;
