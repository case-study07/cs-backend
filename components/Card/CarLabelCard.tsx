import s from "../../styles/CarLabelCard.module.css";
import Link from "next/link";
import { ReactNode } from "react";

const CarLabelCard = ()=> {
  return (
    <div>
      <div className={s.carDetailCard}>
        <Link href="/" passHref>
          <a>
            <table>
              <thead>
              <tr>
                <th>画像</th>
                <th>車種名</th>
                <th>出品予定日</th>
                <th>開始価格</th>
                <th>型式</th>
                <th>年式</th>
                <th>走行距離</th>
                <th>排気量</th>
                <th>車検有無</th>
                <th>修復歴</th>
              </tr>
              </thead>
              <tbody>
                <tr>
                <td>
                  <img
                    src="../img/Featured image.png"
                    alt="オークション出展用車"
                  />
                </td>
                <td>86 2.0 GT HKS WORK18AW</td>
                <td>12月25日</td>
                <td>1720000〜</td>
                <td>DBA-ZN6</td>
                <td>2014</td>
                <td>6.2万km</td>
                <td>2000cc</td>
                <td>2022年4月</td>
                <td>あり</td>
              </tr>
              </tbody>
            </table>
          </a>
        </Link>
      </div>
    </div>
  );
};

export default CarLabelCard;
