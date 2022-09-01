import React from "react";
import { useFormContext, Controller } from "react-hook-form";
import { Grid, TextField } from "@material-ui/core";

function FormInput({ name, label, required }) {
  const { control } = useFormContext();
  const isError = false;

  return (
    <Grid item xs={12} sm={6}>
      <Controller
        name={name}
        control={control}
        error={isError}
        render={({ field }) => (
          <TextField {...field} label={label} fullWidth required={true} />
        )}
      />
    </Grid>
  );
}

export default FormInput;
