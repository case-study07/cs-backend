import { Layout } from "../components/ui/";
import a from '../styles/auction.module.css'

export default function Auction() {
    return (
        <>
                 <div className={a.auction}>

        <nav className={a.pankuzu}>
          <p><a href="./index.html">Top</a></p>
          <p>{`>>`}</p>
          <p><a href="./auctionlist.html">オークション一覧</a></p>
          <p>{`>>`}</p>
          <p>出品商品</p>
        </nav>

        <article className={a.auctionInfo}>
          <a className={a.schedule} href="">予定表一覧</a>
          <h2>トヨタ86セレクション</h2>
            <p className={a.carName}>日産スカイライン 3.0 GT タイプSP</p>
          <div className={a.bid}>
            <div className={a.carImage}>
              <img src="../img/Featured image.png" alt="" />
              <div>
                <img src="../img/Featured image.png" alt="" />
                <img src="../img/Featured image.png" alt="" />
                <img src="../img/Featured image.png" alt="" />
                <img src="../img/Featured image.png" alt="" />
              </div>
            </div>
            
            <div className={a.rightColum}>
              <dl>
                <div>
                  <dt>入札件数</dt>
                  <dd>17</dd>
                  <dd><a href="">入札履歴</a></dd>
                </div>
                <div>
                  <dt>残り時間</dt>
                  <dd>3分00秒</dd>
                </div>
              </dl>
              
              <div className={a.bidForm}>
                <div>
                  <p>現在価格</p>
                  <p>4,000,000円</p>
                </div>
                <div>
                  <label htmlFor="">入札価格</label><br />
                  <input type="number" name="" id="" min={4000000} />
                  <button>入札する</button>
                </div>
              </div>
            </div>
          </div>
          </article>
          <article className={a.basic}>
            <h2>基本詳細</h2>
            <div className={a.tables}>
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
                  <td colSpan={3}>
                    車検残:無<br />
                    車検の取得にあたって法定費用が必要となります。<br />
                    車検整備無<br />
                    車検整備(法定24ヶ月定期点検整備/商用車は12ヶ月)を実施しません。<br />
                    購入後(車検取得後)に別途、車検整備を実施してください
                  </td>
                </tr>
                <tr>
                  <th>法廷整備</th>
                  <td colSpan={3}>
                    法定整備無<br />
                    車両の状態については販売店位ご確認ください
                  </td>
                </tr>
                <tr>
                  <th>保障</th>
                  <td colSpan={3}>
                    保障無<br />
                    無償・有償保障とも無となります。
                  </td>
                </tr>
              </table>
            </div>
        </article>
      </div>
        </>
    )
}
Auction.Layout = Layout;