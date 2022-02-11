import { ReactNode } from "react";
import { Header } from "./Header";

import classes from "@/layout/components/Layout.module.scss";

interface ILayout {
  children: ReactNode;
}

export function Layout({ children }: ILayout) {
  return (
    <>
      <Header />
      <div className={classes.container}>{children}</div>
    </>
  );
}
