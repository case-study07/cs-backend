import { Layout } from "components/ui"
import image from "next/image"
import { FC, ReactElement, ReactNode } from "react"

export default function CarDetail() :ReactElement {
    return (
        <>
            <div className="mainHeaders">
  
        <div className="searchBar">
          <input type="text" value="キーワード" /><button>Search</button>
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
      <div className="carDetail">
        <article>
          <nav className="pankuzu">
            <a href="./index.html">Top</a>
            <p>`&gt;``&gt;`</p>
            <p>出品詳細</p>
          </nav>
          <h2 className="carName">日産スカイライン 3.0 GT タイプSP</h2>
          <div>
            <img className="carImage" src="../img/Featured image.png" alt="" />
            <div className="carOthers">
              <Image src="../public/img/Featured image.png" alt="" />
              <Image src="../img/Featured image.png" alt="" />
              <Image src="../img/Featured image.png" alt="" />
              <Image src="../img/Featured image.png" alt="" />
            </div>
          </div>
          <dl className="auctionAndAmount">
            <div>
              <dt>出品オークション</dt>
              <dd><a href=""><Image src="../img/86label.png" alt="オークションラベル"></a></dd>
            </div>
            <div>
              <dt>初期金額</dt>
              <dd className="amount">3,780,000</dd>
            </div>
          </dl>
          </article>
          <article>
              <h3>基本詳細</h3>
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
                    <td colspan="3">
                      車検残:無<br>
                      車検の取得にあたって法定費用が必要となります。<br>
                      車検整備無<br>
                      車検整備(法定24ヶ月定期点検整備/商用車は12ヶ月)を実施しません。<br>
                      購入後(車検取得後)に別途、車検整備を実施してください
                    </td>
                  </tr>
                  <tr>
                    <th>法廷整備</th>
                    <td colspan="3">
                      法定整備無<br>
                      車両の状態については販売店位ご確認ください
                    </td>
                  </tr>
                  <tr>
                    <th>保障</th>
                    <td colspan="3">
                      保障無<br>
                      無償・有償保障とも無となります。
                    </td>
                  </tr>
                </table>
              </div>
          </article>
      </div>
    </div>
    </>
    )
}

CarDetail.Layout = Layout;
