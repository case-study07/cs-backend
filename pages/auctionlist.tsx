import { Layout } from "components/ui";

export default function AuctionList() {
    return (
        <div>
            
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
        <article >
          <div>
            <span><a href="./index.html">Top {`>> `}</a></span>
            <span>オークション一覧へ</span>
          </div>
        <div>
            <ul>
                <li>
                    <a href="./auction.html">
                      <img src="../img/86label.png" alt="オークションアイコン" />
                    </a>
                </li>
                <li>
                    <a href="./auction.html">
                      <img src="../img/lightcar.png" alt="オークションアイコン" />
                    </a>
                </li>
                                <li>
                    <a href="./auction.html">
                      <img src="../img/86label.png" alt="オークションアイコン" />
                    </a>
                </li>
                <li>
                    <a href="./auction.html">
                      <img src="../img/lightcar.png" alt="オークションアイコン" />
                    </a>
                </li>
            </ul>
          
        </div>
      </article>
        </div>
    )
}
 
AuctionList.Layout = Layout;