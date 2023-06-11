"use client";

import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import Link from "next/link";
import styles from "./headerstyles.module.css";

const Header = () => {
  const data = useContext(AuthContext);

  const logout = () => {
    localStorage.removeItem("token");
    data.setIsUserLoggedIn(false);
  };

  return (
    <header className={styles.header}>
      <nav>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>

          {data.isUserLoggedIn && (
            <>
              <li>
                <Link href="/cart">Cart</Link>
              </li>
              <li>
                <Link href="/orders">Orders</Link>
              </li>
            </>
          )}

          <li>
            <Link href="/auth" onClick={logout}>
              {data.isUserLoggedIn ? "Logout" : "Login"}
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
