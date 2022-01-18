import { Layout } from "components/ui"
import { ReactNode } from "react";
import s from "../styles/shipping.module.css"

export default function Shipping() :ReactNode{
    return (
      <div className={s.shipping}>
        <nav>
          <ul className={s.pankuzu}>
            <li>
              <a href="">プロフィールトップ</a>
            </li>
            <li>&gt;&gt;</li>
          </ul>
        </nav>
        <article>
          <h2 className={s.title}>運送状況</h2>
          {/* <ul className={s.shippingSitu}>
            <li><div><p>出荷準備</p></div></li>
            <li><div><p>出荷完了</p></div></li>
            <li><div><p>配送中</p></div></li>
            <li><div><p>配送完了</p></div></li>
          </ul> */}
          <div className="max-w-xl mx-auto my-4 border-b-2 pb-4">
            <div className="flex pb-3">
              <div className="flex-1"></div>

              <div className="flex-1">
                <div className="w-10 h-10 bg-green mx-auto rounded-full text-lg text-white flex items-center bg-green-500">
                  <span className="text-white text-center w-full">OK</span>
                </div>
              </div>

              <div className="w-1/6 align-center items-center align-middle content-center flex">
                <div className="w-full bg-grey-light rounded items-center align-middle align-center flex-1">
                  <div className="bg-green-light text-xs leading-none py-1 text-center text-grey-darkest rounded w-full"></div>
                </div>
              </div>

              <div className="flex-1">
                <div className="w-10 h-10 bg-green mx-auto rounded-full text-lg text-black flex items-center bg-green-500">
                  <span className="text-white text-center w-full">OK</span>
                </div>
              </div>

              <div className="w-1/6 align-center items-center align-middle content-center flex">
                <div className="w-full bg-grey-light rounded items-center align-middle align-center flex-1">
                  <div className="bg-green-light text-xs leading-none py-1 text-center text-grey-darkest rounded w-1/5"></div>
                </div>
              </div>

              <div className="flex-1">
                <div className="w-10 h-10 bg-white border-2 border-grey-light mx-auto rounded-full text-lg text-black flex items-center">
                  <span className="text-grey-darker text-center w-full">3</span>
                </div>
              </div>

              <div className="w-1/6 align-center items-center align-middle content-center flex">
                <div className="w-full bg-grey-light rounded items-center align-middle align-center flex-1">
                  <div className="bg-green-light text-xs leading-none py-1 text-center text-grey-darkest rounded w-0"></div>
                </div>
              </div>

              <div className="flex-1">
                <div className="w-10 h-10 bg-white border-2 border-grey-light mx-auto rounded-full text-lg text-black flex items-center">
                  <span className="text-grey-darker text-center w-full">4</span>
                </div>
              </div>

              <div className="flex-1"></div>
            </div>

            <div className="flex text-xs content-center text-center">
              <div className="w-1/4">出荷準備</div>

              <div className="w-1/4">出荷完了</div>

              <div className="w-1/4">配送中</div>

              <div className="w-1/4">配送完了</div>
            </div>
          </div>
        </article>
        <article>
          <h2 className={s.carName}>日産スカイライン 3.0 GT タイプSP</h2>
          <div>
            <img src="./img/Featured image.png" className={s.carImage} alt="" />
            <div className={s.carOthers}>
              <img src="./img/Featured image.png" alt="" />
              <img src="./img/Featured image.png" alt="" />
              <img src="./img/Featured image.png" alt="" />
              <img src="./img/Featured image.png" alt="" />
            </div>
          </div>
          <article className={s.basic}>
            <h2>基本詳細</h2>
            <div className={s.tables}>
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
                  <td colSpan={3}>
                    法定整備無
                    <br />
                    車両の状態については販売店位ご確認ください
                  </td>
                </tr>
                <tr>
                  <th>保障</th>
                  <td colSpan={3}>
                    保障無
                    <br />
                    無償・有償保障とも無となります。
                  </td>
                </tr>
              </table>
            </div>
          </article>
        </article>
      </div>
    );
}

Shipping.Layout = Layout;