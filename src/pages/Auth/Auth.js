import React from "react";
import { useAuth } from "../../context/AuthContext";
import { AuthForm } from "../../components/AuthForm";

function Auth({ isLogin }) {
  const { handleLogin, handleSignup } = useAuth();
  const onSubmit = isLogin ? handleLogin : handleSignup;
  const submitMessage = isLogin ? "Login" : "Signup";

  return (
    <div className="authPage">
    <h1>Access the Library :</h1>
      <AuthForm submitMessage={submitMessage} onSubmit={onSubmit} />
    </div>
  );
}

export default Auth;
