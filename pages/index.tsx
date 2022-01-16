import s from "../styles/main.module.css";
import { ReactNode } from "react";
import Link from "next/link";

import { Layout } from "../components/ui/";

export default function Home(): ReactNode {
  return (
    <>
      <div className={s.mainHeaders}>
        <div className={s.searchBar}>
          <input type="text" value="キーワード" />
          <button>Search</button>
        </div>
        <nav className={s.searchTitles}>
          <ul>
            <li className={s.categoryTagColor}>車体名</li>
            <li>乗車人数</li>
            <li>走行距離</li>
            <li>ボディタイプ</li>
            <li>メーカー</li>
            <li>年式</li>
            <li>排気量</li>
            <li>価格</li>
          </ul>
        </nav>

        <div className={s.categoryLabel}>
          <ul className={s.searchItems}>
            <li>
              <p>
                <a href="">あ</a>
              </p>
              <p>
                <a href="">い</a>
              </p>
              <p>
                <a href="">う</a>
              </p>
              <p>
                <a href="">え</a>
              </p>
              <p>
                <a href="">お</a>
              </p>
            </li>
            <li>
              <p>
                <a href="">か</a>
              </p>
              <p>
                <a href="">き</a>
              </p>
              <p>
                <a href="">く</a>
              </p>
              <p>
                <a href="">け</a>
              </p>
              <p>
                <a href="">こ</a>
              </p>
            </li>
            <li>
              <p>
                <a href="">さ</a>
              </p>
              <p>
                <a href="">し</a>
              </p>
              <p>
                <a href="">す</a>
              </p>
              <p>
                <a href="">せ</a>
              </p>
              <p>
                <a href="">そ</a>
              </p>
            </li>
            <li>
              <p>
                <a href="">た</a>
              </p>
              <p>
                <a href="">ち</a>
              </p>
              <p>
                <a href="">つ</a>
              </p>
              <p>
                <a href="">て</a>
              </p>
              <p>
                <a href="">と</a>
              </p>
            </li>
            <li>
              <p>
                <a href="">な</a>
              </p>
              <p>
                <a href="">に</a>
              </p>
              <p>
                <a href="">ぬ</a>
              </p>
              <p>
                <a href="">ね</a>
              </p>
              <p>
                <a href="">の</a>
              </p>
            </li>
            <li>
              <p>
                <a href="">は</a>
              </p>
              <p>
                <a href="">ひ</a>
              </p>
              <p>
                <a href="">ふ</a>
              </p>
              <p>
                <a href="">へ</a>
              </p>
              <p>
                <a href="">ほ</a>
              </p>
            </li>
            <li>
              <p>
                <a href="">ま</a>
              </p>
              <p>
                <a href="">み</a>
              </p>
              <p>
                <a href="">む</a>
              </p>
              <p>
                <a href="">め</a>
              </p>
              <p>
                <a href="">も</a>
              </p>
            </li>
            <li>
              <p>
                <a href="">や</a>
              </p>
              <p>
                <a href="">ゆ</a>
              </p>
              <p>
                <a href="">よ</a>
              </p>
            </li>
            <li>
              <p>
                <a href="">ら</a>
              </p>
              <p>
                <a href="">り</a>
              </p>
              <p>
                <a href="">る</a>
              </p>
              <p>
                <a href="">れ</a>
              </p>
              <p>
                <a href="">ろ</a>
              </p>
            </li>
            <li>
              <p>
                <a href="">わ</a>
              </p>
              <p>
                <a href="">を</a>
              </p>
              <p>
                <a href="">ん</a>
              </p>
            </li>
          </ul>
        </div>
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
}

Home.Layout = Layout;
