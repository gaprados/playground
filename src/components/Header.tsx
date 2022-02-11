import { useEffect, useState } from "react";

import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

import classes from "@/layout/components/Header.module.scss";

type SizeStateProps = {
  width?: number;
  height?: number;
};

export function Header() {
  const [currentView, setCurrentView] = useState<string>("app");

  const handleCurrentView = () => {
    const sections = document.querySelectorAll("section");
    const checkpoint = window.pageYOffset + (window.innerHeight / 8) * 4;
    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const checkpointStart = checkpoint >= sectionTop;
      const checkpointEnd = checkpoint <= sectionTop + sectionHeight;

      if (checkpointStart && checkpointEnd) {
        setCurrentView(section.id);
      }
    });
  };

  const [menuOpen, setMenuOpen] = useState(false);
  const [size, setSize] = useState<SizeStateProps>({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    const handleResize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    document.addEventListener("scroll", () => {
      handleCurrentView();
    });
  }, []);

  useEffect(() => {
    if ((size?.width as number) > 768 && menuOpen) {
      setMenuOpen(false);
    }
  }, [size.width, menuOpen]);

  function toggleMenu() {
    setMenuOpen((prevState) => !prevState);
  }

  const links = [
    { label: "Page 1", href: "app" },
    { label: "Page 2", href: "content" },
    { label: "Page 3", href: "test" },
  ];

  return (
    <header className={classes.header}>
      <div className={classes.header__content}>
        <h2 className={classes.header__content__logo}>navbar</h2>
        <nav
          className={`${classes.header__content__nav} ${
            menuOpen ? classes.isMenu : ""
          }`}
        >
          <ul>
            {links.map(({ label, href }) => (
              <li
                className={`${href === currentView ? classes.isActive : ""}`}
                onClick={toggleMenu}
              >
                <a href={`#${href}`}>{label}</a>
              </li>
            ))}
          </ul>
        </nav>
        <div className={classes.header__content__toggle} onClick={toggleMenu}>
          {!menuOpen ? (
            <AiOutlineMenu />
          ) : (
            <AiOutlineClose className={classes.closeBtn} />
          )}
        </div>
      </div>
    </header>
  );
}
