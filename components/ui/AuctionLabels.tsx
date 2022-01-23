import AuctionListCard from "components/Card/AuctionListCard";
import Image from "next/image";
import Link from "next/link";
import s from "../../styles/AuctionLabels.module.css";



const AuctionLabels = () => {
  const image = "/img/images.png";
  // const styles = {bgImage:`background-image:${image}`};

  const color = "#020202"
  return (
    <div className={s.root}>
      <AuctionListCard />
      <AuctionListCard />
      <AuctionListCard />
      <AuctionListCard />
    </div>
  );
};

export default AuctionLabels;
