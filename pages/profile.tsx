import { Layout } from "components/ui";
import { ReactNode } from "react";

export default function Profile() :ReactNode{
    return (
      <div>
        <div className="mainHeaders">
          <div className="searchBar">
            <input type="text" value="キーワード" />
            <button>Search</button>
          </div>
          <nav className="searchItems">
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
        <article>
          <dl>
            <dt>氏名</dt>
            <dd>春 太郎</dd>
            <dt>企業名</dt>
            <dd>HALMOTOR</dd>
            <dt>電話番号</dt>
            <dd>090-xxx-xxxx</dd>
            <dt>メールアドレス</dt>
            <dd>halxxx@hal.ac.jp</dd>
          </dl>
        </article>
        <article>
          <table>
            <tr>
              <th>
                <a href="">落札履歴</a>
              </th>
              <th>
                <a href="">登録一覧</a>
              </th>
              <th>
                <a href="">お知らせ</a>
              </th>
            </tr>

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
        </article>
      </div>
    );
}
Profile.Layout = Layout