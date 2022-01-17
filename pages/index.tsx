import s from "../styles/main.module.css";
import { ReactNode } from "react";
import Link from "next/link";


import {Layout} from "../components/ui/"
import { CarLabelCard } from "components/Card";
import {Category} from "components/common/";

export default function Home(): ReactNode {
  return (
    <>


      <Category />



      <article className={s.auctionLabel}>
        <h2>オークションLINEUP</h2>
        <Link href="/" passHref>
          <a>オークション一覧へ{`>>`}</a>
        </Link>
        <div>
          <Link href="/" passHref>
            <a>
              <img src="../img/86label.png" alt="オークションアイコン" />
            </a>
          </Link>
          <Link href="/" passHref>
            <a>
              <img src="../img/lightcar.png" alt="オークションアイコン" />
            </a>
          </Link>
        </div>
      </article>
      {/* <!-- ここまで --> */}

      {/* <!-- carDetail --> */}
      <article className={s.carDetailLabel}>
        <h2>オークション出展LINEUP</h2>
        {/* <!-- carDetail --> */}


  <CarLabelCard />



        <div className={s.pager}>
          <p>全1,560</p>
          <div>
            <a href="">戻る</a>
            <a href="">１</a>
            <a href="">2</a>
            <a href="">3</a>
            <a href="">4</a>
            <a href="">5</a>
            <a href="">6</a>
            <a href="">次へ</a>
          </div>
        </div>
      </article>
    </>
  );
}

Home.Layout = Layout;
