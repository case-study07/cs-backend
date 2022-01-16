import { Layout } from "components/ui";
import  { ReactNode } from "react";

export default function auctionDelete():ReactNode {
    return (
        <>
                   <article>
            <h2>オークション削除</h2>
            <a href="">管理者TOPへ戻る</a>
            <div>
                <div>
                    <label htmlFor="">オークション名</label>
                    <p>大晦日大感謝祭！幻の車限定オークション</p>
                </div>
                <div>
                    <label htmlFor="">サブタイトル</label>
                    <p>サブタイトルサブタイトル</p>
                </div>
                <div>
                    <label htmlFor="">開始時間</label>
                    <p>2021年12月24日17時00分</p>
                </div>
                <div>
                    <label htmlFor="">画像</label>
                    <p>2021年12月24日19時00分</p>
                </div>
            </div>

                <table>
                    <tr>
                        <th>No</th>
                        <th>画像</th>
                        <th>車両名</th>
                        <th>メーカー</th>
                        <th>評価</th>
                        <th>型式</th>
                        <th>年式</th>
                        <th>走行距離</th>
                        <th>排気量</th>
                        <th>修復歴</th>
                        <th>車検有無</th>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td><img src="./img/Featured image.png" alt="" /></td>
                        <td>86 2.0 GT HKS WORK18AW </td>
                        <td>ホンダ</td>
                        <td>S</td>
                        <td>DBA-ZN6</td>
                        <td>2014</td>
                        <td>6.2万km</td>
                        <td>2000cc</td>
                        <td>2022年4月</td>
                        <td>あり</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td><img src="./img/Featured image.png" alt="" /></td>
                        <td>86 2.0 GT HKS WORK18AW </td>
                        <td>ホンダ</td>
                        <td>S</td>
                        <td>DBA-ZN6</td>
                        <td>2014</td>
                        <td>6.2万km</td>
                        <td>2000cc</td>
                        <td>2022年4月</td>
                        <td>あり</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td><img src="./img/Featured image.png" alt="" /></td>
                        <td>86 2.0 GT HKS WORK18AW </td>
                        <td>ホンダ</td>
                        <td>S</td>
                        <td>DBA-ZN6</td>
                        <td>2014</td>
                        <td>6.2万km</td>
                        <td>2000cc</td>
                        <td>2022年4月</td>
                        <td>あり</td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td><img src="./img/Featured image.png" alt="" /></td>
                        <td>86 2.0 GT HKS WORK18AW </td>
                        <td>ホンダ</td>
                        <td>S</td>
                        <td>DBA-ZN6</td>
                        <td>2014</td>
                        <td>6.2万km</td>
                        <td>2000cc</td>
                        <td>2022年4月</td>
                        <td>あり</td>
                    </tr>
                    <tr>
                        <td>5</td>
                        <td><img src="./img/Featured image.png" alt="" /></td>
                        <td>86 2.0 GT HKS WORK18AW </td>
                        <td>ホンダ</td>
                        <td>S</td>
                        <td>DBA-ZN6</td>
                        <td>2014</td>
                        <td>6.2万km</td>
                        <td>2000cc</td>
                        <td>2022年4月</td>
                        <td>あり</td>
                    </tr>
                </table>

                <p>作成されたオークションは完全に削除されます</p>
                <button>削除</button>
        </article>
        </>
    )
}
auctionDelete.Layout = Layout;