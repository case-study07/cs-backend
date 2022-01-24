import axios from "axios";
import { Layout } from "components/ui";
import { useEffect, useState } from "react";
import s from "../styles/login.module.css";
import { Cookies, useCookies } from "react-cookie";
import { useRouter } from "next/router";

export default function LoginUpPerson(props) {
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [login, setLogin] = useState(false);
  const [cookies, setCookie] = useCookies();
  const router = useRouter();

  const fetchAPI = async (userEmail: string, userPassword: string) => {
    const loginData = {
      email: userEmail,
      password: userPassword,
    };
    try {
      const res = await axios.post(
        "http://localhost:9000/auth/login",
        loginData
      );
      const data = await res.data;

      if (!data) {
        throw new Error("ログインデータの取得に失敗しました");
      }

      setCookie(`token`, data);
      setLogin(true);

      return true;
    } catch (error: any) {
      console.log(error.message);
    }
  };

  const handleSubmit = async (e: any) => {
    const res = await fetchAPI(userEmail, userPassword);
    if (res) {
      return router.push("/");
    } else {
      console.error("予期せぬエラー");
    }
  };

  return (
    <>
      <article className={s.login}>
        <h2>ログイン</h2>
        <p>{errorMsg}</p>
        <form onClick={(e) => e.preventDefault()} className={s.forms}>
          <div>
            <label htmlFor="">メールアドレス</label>
            <input
              type="email"
              name=""
              value={userEmail}
              onChange={(e) => setUserEmail(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="">パスワード</label>
            <input
              type="password"
              name=""
              value={userPassword}
              onChange={(e) => setUserPassword(e.target.value)}
            />
          </div>

          <input type="submit" value="ログイン" onClick={handleSubmit} />
        </form>
      </article>
    </>
  );
}

LoginUpPerson.Layout = Layout;
