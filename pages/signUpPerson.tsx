import axios from "axios";
import { Layout } from "components/ui";
import { useState } from "react";
import s from "../styles/signUpPerson.module.css";
import { useRouter } from 'next/router'
import { useCookies } from "react-cookie";
import Link from "next/link";

  interface SignUpPersonData {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
    phoneNumber: string;
    address: string;
  }


export default function SignUpPerson() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [iconImage, setIconImage] = useState("");
  const [address, setAddress] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [login, setLogin] = useState(false);
  const [cookies, setCookie] = useCookies();
  const router = useRouter();




  
    return (
      <>
        <article className={s.signUpPerson}>
          <h2>サインアップ（個人）</h2>
          <div className={s.form}>
            <div>
              <label htmlFor="">名前</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="">メールアドレス</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="">パスワード</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="">確認用パスワード</label>
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="">電話番号</label>
              <input
                type="tel"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
            </div>

            <input type="submit" value="新規作成" />
          </div>

          <div className={s.link}>
            <Link href="/signUpCompany">
              <a>企業登録へ</a>
            </Link>
          </div>
          <div className={s.link}>
            <Link href="/login">
              <a>ログインへ</a>
            </Link>
          </div>
        </article>
      </>
    );
}
SignUpPerson.Layout = Layout;
