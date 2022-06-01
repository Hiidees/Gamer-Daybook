import { keyframes } from "@mui/system";
const blink = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;
export const AccordionNewGame = {
    background: "transparent",
    boxShadow: "none",
    "&::before": {
        backgroundColor: "transparent",
    },
  animation: `${blink} 2s linear`,
} as const;

export const PaperNewGame = {
    position: "fixed", 
    bottom: 0, 
    left: 0,
    right: 0,
  animation: `${blink} 1s linear`,
} as const;