import React from "react";
import ReactDOM from "react-dom";
import Main from "@/pages/Main";
import { Header } from "./components/Header";
import "@/layout/Global.module.scss";

ReactDOM.render(
  <>
    <Header />
    <Main />
  </>,
  document.getElementById("root")
);
