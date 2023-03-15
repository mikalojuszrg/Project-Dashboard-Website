import DashboardGraphs from "./DashboardGraphs";
import DashobardInputs from "./DashboardInputs";
import { Grid } from "@mui/material";

const Dashboard = () => {
  return (
    <Grid container>
      <Grid item xs={12} md={4}>
        <DashobardInputs />
      </Grid>
      <Grid item xs={12} md={8}>
        <DashboardGraphs />
      </Grid>
    </Grid>
  );
};

export default Dashboard;
