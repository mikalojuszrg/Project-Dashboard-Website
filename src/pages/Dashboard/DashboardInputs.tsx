import { Avatar, Box, Button, InputAdornment, Paper } from "@mui/material";
import { Field, Form, Formik } from "formik";

import { Days } from "../../types/days";
import EuroIcon from "@mui/icons-material/Euro";
import { TextField } from "formik-mui";
import Typography from "@mui/material/Typography";
import { inputValues } from "./const";

const DashobardInputs = () => {
  const onSubmit = (values: Days) => {
    console.log(values);
  };
  return (
    <Paper elevation={24}>
      <Box p={1.5}>
        <Typography variant="h6" textAlign="center" mb={1}>
          Insert expenses by day
        </Typography>
        <Formik initialValues={inputValues} onSubmit={onSubmit}>
          {({ isSubmitting }) => (
            <Form>
              <Field
                component={TextField}
                type="number"
                name="monday"
                label="Monday"
                sx={{ mb: 1 }}
                fullWidth
                required
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <EuroIcon />
                    </InputAdornment>
                  ),
                }}
              />

              <Field
                component={TextField}
                type="number"
                name="tuesday"
                label="Tuesday"
                sx={{ mb: 1 }}
                fullWidth
                required
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <EuroIcon />
                    </InputAdornment>
                  ),
                }}
              />

              <Field
                component={TextField}
                type="number"
                name="wednesday"
                label="Wednesday"
                sx={{ mb: 1 }}
                fullWidth
                required
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <EuroIcon />
                    </InputAdornment>
                  ),
                }}
              />
              <Field
                component={TextField}
                type="number"
                name="thursday"
                label="Thursday"
                sx={{ mb: 1 }}
                fullWidth
                required
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <EuroIcon />
                    </InputAdornment>
                  ),
                }}
              />
              <Field
                component={TextField}
                type="number"
                name="friday"
                label="Friday"
                sx={{ mb: 1 }}
                fullWidth
                required
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <EuroIcon />
                    </InputAdornment>
                  ),
                }}
              />
              <Field
                component={TextField}
                type="number"
                name="saturday"
                label="Saturday"
                sx={{ mb: 1 }}
                fullWidth
                required
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <EuroIcon />
                    </InputAdornment>
                  ),
                }}
              />
              <Field
                component={TextField}
                type="number"
                name="sunday"
                label="Sunday"
                sx={{ mb: 1 }}
                fullWidth
                required
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <EuroIcon />
                    </InputAdornment>
                  ),
                }}
              />
              <Button
                type="submit"
                variant="contained"
                disabled={isSubmitting}
                fullWidth
                sx={{ mb: 1 }}
              >
                Visualize
              </Button>
            </Form>
          )}
        </Formik>
      </Box>
    </Paper>
  );
};

export default DashobardInputs;
