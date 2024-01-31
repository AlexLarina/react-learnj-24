/* eslint-disable react/no-children-prop */
import ReactDOM from "react-dom/client";
import { App } from "./App";
import { restaurants } from './const/mocks';

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App restaurants={restaurants}/>);

