import s from '../../styles/Header.module.css'
import { useCookies } from "react-cookie";
import { useEffect, useState } from 'react';
import { useRouter } from "next/router";
import Link from 'next/link';
import axios from 'axios';
import useSWR from 'swr';
const Header = () => {

  const [cookies, setCookie] = useCookies();
  const [name, setName] = useState("");
  const router = useRouter();
  const [login, setLogin] = useState(false);
    const { data } = useSWR(
      "http://localhost:9000/member",
      (url: string) => axios(url).then((res) => res.data),
      { refreshInterval: 1000 }
    );
  


  const cookiesFlg = cookies.token ? true : false;



    const loginData = () => {
      let url;
      if (cookiesFlg) {
      url = '/profile';
    } else {
      url = "/signUpCompany";
    }
      return url;
  }

    const url  = loginData();




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
                  {
                    <button onClick={() => router.push(url)}>
                    プロフィールへ
                    </button>
                  } 
                </li>
              </ul>
            </nav>
          </header>
        </div>
      </>
    );
}

export default Header
