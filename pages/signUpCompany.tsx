import { Layout } from "components/ui";
import Link from "next/link";
import { ReactNode, useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useCookies } from "react-cookie";
import s from "../styles/signUpCompany.module.css";
import axios from "axios";

interface SignUpCompanyData {
  name: string;
  companyName: string;
  email: string;
  password: string;
  phoneNumber: string;
  iconImage: string;
  address: string;
}

export default function SignUpCompany(): ReactNode {

  const [name, setName] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [email, setEmail] = useState("adsf@asdf.com");
  const [password, setPassword] = useState("stringst");
  const [confirmPassword, setConfirmPassword] = useState("stringst");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [iconImage, setIconImage] = useState("string");
  const [address, setAddress] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [login, setLogin] = useState(false);
  const [cookies, setCookie] = useCookies();
  const router = useRouter();


  const postApi = async (data: SignUpCompanyData) => {
    const url = "http://localhost:9000/auth/signup";

    try {
      const res = await axios.post(url, data);
      const resData = await res.data;
      setCookie("token", resData);
      // console.log(resData);

      setLogin(true);
    } catch (error: any) {
      console.log(error.message);
      setErrorMsg("メールアドレスが既に登録されています");
    }
  };

  const handleSubmit = () => {
    const signUpData = {
      name,
      companyName,
      email,
      password,
      phoneNumber,
      iconImage,
      address,
    };

    postApi(signUpData);
  };


  useEffect(() => {
    if (password != confirmPassword) {
      return setErrorMsg("パスワードが一致しません");
    }
    if (login) {
       router.push("/", cookies.token);
    }
    handleSubmit();
  }, [login]);

  return (
    <>
      <article className={s.signUpCompany}>
        <h2>サインアップ（企業）</h2>
        {errorMsg}
        <div className={s.form}>
          <div>
            <label htmlFor="">名前</label>
            <br />
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="">企業名</label>
            <br />
            <input
              type="text"
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="">メールアドレス</label>
            <br />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="">パスワード</label>
            <br />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="">確認用パスワード</label>
            <br />
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="">電話番号</label>
            <br />
            <input
              type="tel"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="">住所</label>
            <br />
            <input
              type="tel"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>

          <input
            className={s.submit}
            type="submit"
            value="新規作成"
            onClick={handleSubmit}
          />
        </div>
        <div className={s.link}>
          <Link href="/signUpPerson">
            <a>個人登録へ</a>
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
SignUpCompany.Layout = Layout;
