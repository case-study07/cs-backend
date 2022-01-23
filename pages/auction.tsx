import axios from "axios";
import { useCountTimer } from "components/hooks";
import { Layout } from "components/ui";
import { useRouter } from "next/dist/client/router";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import useSWR from "swr";

import a from '../styles/auction.module.css'
;




export default function Auction({carData}) {
  

  const [cookies] = useCookies()
  // カウントダウンタイマー
  const { days, hours, minutes, seconds, isActive } = useCountTimer(1);
  
  // data　オークションデータ　フェッチ
  const { data } = useSWR(
    "http://localhost:9000/auction-situation",
    (url: string) => axios(url).then((res) => res.data),
    { refreshInterval: 1000 }
  );
      const [money, setMoney] = useState(data);

  const fetchAPI = async () =>{
    const url = `http://localhost:9000/auction-situation/1`;
    
    const res = await fetch(url, {
      method: "POST",
      headers: {
        accept: "*/*",
        Authorization: `Bearer ${cookies.token.payload}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        bidPrice: money,
      }),
    });
    
    };

  useEffect(() => {
    const closePrice = () => {
      if (isActive) {
        
      }
    }
  },[isActive])

      const buttonHandler = () => {
        money;
        fetchAPI();
        // console.log(carData);
        ;
      };
  
  const maxPrice = () => {
    const maxPrice = data.map((price:any) =>price.hammerPrice);
    return Math.max(...maxPrice);
  }
  
  



// data フェッチしていない場合
    if (!data) {
      return (
        <div>
          <Link href="/" passHref>
            <a>isLoading....</a>
          </Link>
        </div>
      );
    }


    return (
      <>
        <div className={a.auction}>
          <nav className={a.pankuzu}>
            <p>
              <a href="./index.html">Top</a>
            </p>
            <p>{`>>`}</p>
            <p>
              <a href="./auctionlist.html">オークション一覧</a>
            </p>
            <p>{`>>`}</p>
            <p>出品商品</p>
          </nav>

          <article className={a.auctionInfo}>
            <a className={a.schedule} href="">
              予定表一覧
            </a>
            <h2>トヨタ86セレクション</h2>
            {/*タイマーが終わった時に更新 */}
            <p className={a.carName}>{carData[0].carModel.name}</p>
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
                    <dd>{data.length}</dd>
                    <dd>
                      <Link href="/userHistory">
                        <a>入札履歴</a>
                      </Link>
                    </dd>
                  </div>
                  <div>
                    <dt>残り時間</dt>
                    {isActive ? (
                      <dd>オークションは終了しました。</dd>
                    ) : (
                      <dd>
                        {minutes}分{seconds}秒
                      </dd>
                    )}
                  </div>
                </dl>

                <div className={a.bidForm}>
                  <div>
                    <p>現在価格</p>
                    <p>
                      {isActive
                        ? "集計中です次の商品まで少々お待ちください"
                        : maxPrice() + "円"}
                    </p>
                  </div>
                  <div>
                    <label htmlFor="">入札価格</label>
                    <br />
                    <input
                      type="number"
                      name=""
                      id=""
                      value={money}
                      {...(isActive ? "disabled" : "")}
                      onChange={(e) => setMoney(Number(e.target.value))}
                    />

                    <button
                      {...(isActive ? "disabled" : "")}
                      onClick={buttonHandler}
                    >
                      入札する
                    </button>
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
                  <td>{carData[0].format}</td>
                  <th>形状</th>
                  <td>{carData[0].shape.name}</td>
                </tr>
                <tr>
                  <th>外装色</th>
                  <td>{carData[0].exteriorColor.name}</td>
                  <th>内装色</th>
                  <td>{carData[0].interiorColor.name}</td>
                </tr>
                <tr>
                  <th>エンジン</th>
                  <td>{carData[0].fuel.name}</td>
                  <th>排気量</th>
                  <td>{carData[0].engineSize}cc</td>
                </tr>
                <tr>
                  <th>シフト</th>
                  <td>{carData[0].shift.name}ト</td>
                  <th>車体番号</th>
                  <td>{carData[0].carBodyNumber.number}</td>
                </tr>

                <tr>
                  <th> 乗車人数</th>
                  <td>{carData[0].crewNumber}名</td>
                  <th>ドア数</th>
                  <td>{carData[0].doorNumber}</td>
                </tr>
                <tr>
                  <th>メーター交換</th>
                  <td>ー</td>
                  <th>駆動方式</th>
                  <td>2WD</td>
                </tr>
                <tr>
                  <th>ハンドル</th>
                  <td>{carData[0].handle.name}</td>
                  <th>ギア</th>
                  <td>{carData[0].gear.name}</td>
                </tr>
              </table>
              <table>
                <tr>
                  <th>エアコン</th>
                  <td>{carData[0].airConditoner.name}</td>
                  <th>車歴</th>
                  <td>{carData[0].CarHistory}</td>
                </tr>
                <tr>
                  <th>付加</th>
                  <td>PS</td>
                  <th>色替</th>
                  <td>あり</td>
                </tr>
                <tr>
                  <th>年式(初年登録年)</th>
                  <td>{carData[0].modelYear}</td>
                  <th>走行距離</th>
                  <td>14.4万km</td>
                </tr>
                <tr>
                  <th>修復歴</th>
                  <td>なし</td>
                  <th>禁煙・喫煙</th>
                  <td>ー</td>
                </tr>
                <tr>
                  <th>リサイクル</th>
                  <td>リ済別</td>
                  <th>キャンピングカー</th>
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
        </div>
      </>
    );
}
Auction.Layout = Layout;

export async function getServerSideProps() {
  const res = await axios.get("http://localhost:9000/car-body-number");
  const carData = await res.data;

  
    return {
      props: {
        carData
      }
    }
}