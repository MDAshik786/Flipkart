
import { observer } from "mobx-react-lite";
import "./App.scss";
import Router from "./Router";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient();
const App = () => {


  return (
    <div className="app-main">
      <QueryClientProvider client={queryClient}>
        <Router />
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
      {/* Hii */}
    </div>
  );
};

export default observer(App);
