import axios from "axios";
import { Layout } from "components/ui";
import { ReactNode } from "react";

export default function AuctionHistory({ user }): ReactNode{
  console.log(user);
  
    return (
      <div>
        <h1>日産スカイライン3.0 GT タイプSP</h1>
        <article>
          <h2>入札履歴</h2>
          <table>
            <thead>


              <tr>
              <th>入札者</th>
              <th>価格</th>
                <th>入札時刻</th>
                </tr>
                </thead>
                <tbody>
            {user.map((u) => {
            <tr>
              <td>text</td>
              <td>text</td>
              <td>text</td>
            </tr>;
            })}

            </tbody>
          </table>

          <a href="">&gt;&gt;戻る</a>
        </article>
      </div>
    );
}

AuctionHistory.Layout = Layout;


export async function getServerSideProps() {
  const url = "http://localhost:9000/auction-situation";
  const res = await axios.get(url)
  const user = await res.data

  
  

  return {
    props: {
      user
    }
  }
}
