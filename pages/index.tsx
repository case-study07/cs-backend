import s from "../styles/main.module.css";
import { ReactNode } from "react";
import Link from "next/link";

import {Layout} from "../components/ui/"

export default function Home (): ReactNode   {

  return (
    <>
      <div className={s.mainHeaders}>
        <div className={s.searchBar}>
          <input type="text" value="キーワード" />
          <button>Search</button>
        </div>
        <nav className={s.searchItems}>
          <ul>
            <li>
              <select name="" id="">
                <option>車体名</option>
              </select>
            </li>
            <li>
              <select name="" id="">
                <option>乗車人数</option>
              </select>
            </li>
            <li>
              <select name="" id="">
                <option>走行距離</option>
              </select>
            </li>
            <li>
              <select name="" id="">
                <option>ボディタイプ</option>
              </select>
            </li>
            <li>
              <select name="" id="">
                <option>メーカー</option>
              </select>
            </li>
            <li>
              <select name="" id="">
                <option>年式</option>
              </select>
            </li>
            <li>
              <select name="" id="">
                <option>排気量</option>
              </select>
            </li>
            <li>
              <select name="" id="">
                <option>価格</option>
              </select>
            </li>
          </ul>
        </nav>
      </div>

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
        <div className={s.carDetailCard}>
          <Link href="/" passHref>
            <a>
              <table>
                <tr>
                  <th>画像</th>
                  <th>車種名</th>
                  <th>出品予定日</th>
                  <th>開始価格</th>
                  <th>型式</th>
                  <th>年式</th>
                  <th>走行距離</th>
                  <th>排気量</th>
                  <th>車検有無</th>
                  <th>修復歴</th>
                </tr>
                <tr>
                  <td>
                    <img
                      src="../img/Featured image.png"
                      alt="オークション出展用車"
                    />
                  </td>
                  <td>86 2.0 GT HKS WORK18AW</td>
                  <td>12月25日</td>
                  <td>1720000〜</td>
                  <td>DBA-ZN6</td>
                  <td>2014</td>
                  <td>6.2万km</td>
                  <td>2000cc</td>
                  <td>2022年4月</td>
                  <td>あり</td>
                </tr>
              </table>
            </a>
          </Link>
        </div>
        {/* <!-- carDetail --> */}

        <div className={s.carDetailCard}>
          <Link href="/" passHref>
            <a>
              <table>
                <tr>
                  <th>画像</th>
                  <th>車種名</th>
                  <th>出品予定日</th>
                  <th>開始価格</th>
                  <th>型式</th>
                  <th>年式</th>
                  <th>走行距離</th>
                  <th>排気量</th>
                  <th>車検有無</th>
                  <th>修復歴</th>
                </tr>
                <tr>
                  <td>
                    <img
                      src="../img/Featured image.png"
                      alt="オークション出展用車"
                    />
                  </td>
                  <td>86 2.0 GT HKS WORK18AW</td>
                  <td>12月25日</td>
                  <td>1720000〜</td>
                  <td>DBA-ZN6</td>
                  <td>2014</td>
                  <td>6.2万km</td>
                  <td>2000cc</td>
                  <td>2022年4月</td>
                  <td>あり</td>
                </tr>
              </table>
            </a>
          </Link>
        </div>

        <div className={s.carDetailCard}>
          <Link href="/" passHref>
            <a>
              <table>
                <tr>
                  <th>画像</th>
                  <th>車種名</th>
                  <th>出品予定日</th>
                  <th>開始価格</th>
                  <th>型式</th>
                  <th>年式</th>
                  <th>走行距離</th>
                  <th>排気量</th>
                  <th>車検有無</th>
                  <th>修復歴</th>
                </tr>
                <tr>
                  <td>
                    <img
                      src="../img/Featured image.png"
                      alt="オークション出展用車"
                    />
                  </td>
                  <td>86 2.0 GT HKS WORK18AW</td>
                  <td>12月25日</td>
                  <td>1720000〜</td>
                  <td>DBA-ZN6</td>
                  <td>2014</td>
                  <td>6.2万km</td>
                  <td>2000cc</td>
                  <td>2022年4月</td>
                  <td>あり</td>
                </tr>
              </table>
            </a>
          </Link>
        </div>

        <div className={s.carDetailCard}>
          <Link href="/" passHref>
            <a>
              <table>
                <tr>
                  <th>画像</th>
                  <th>車種名</th>
                  <th>出品予定日</th>
                  <th>開始価格</th>
                  <th>型式</th>
                  <th>年式</th>
                  <th>走行距離</th>
                  <th>排気量</th>
                  <th>車検有無</th>
                  <th>修復歴</th>
                </tr>
                <tr>
                  <td>
                    <img
                      src="../img/Featured image.png"
                      alt="オークション出展用車"
                    />
                  </td>
                  <td>86 2.0 GT HKS WORK18AW</td>
                  <td>12月25日</td>
                  <td>1720000〜</td>
                  <td>DBA-ZN6</td>
                  <td>2014</td>
                  <td>6.2万km</td>
                  <td>2000cc</td>
                  <td>2022年4月</td>
                  <td>あり</td>
                </tr>
              </table>
            </a>
          </Link>
        </div>

        <div className={s.carDetailCard}>
          <Link href="/" passHref>
            <a>
              <table>
                <tr>
                  <th>画像</th>
                  <th>車種名</th>
                  <th>出品予定日</th>
                  <th>開始価格</th>
                  <th>型式</th>
                  <th>年式</th>
                  <th>走行距離</th>
                  <th>排気量</th>
                  <th>車検有無</th>
                  <th>修復歴</th>
                </tr>
                <tr>
                  <td>
                    <img
                      src="../img/Featured image.png"
                      alt="オークション出展用車"
                    />
                  </td>
                  <td>86 2.0 GT HKS WORK18AW</td>
                  <td>12月25日</td>
                  <td>1720000〜</td>
                  <td>DBA-ZN6</td>
                  <td>2014</td>
                  <td>6.2万km</td>
                  <td>2000cc</td>
                  <td>2022年4月</td>
                  <td>あり</td>
                </tr>
              </table>
            </a>
          </Link>
        </div>
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
};

Home.Layout = Layout;
