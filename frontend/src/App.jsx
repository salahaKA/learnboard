import { ConfigProvider, App as AntApp } from "antd";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes";

const App = () => {
  return (
    <ConfigProvider>
      <AntApp>
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </AntApp>
    </ConfigProvider>
  );
};

export default App;
