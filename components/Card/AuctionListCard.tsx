import Link from "next/link";
import s from "../../styles/AuctionLabels.module.css";

const AuctionListCard = () => {
  const image = "/img/images.png";
  // const styles = {bgImage:`background-image:${image}`};

  const color = "#020202";
  return (
    <div className={s.root}>
      <Link href="/auction">
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
                backgroundColor: `${color}`,
                opacity: "0.5",
                width: "100%",
              }}
            >
              <p className={s.ItemImage}></p>
              <div className={s.text}>
                <p>12月25日 19:00~</p>
                <p>トヨタ86セレクション</p>
                <p>新型から年代物まで年代物まで勢揃い</p>
              </div>
            </div>
          </div>
        </a>
      </Link>
    </div>
  );
};

export default AuctionListCard;
