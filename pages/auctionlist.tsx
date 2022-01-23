import AuctionListCard from "components/Card/AuctionListCard";
import { Category } from "components/common";
import { Layout } from "components/ui";
import Link from "next/link";
import s from "../styles/AuctionList.module.css";


export default function AuctionList() {
    return (
      <div className={s.list}>
        <Category />
        <article className={s.root}>
          <AuctionListCard />
          <AuctionListCard />
          <AuctionListCard />
          <AuctionListCard />
        </article>
      </div>
    );
}
 
AuctionList.Layout = Layout;