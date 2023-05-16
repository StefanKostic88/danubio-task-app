import useAppGlobal from "./hooks/use-app-global";

import { AppRoutes } from "./components";

const App = () => {
  const contextObject = useAppGlobal();

  return <AppRoutes value={contextObject} />;
};

export default App;
