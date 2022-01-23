import { Layout } from "components/ui";
import { ReactNode } from "react";
import s from "../styles/profile.module.css";

export default function Profile() :ReactNode{



    return (
      <div className={s.profile}>
        <article>
          <dl>
            <div>
              <dt>氏名</dt>
              <dd>春 太郎</dd>
            </div>
            <div>
              <dt>企業名</dt>
              <dd>HALMOTOR</dd>
            </div>
            <div>
              <dt>電話番号</dt>
              <dd>090-xxx-xxxx</dd>
            </div>
            <div>
              <dt>メールアドレス</dt>
              <dd>halxxx@hal.ac.jp</dd>
            </div>
          </dl>
        </article>
        <article>
          <nav>
            <ul>
              <li>
                <a href="">落札履歴</a>
              </li>
              <li>
                <a href="">登録一覧</a>
              </li>
              <li>
                <a href="">お知らせ</a>
              </li>
            </ul>
          </nav>

          <div>
            <table>
              <thead>

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
              </thead>
              <tbody>

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
              </tbody>
            </table>

            <div className={s.pager}>
              <p>32件</p>
              <div>
                <button>戻る</button>
                <ul>
                  <li><a href="">1</a></li>
                  <li><a href="">2</a></li>
                  <li><a href="">3</a></li>
                  <li><a href="">4</a></li>
                  <li><a href="">5</a></li>
                </ul>
                <button>次へ</button>
              </div>
            </div>
          </div>
        </article>
      </div>
    );
}
Profile.Layout = Layout