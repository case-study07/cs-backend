import axios from "axios";
import Link from "next/link";
import s from "../../styles/AuctionListCard.module.css";

const AuctionListCard = ({ auction }) => {
  
  const image = "/img/images.png";
  return (
    <div className={s.root}>
      <Link href={`auction/${auction.id}`} passHref>
        <a>
          <div className={s.card}>
            <img
              src={image}
              style={{
                width: "100%",
                height: "180px",
              }}
              alt=""
            />
            <div
              className={s.root}
              style={{
                height: "180px",
                backgroundColor: `${auction.auctionColor}`,
                opacity: "0.5",
                width: "100%",
              }}
            >
              <p className={s.ItemImage}></p>
              <div className={s.text}>
                <p>{auction.startTime}</p>
                <p>{auction.auctionName}</p>
                <p>{auction.subTitle}</p>
              </div>
            </div>
          </div>
        </a>
      </Link>
    </div>
  );
};

export default AuctionListCard;
