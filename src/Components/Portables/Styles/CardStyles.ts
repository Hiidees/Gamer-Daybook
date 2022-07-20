import { keyframes } from "@mui/system";

const blink = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

export const CardStyle = {
  background: "transparent",
  marginBottom: { xs: 0, sm: 8, md: 13 },
  animation: `${blink} 2s linear alternate`,
} as const;

export const CardMediaStyle = {
   width: "80%", 
   margin: "0px auto"
} as const;

export const CardActionStyle = {
  justifyContent: "center"
} as const;
