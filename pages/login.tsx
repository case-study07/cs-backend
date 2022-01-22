import axios from "axios";
import { Layout } from "components/ui";
import { useEffect, useState } from "react";
import s from "../styles/login.module.css";
import { useCookies } from "react-cookie";
import { useRouter } from 'next/router'



export default function LoginUpPerson() {
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [login, setLogin] = useState(false);
  const [cookies, setCookie] = useCookies();
  const router = useRouter();

  

  const fetchAPI = async (userEmail:string,userPassword:string) => {
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

      console.log(data.member);

      setCookie("token", data);
      return setLogin(true);

    } catch (error: any) {
      console.log(error.message);
    }
  };

  const handleSubmit = (e: any) => {
    fetchAPI(userEmail, userPassword);
    console.log("aaaa");
    if (login) {
      router.push('/');
    }
    setErrorMsg(
      "ユーザーが存在しません メールアドレス もしくはパスワードがまちがっています"
    );
  };

  return (
    <>
      <article className={s.login}>
        <h2>ログイン</h2>
        <p>{errorMsg}</p>
        <div className={s.forms}>
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
        </div>
      </article>
    </>
  );
}

LoginUpPerson.Layout = Layout;
