import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Router from "./Router";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

const App = () => {
  const queryClient = new QueryClient();
  
  return (
    <div className="app-main">
      <QueryClientProvider client={queryClient}>
      <Router />
    </QueryClientProvider>
    </div>
  );
};

export default App;
