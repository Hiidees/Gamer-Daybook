import * as React from "react";
import Rating from "@mui/material/Rating";
import Box from "@mui/material/Box";
import StarIcon from "@mui/icons-material/Star";
import useAppTranslation from "../../../Hooks/useAppTranslation";
import FormHelperText from "@mui/material/FormHelperText";
import { FormTextHelperStyle } from "../../Portables/Styles/FormTextfieldStyle";
import Stack from "@mui/material/Stack";

interface IPageRating {
  setValue: (value: number | null) => void;
  value: number | null;
}
export default function PageRating(props: IPageRating) {
  const { setValue, value } = props;
  //const [value, setValue] = React.useState<number | null>(0);
  const translationState = useAppTranslation();

  return (
    <Box>
      <Stack direction={"column"}>
        <FormHelperText sx={{ fontSize: "15px" }}>
          {translationState.translation["Do you want rating my site?"]}
        </FormHelperText>
        <Rating
          sx={{ ml: 2 }}
          name="hover-feedback"
          value={value}
          precision={1}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
          emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
        />
      </Stack>
    </Box>
  );
}
