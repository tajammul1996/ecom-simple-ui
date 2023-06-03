import { useEffect, useState } from "react";

function useAuth() {
  const [token, setToken]= useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token")
    setToken(token)
  }, [])

  return {
    isAuthenticated: Boolean(token),
    setToken
  }
}

export default useAuth;