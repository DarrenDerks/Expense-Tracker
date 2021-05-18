import React from "react";
import ReactDOM from "react-dom";
import { SpeechProvider } from '@speechly/react-client'

import { Provider } from "./context/context";
import App from "./App";
import "./index.css";

ReactDOM.render(
  <SpeechProvider appId="270c2453-06f5-494c-bad0-12527e2758fb" language="en-US">
  <Provider>
    <App />
  </Provider>
  </SpeechProvider>,
  document.getElementById("root")
);
