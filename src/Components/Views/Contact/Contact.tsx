import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import CardMedia from "@mui/material/CardMedia";
import Container from "@mui/material/Container";
import FormControl from "@mui/material/FormControl";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import * as React from "react";
import { AppbarGoBack } from "../../Utils/Appbar/AppbarGoBack";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { validationSchemaEmail } from "../../Utils/YupForm/ValidationSchemaEmail";

export interface IContactProps {
  resizeListener: (height: number, setHeight: (height: number) => void) => void;
  sendEmail: (data: IEmailForm) => void;
}

interface IEmailForm {
  email: string;
  message: string;
}

export function Contact(props: IContactProps) {
  const { resizeListener, sendEmail } = props;

  const [height, setHeight] = React.useState(window.innerHeight);
  window.addEventListener("resize", () =>
    resizeListener(window.innerHeight, setHeight)
  );

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IEmailForm>({ resolver: yupResolver(validationSchemaEmail) });

  return (
    <React.Fragment>
      <AppbarGoBack />
      <Container maxWidth="md">
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          sx={{ height: height - 100 }}
        >
          <Grid container spacing={2} alignItems="center">
            <Grid
              item
              display={{ xs: "block", sm: "block", md: "block" }}
              xs={12}
              sm={5}
              md={6}
            >
              <CardMedia component="img" image="/cheese.svg" />
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
              {/* {errorMessages !== "" && (
            <Alert
              severity="error"
              variant="filled"
              onClose={() => {
                onClickCloseAlert();
              }}
            >
              {errorMessages}
            </Alert>
          )} */}
              <FormControl fullWidth>
                <TextField
                  label="Email"
                  id="email"
                  size="medium"
                  sx={{ marginBottom: 2 }}
                  {...register("email")}
                  error={!!errors.email}
                  helperText={errors.email && errors.email?.message}
                  /*  disabled={isLoggingIn}
                   */
                />

                <TextField
                  label="message"
                  id="message"
                  size="medium"
                  multiline
                  rows={2}
                  sx={{ marginBottom: 2 }}
                  {...register("message")}
                  error={!!errors.message}
                  helperText={errors.message && errors.message?.message}
                  /*  disabled={isLoggingIn}
                   */
                />

                <Button
                  type="submit"
                  onClick={handleSubmit((data) => sendEmail(data))}
                  variant="contained"
                  /*   disabled={isLoggingIn}
                   */
                >
                  Send mail
                </Button>
              </FormControl>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </React.Fragment>
  );
}
