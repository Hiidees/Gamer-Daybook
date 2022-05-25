import { keyframes } from "@mui/system";

const blink = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

export const FormControlStyle = {
 animation: `${blink} 2s linear alternate`,
} as const;

export const FormTextHelperStyle = {
 textAlign: "center",
 marginBottom: 1,
 fontSize: "22px"
} as const;

export const FormAlertStyle = {
 fontSize: "15px",
 marginBottom: 2 
} as const;


export const FormTextfield = {
 marginBottom: 2
} as const;

