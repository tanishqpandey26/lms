import { useEffect, useState, useCallback } from "react";
import { NavLink } from "react-router-dom";
import styles from "../styles/Sidebar.module.css";
import { IoSpeedometer, IoClose } from "react-icons/io5";
import { FaBook } from "react-icons/fa6";
import { FaCalendarAlt } from "react-icons/fa";
import { MdOutlineForwardToInbox, MdHelp } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";

const NAV_ITEMS = [
  { key: "dashboard", label: "Dashboard", to: "/", Icon: IoSpeedometer },
  { key: "courses", label: "Courses", to: "/courses", Icon: FaBook },
  { key: "calendar", label: "Calendar", to: "/calendar", Icon: FaCalendarAlt },
  { key: "inbox", label: "Inbox", to: "/inbox", Icon: MdOutlineForwardToInbox },
  { key: "help", label: "Help", to: "/help", Icon: MdHelp },
];

function SidebarNav({ showLabels, onItemClick }) {
  return (
    <nav className={styles.nav} aria-label="Primary">
      <ul className={styles.list}>
        {NAV_ITEMS.map(({ key, label, to, Icon }) => (
          <li key={key} className={styles.listItem}>
            <NavLink
              to={to}
              className={({ isActive }) =>
                [styles.navItem, isActive ? styles.active : ""].join(" ")
              }
              title={!showLabels ? label : undefined}
              onClick={onItemClick}
            >
              <Icon className={styles.icon} aria-hidden="true" />
              {showLabels && <span className={styles.label}>{label}</span>}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default function Sidebar() {
  const [isMobileOpen, setMobileOpen] = useState(false);

  const closeMobile = useCallback(() => setMobileOpen(false), []);
  const openMobile = useCallback(() => setMobileOpen(true), []);


  useEffect(() => {
    function onKeyDown(e) {
      if (e.key === "Escape") closeMobile();
    }
    if (isMobileOpen) window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isMobileOpen, closeMobile]);

  return (
    <div className={styles.wrapper}>

      {/* mobile hamburger */}
      <div className={styles.mobileTopBar}>
        <button
          className={styles.iconButton}
          aria-label="Open sidebar"
          onClick={openMobile}
        >
          <GiHamburgerMenu />
        </button>
        <span className={styles.brand}>Dashboard</span>
      </div>

      {/* desktop */}
      <aside className={[styles.sidebar, styles.desktop].join(" ")}>
        <div className={styles.brandDesktop}>Canvas LMS</div>
        <SidebarNav showLabels onItemClick={undefined} />
      </aside>

      {/* tablet*/}
      <aside className={[styles.sidebar, styles.tablet].join(" ")}>
        <SidebarNav showLabels={false} onItemClick={undefined} />
      </aside>

      {/* mobile*/}
      <div
        className={[
          styles.backdrop,
          isMobileOpen ? styles.showBackdrop : "",
        ].join(" ")}
        onClick={closeMobile}
        aria-hidden={!isMobileOpen}
      />
      <aside
        className={[
          styles.mobileDrawer,
          isMobileOpen ? styles.open : "",
        ].join(" ")}
        role="dialog"
        aria-label="Sidebar"
      >
        <div className={styles.mobileDrawerHeader}>
          <span className={styles.brand}>Canvas LMS</span>
          <button
            className={styles.iconButton}
            aria-label="Close sidebar"
            onClick={closeMobile}
          >
            <IoClose />
          </button>
        </div>
        <SidebarNav showLabels onItemClick={closeMobile} />
      </aside>
    </div>
  );
}
