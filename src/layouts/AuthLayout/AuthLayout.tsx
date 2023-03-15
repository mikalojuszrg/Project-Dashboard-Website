import { Box, Grid } from "@mui/material";

import { PropsWithChildren } from "react";
import homeImage from "../../assets/home_image.jpg";

const AuthLayout = ({ children }: PropsWithChildren) => {
  return (
    <Grid container justifyContent="center" alignItems="center" height="100vh">
      <Grid item xs={12} md={6}>
        <Box height="100vh">
          <img
            src={homeImage}
            alt="laptop with graphs"
            width={"100%"}
            height={"100%"}
          />
        </Box>
      </Grid>
      <Grid item xs={12} md={6} p={5}>
        {children}
      </Grid>
    </Grid>
  );
};

export default AuthLayout;
