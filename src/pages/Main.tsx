import useOnScreen from "@/hooks/useOnScreen";
import { useRef } from "react";
import styles from "../layout/pages/App.module.scss";

export default function Main() {
  const ref = useRef(null);
  const isVisible = useOnScreen(ref);
  return (
    <main>
      <section id="app" className={styles.app}>
        <h1>Hello World!</h1>
      </section>
      <section ref={ref} id="content" className={styles.content}>
        {isVisible ? <h1>Eu estou visível</h1> : <h1>Não estou visível</h1>}
      </section>
      <section id="test" className={styles.test}>
        <h2>Test</h2>
      </section>
    </main>
  );
}
