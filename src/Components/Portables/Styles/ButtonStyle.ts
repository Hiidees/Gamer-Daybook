import { keyframes } from "@mui/system";
const blinkStart = keyframes`
  from { opacity: 1; }
  to { opacity: 0; }
`;

const blinkMenu = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

export const ButtonStartStyle = {
  "&:hover": {
    background: "none",
    color: "#969696",
  },
  animation: `${blinkStart} 2s linear infinite alternate`,
} as const;

export const ButtonMenuStyle = {
  "&:hover": {
    background: "none",
    color: "#969696",
  },
  animation: `${blinkMenu} 2s linear `,
} as const;
