"use client";
import { AuthContext } from "../../contexts/AuthContext";
import Link from "next/link";
import React, { useContext } from "react";
import styles from "./headerstyles.module.css";

const Header = () => {
  const { setToken, token } = useContext(AuthContext);

  const logout = () => {
    localStorage.removeItem("token");
    setToken(null);
  };
  return (
    <header className={styles.header}>
      <nav>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>

          {token && (
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
              {token ? "Logout" : "Login"}
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
