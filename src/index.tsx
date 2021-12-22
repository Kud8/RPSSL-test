import React from "react";
import ReactDOM from "react-dom";
import ReactNotification from "react-notifications-component";
import "react-notifications-component/dist/theme.css";

import "./index.scss";
import { App } from "./components/App/App";
import { ErrorBoundary } from "./components/ErrorBoundary/ErrorBoundary";

ReactDOM.render(
    <React.StrictMode>
        <ErrorBoundary>
            <ReactNotification />
            <App />
        </ErrorBoundary>
    </React.StrictMode>,
    document.getElementById("root")
);
