import ReactDOM from "react-dom/client";
import App from "./App";
import { RecoilRoot } from "recoil";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <RecoilRoot>
    <ThemeProvider theme={theme}>
      <Router basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route path="/">
            <App />
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  </RecoilRoot>
);
