import { keyframes } from "@mui/system";

const blink = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

export const TypographyMenu = {
  "@media (min-width:600px)": {
    fontSize: "70px",
  },
  fontFamily: "Caveat",
  fontSize: "55px",
  marginBottom: 2,
} as const;

export const TypographyTypeWriter = {
  textAlign: "center",
   fontSize: "19px",
} as const;

export const TypographyAboutMe = {
  textAlign: "center",
  fontSize: 16,
  marginLeft: 2, 
  marginBottom: 3,
  marginTop: 3,
  animation: `${blink} 2s linear`,
} as const;

export const DialogTitleNewGame = {
  textAlign: "center",
} as const;

export const TypographyChooseLanguage = {
  fontSize: "35px"
} as const;
