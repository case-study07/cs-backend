import { Category } from "components/common";
import { Layout } from "components/ui";
import Link from "next/link";

export default function AuctionList() {
    return (
      <div className="mainHeaders">
        <Category />
        <article>
          <div>
            <span>
              <a href="./">Top {`>> `}</a>
            </span>
            <span>オークション一覧へ</span>
          </div>
          <div>
            <ul>
              <li>
                <Link href="./auction">
                  <a>
                    <img src="img/86label.png" alt="オークションアイコン" />
                  </a>
                </Link>
              </li>
              <li>
                <a href="./auction">
                  <img src="img/lightcar.png" alt="オークションアイコン" />
                </a>
              </li>
              <li>
                <a href="./auction">
                  <img src="img/86label.png" alt="オークションアイコン" />
                </a>
              </li>
              <li>
                <a href="./auction">
                  <img src="img/lightcar.png" alt="オークションアイコン" />
                </a>
              </li>
            </ul>
          </div>
        </article>
      </div>
    );
}
 
AuctionList.Layout = Layout;