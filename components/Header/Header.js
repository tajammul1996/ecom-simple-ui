"use client";
import React from "react";
import Link from "next/link";
import useAuth from "@/hooks/useAuth";

const Header = () => {
  const { isAuthenticated, setToken } = useAuth();

  const logout = () => {
    localStorage.removeItem("token");
    setToken(null);
  };

  const renderNavigationLinks = () => {
    if (isAuthenticated) {
      return (
        <nav>
          <Link href="/">Home</Link>
          <Link href="/orders">Orders</Link>
          <Link href="/cart">Cart</Link>
          <Link href="/auth" onClick={logout}>
            Logout
          </Link>
        </nav>
      );
    }

    return (
      <nav>
        <Link href="/">Home</Link>
        <Link href="/auth">Login / Signup</Link>
      </nav>
    );
  };

  return <header>{renderNavigationLinks()}</header>;
};

export default Header;
