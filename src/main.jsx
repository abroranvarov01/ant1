import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { ConfigProvider } from "antd";
import { QueryClientProvider } from "@tanstack/react-query";
import { client } from "./config/query-client.js";
const theme = {
  token: {
    colorPrimary: "#1DA57A",
    borderRadiusBase: "2px",
  },
};

createRoot(document.getElementById("root")).render(
  <QueryClientProvider client={client}>
    <ConfigProvider theme={theme}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ConfigProvider>
  </QueryClientProvider>
);
