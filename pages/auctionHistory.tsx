import { Layout } from "components/ui";
import { ReactNode } from "react";

export default function AuctionHistory() :ReactNode{
    return (
      <div>
        <h1>日産スカイライン3.0 GT タイプSP</h1>
        <article>
          <h2>入札履歴</h2>
          <table>
            <tr>
              <th>入札者</th>
              <th>価格</th>
              <th>入札時刻</th>
            </tr>
            <tr>
              <td>text</td>
              <td>text</td>
              <td>text</td>
            </tr>
            <tr>
              <td>text</td>
              <td>text</td>
              <td>text</td>
            </tr>
            <tr>
              <td>text</td>
              <td>text</td>
              <td>text</td>
            </tr>
            <tr>
              <td>text</td>
              <td>text</td>
              <td>text</td>
            </tr>
          </table>

          <a href="">&gt;&gt;戻る</a>
        </article>
      </div>
    );
}

AuctionHistory.Layout = Layout;
