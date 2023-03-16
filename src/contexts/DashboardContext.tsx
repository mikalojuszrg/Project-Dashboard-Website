import { PropsWithChildren, createContext, useState } from "react";

import { Days } from "../types/days";

const dashboardContext = createContext<{
  data: Days[];
}>({
  data: [],
});

const DashboardProvider = ({ children }: PropsWithChildren) => {
  const [data, setData] = useState<Days[]>([]);

  const addData = (newData: Days) => {
    setData([...data, newData]);
  };

  return (
    <dashboardContext.Provider value={{ data }}>
      {children}
    </dashboardContext.Provider>
  );
};

export { DashboardProvider };
