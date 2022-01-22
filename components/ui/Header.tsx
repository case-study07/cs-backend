import s from '../../styles/Header.module.css'
import { useCookies } from "react-cookie";
import { useState } from 'react';
import { useRouter } from "next/router";
import Link from 'next/link';
const Header = () => {

  const [cookies, setCookie] = useCookies();
  const [name, setName] = useState("");
  const router = useRouter();

  const cookiesFlg = cookies.token ? true : false;


    return (
      <>
        <div className={s.headerColor}>
          <header className={s.headerBar}>
            <Link href="/" passHref>
              <a>
              <h1>HALMOTOR</h1>
              </a>
            </Link>
            <nav className={s.headerNav}>
              <ul>
                <li>店舗一覧</li>
                <li>会社概要</li>
                <li>お問い合わせ</li>
                <li>
                  {cookiesFlg ? (
                    <button onClick={() => router.push("profile")}>
                      {cookies.token.member.name}
                      <br />
                      プロフィールへ
                    </button>
                  ) : (
                    <button onClick={() => router.push("/signUpCompany")}>
                      サインインへ
                    </button>
                  )}
                </li>
              </ul>
            </nav>
          </header>
        </div>
      </>
    );
}

export default Header
