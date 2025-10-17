import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./routes";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
      <ReactQueryDevtools initialIsOpen={false} />
    </BrowserRouter>
  );
}

export default App;
