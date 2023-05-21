"use client"
import { useState } from "react";
import {useRouter} from "next/navigation"

import styles from "./page.module.css";



const BASE_URL = "https://access-ecom-apis.onrender.com";

export default function Auth() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSignup, setIsSignup] = useState(true);
  const router = useRouter()


  async function signup() {
    try {
      const response = await fetch(`${BASE_URL}/api/auth/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          email: email,
          password: password,
          name: name,
        }),
      });
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        router.push("/products")
      }
    } catch (e) {
      console.log(e);
    }
  }

  async function login() {
    try {
      const response = await fetch(`${BASE_URL}/api/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        router.push("/products")

      }
    } catch (e) {
      console.log(e);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (isSignup) {
      signup();
    } else {
      login();
    }
  }

  function toggleForm() {
    setIsSignup(!isSignup);
    setEmail("");
    setPassword("");
    setName("");
  }

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <h2 className={styles.welcomeMessage}>Welcome to access commerce!</h2>
        <h3 className={styles.formTitle}>Please register below</h3>
        {isSignup && (
          <input
            className={styles.formInput}
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        )}
        <input
          className={styles.formInput}
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          className={styles.formInput}
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit" className={styles.formButton}>
          {isSignup ? "Sign me up!" : "Log in"}
        </button>
        <p className={styles.toggleForm} onClick={toggleForm}>
          {isSignup
            ? "Already have an account? Log in"
            : "Don't have an account? Register"}
        </p>
      </form>
      <div className={styles.image}></div>
    </div>
  );
}

// 2 parts ui - 1st part is UI. 2nd part is making it functional
