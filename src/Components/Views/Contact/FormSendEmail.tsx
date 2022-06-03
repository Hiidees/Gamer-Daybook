import * as React from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { validationSchemaEmail } from "../../Utils/YupForm/ValidationSchemaEmail";
import FormHelperText from "@mui/material/FormHelperText";
import Alert, { AlertColor } from "@mui/material/Alert";
import FormControl from "@mui/material/FormControl";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { ButtonMenuStyle } from "../../Portables/Styles/ButtonStyle";
import CircularProgress from "@mui/material/CircularProgress";
import { IEmailAlert, IEmailForm } from "./Contact";
import {
  FormTextHelperStyle,
  FormAlertStyle,
  FormTextfield,
  FormControlStyle,
} from "../../Portables/Styles/FormTextfieldStyle";
import useAppTranslation from "../../../Hooks/useAppTranslation";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Box from "@mui/material/Box";
import PageRating from "./PageRating";

export interface IFormSendEmailProps {
  setState: (arg: any, changeState: (arg: any) => void) => void;
  sendEmail: (
    data: IEmailForm,
    value: number | null,
    setResponseEmail: (emailData: IEmailAlert | undefined) => void,
    setIsSendingEmail: (bool: boolean) => void,
    setExpand: (bool: boolean) => void,
    setCounterEmail: (counter: number) => void,
    counterEmail: number
  ) => void;
}

export function FormSendEmail(props: IFormSendEmailProps) {
  const { sendEmail, setState } = props;
  const translationState = useAppTranslation();
  const [counterEmail, setCounterEmail] = React.useState(0);
  const [expand, setExpand] = React.useState(false);
  const [value, setValue] = React.useState<number | null>(0);
  const [responseEmail, setResponseEmail] = React.useState<
    IEmailAlert | undefined
  >(undefined);
  const [isSendingEmail, setIsSendingEmail] = React.useState(false);
  const {
    register,
    handleSubmit,
    resetField,
    formState: { errors },
  } = useForm<IEmailForm>({ resolver: yupResolver(validationSchemaEmail) });

  return (
    <FormControl fullWidth sx={FormControlStyle}>
      <FormHelperText sx={FormTextHelperStyle}>
        {translationState.translation["Do you want write me a message?"]}
      </FormHelperText>
      {responseEmail && (
        <Alert
          severity={responseEmail.severity as AlertColor | undefined}
          variant="filled"
          sx={FormAlertStyle}
        >
          {responseEmail.message}
        </Alert>
      )}
      <Accordion
        sx={{
          background: "transparent",
          boxShadow: "none",
          "&::before": {
            backgroundColor: "transparent",
          },
        }}
        expanded={expand}
      >
        <AccordionSummary aria-controls="panel1a-content" id="panel1a-header">
          <Button
            sx={ButtonMenuStyle}
            disableRipple
            color="inherit"
            fullWidth
            type="submit"
            onClick={() => setState(!expand, setExpand)}
          >
            {expand
              ? translationState.translation["Close"]
              : translationState.translation["Click here!"]}
          </Button>
        </AccordionSummary>
        <AccordionDetails>
          <Box>
            <TextField
              label="Email"
              id="email"
              fullWidth
              sx={FormTextfield}
              {...register("email")}
              error={!!errors.email}
              helperText={errors.email && errors.email?.message}
              disabled={isSendingEmail}
            />

            <TextField
              label={translationState.translation["message"]}
              id="message"
              fullWidth
              multiline
              rows={2}
              sx={FormTextfield}
              {...register("message")}
              error={!!errors.message}
              helperText={errors.message && errors.message?.message}
              disabled={isSendingEmail}
            />
            <PageRating value={value} setValue={setValue} />
            <Button
              sx={ButtonMenuStyle}
              disableRipple
              color="inherit"
              fullWidth
              type="submit"
              onClick={handleSubmit((data) => {
                sendEmail(
                  data,
                  value,
                  setResponseEmail,
                  setIsSendingEmail,
                  setExpand,
                  setCounterEmail,
                  counterEmail
                );
                resetField("message");
                resetField("email");
                setValue(null);
              })}
              disabled={isSendingEmail}
            >
              {isSendingEmail ? (
                <CircularProgress color="inherit" />
              ) : (
                translationState.translation["send email"]
              )}
            </Button>
          </Box>
        </AccordionDetails>
      </Accordion>
    </FormControl>
  );
}
