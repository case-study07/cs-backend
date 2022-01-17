import { Layout } from "components/ui";
import { ReactNode } from "react";

export default function Delivery() :ReactNode{
    return (
    <div>
      <nav>
        <ul>
          <li>プロフィールトップ&gt;&gt;</li>
        </ul>
      </nav>
      <article>
        <h2>配送方法</h2>
        <form action="">
          <div>
            <label>陸運</label>
            <select name="" id="">
              <option value="">選択して下さい</option>
              <option value="">北海道：10万</option>
              <option value="">東北：6万</option>
              <option value="">関東：5万</option>
              <option value="">中部：3万</option>
              <option value="">近畿：2万</option>
              <option value="">中国：3万</option>
              <option value="">四国：5万</option>
              <option value="">九州：6万</option>
              <option value="">沖縄：10万</option>
            </select>
            <p>99999円</p>
          </div>
          <div>
            <label>フェリー</label>
            <div>
              <div>
                あり
                <input type="radio" name="" id="" />
              </div>
              <div>
                なし
                <input type="radio" name="" id="" />
              </div>
            </div>
            <p>99999円</p>
          </div>
          <div>
            <p>車両</p>
            <p>999999円</p>
          </div>
          <div>
            <p>合計金額</p>
            <p>1234567円</p>
          </div>

          <input type="submit" value="確定" />
        </form>
      </article>
      <article>
        <h2>日産スカイライン 3.0 GT タイプSP</h2>
        <div>
          <img src="./img/Featured image.png" alt="" />
          <img src="./img/Featured image.png" alt="" />
          <img src="./img/Featured image.png" alt="" />
          <img src="./img/Featured image.png" alt="" />
          <img src="./img/Featured image.png" alt="" />
        </div>
        <div className="tables">
          <table>
            <tr>
              <th>型式</th>
              <td>DBA-ZV37</td>
              <th>形状</th>
              <td>クーペ</td>
            </tr>
            <tr>
              <th>外装色</th>
              <td>赤</td>
              <th>内装色</th>
              <td>赤</td>
            </tr>
            <tr>
              <th>エンジン</th>
              <td>ガソリン</td>
              <th>排気量</th>
              <td>3000cc</td>
            </tr>
            <tr>
              <th>シフト</th>
              <td>コラムシフト</td>
              <th>車体番号</th>
              <td>横浜304</td>
            </tr>
            <tr>
              <th>評価点</th>
              <td>S</td>
              <th>車体評価</th>
              <td>SS</td>
            </tr>
            <tr>
              <th>車体評価</th>
              <td>A</td>
              <th>外装評価</th>
              <td>A</td>
            </tr>
            <tr>
              <th> 乗車人数</th>
              <td>5名</td>
              <th>ドア数</th>
              <td>4</td>
            </tr>
            <tr>
              <th>メーター交換</th>
              <td>ー</td>
              <th>駆動方式</th>
              <td>2WD</td>
            </tr>
            <tr>
              <th>ハンドル</th>
              <td>右</td>
              <th>ギア</th>
              <td>6速</td>
            </tr>
          </table>
          <table>
            <tr>
              <th>エアコン</th>
              <td>AC</td>
              <th>車歴</th>
              <td>自家用車</td>
            </tr>
            <tr>
              <th>付加</th>
              <td>PS</td>
              <th>色替</th>
              <td>あり</td>
            </tr>
            <tr>
              <th>年式(初年登録年)</th>
              <td>2015(H27)</td>
              <th>走行距離</th>
              <td>14.4万km</td>
            </tr>
            <tr>
              <th>修復歴</th>
              <td>なし</td>
              <th>禁煙車</th>
              <td>ー</td>
            </tr>
            <tr>
              <th>リサイクル</th>
              <td>リ済別</td>
              <th>キャンピングカー</th>
              <td>ー</td>
            </tr>
            <tr>
              <th>福祉車両</th>
              <td>ー</td>
              <th>正規輸入車</th>
              <td>ー</td>
            </tr>
            <tr>
              <th>車検</th>
              <td>
                車検残:無
                <br />
                車検の取得にあたって法定費用が必要となります。
                <br />
                車検整備無
                <br />
                車検整備(法定24ヶ月定期点検整備/商用車は12ヶ月)を実施しません。
                <br />
                購入後(車検取得後)に別途、車検整備を実施してください
              </td>
            </tr>
            <tr>
              <th>法廷整備</th>
              <td>
                法定整備無
                <br />
                車両の状態については販売店位ご確認ください
              </td>
            </tr>
            <tr>
              <th>保障</th>
              <td>
                保障無
                <br />
                無償・有償保障とも無となります。
              </td>
            </tr>
          </table>
        </div>
      </article>
    </div>
    )
}

Delivery.Layout = Layout;