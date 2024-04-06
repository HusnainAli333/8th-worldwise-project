import { useState } from "react";
import style from "../css/Pages/Login.module.css";
import PageNav from "../components/PageNav";

export default function Login() {
  const [email, setEmail] = useState("jack@example.com");
  const [password, setPassword] = useState("qwerty");

  return (
    <main className={style.login}>
      <PageNav />
      <form className={style.form}>
        <div className={style.row}>
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>
        <div className={style.row}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
          <div>
            <button>Login</button>
          </div>
        </div>
      </form>
    </main>
  );
}
