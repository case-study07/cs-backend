import axios from "axios";
import { Layout } from "components/ui";
import { useRouter } from "next/dist/client/router";
import Link from "next/link";
import { ReactElement } from "react";
import useSWR from "swr";
import s from "../styles/userHistory.module.css";


export default function UserHistory(): ReactElement {
  const { data } = useSWR(
    "http://localhost:9000/auction-color",
    (url: string) => axios(url).then((res) => res.data)
  );
    
    const router = useRouter();
    const { id } = router.query;


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
    <div className={s.root}>
      <h2>日産スカイライン 3.0 GT タイプSP</h2>
      <p>入札履歴</p>

      <table>
        <thead>
          <tr>
            <th>入札者</th>
            <th>価格</th>
            <th>入札時刻</th>
          </tr>
        </thead>
        <tbody>
          {data.map((user: any, index: number) => (
            <tr key={index}>
              <td>{user.id}</td>
              <td>{user.name}円</td>
              <td>00:00</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className={s.btnRoot}>
        <Link href="/auction">
          <a className={s.backButton}>戻る</a>
        </Link>
      </div>
    </div>
  );
}
UserHistory.Layout = Layout;

