import { keyframes } from "@mui/system";

const blink = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const blink2 = keyframes`
  from { opacity: 1; }
  to { opacity: 0; }
`;
const color = keyframes`
  from {background: transparent; }
  to {background: white; color: black; opacity:0.5 }
`;

const colorChange = keyframes` 
    from  {  background-image: linear-gradient(45deg, red, blue) },
   
    to { background-image: linear-gradient(45deg, violet, white) }`;

/* const shake = keyframes`
      0%  { transform: translate(1px, 1px)   rotate(0deg); background: transparent;},
    10%  { transform: translate(-1px, -2px) rotate(-1deg);  },
    20%  { transform: translate(-3px, 0px)  rotate(1deg);   },
    30%  { transform: translate(3px, 2px)   rotate(0deg);   },
    40%  { transform: translate(1px, -1px)  rotate(1deg);   },
    50%  { transform: translate(-1px, 2px)  rotate(-1deg);  },
    60%  { transform: translate(-3px, 1px)  rotate(0deg);   },
    70%  { transform: translate(3px, 1px)   rotate(-1deg);  },
    80%  { transform: translate(-1px, -1px) rotate(1deg);   },
    90%  { transform: translate(1px, 2px)   rotate(0deg);   },
    100% { transform: translate(1px, -2px)  rotate(-1deg); background: purple; color: black; opacity:0.8 }
`; */

export const ButtonStartStyle = {
  "&:hover": {
    background: "none",
    //color: "#969696",
  },
  animation: `${blink2} 1s linear infinite alternate`,
} as const;

export const ButtonMenuStyle = {
  "&:hover": {
    background: "none",
    //color: "#969696",
    animation: `${blink} 2s linear infinite alternate`,
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

export const ButtonDrawerStyle = {
  "&:hover": {
    background: "none",
    color: "#969696",
    // animation: `${shake} 0.8s linear forwards `,
  },
  "&:disabled": {
    animation: `${color} 0.8s linear forwards `,
  },
} as const;

export const Button404Style = {
  "&:hover": {
    background: "none",
    backgroundImage: "linear-gradient(45deg, red, blue)",
    WebkitBackgroundClip: "text !important",
    WebkitTextFillColor: "transparent",
  },
  //animation: `${colorChange} 2s linear infinite`,
  //backgroundImage:"linear-gradient(to left, violet, indigo, blue, green, yellow, orange, red)",
} as const;

export const ButtonNewGameCreationStyle = {
  "&:hover": {
    background: "none",
    color: "#662d91",
  },

  color: "inherit",
} as const;
