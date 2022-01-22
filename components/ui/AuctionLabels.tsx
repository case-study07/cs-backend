import Image from "next/image";
import Link from "next/link";
import s from "../../styles/AuctionLabels.module.css";



const AuctionLabels = () => {
  const image = "/img/images.png";
  // const styles = {bgImage:`background-image:${image}`};

  const color = "#020202"
  return (
    <div className={s.root}>
      <Link href="/auctionlist">
      <a
        style={{
          backgroundImage: `url(${image})`,
          backgroundPosition: "right",
          backgroundRepeat: "no-repeat",
          width: "640px",
          height: "160px",
        }}
        >
        <div
          className={s.root}
          style={{
            height: "160px",
            backgroundColor: `${color}`,
            opacity: "0.5",
            width: "400px",
          }}
        >
          <p className={s.ItemImage}></p>
          <div className={s.text}>
            <p>12月25日 19:00~</p>
            <p>トヨタ86セレクション</p>
            <p>新型から年代物まで年代物まで勢揃い</p>
          </div>
        </div>
      </a>
            </Link>
      <Link href="/auctionlist">

      <a
        style={{
          backgroundImage: `url(${image})`,
          backgroundPosition: "right",
          backgroundRepeat: "no-repeat",
          width: "640px",
          height: "160px",
        }}
      >
        <div
          className={s.root}
          style={{
            height: "160px",
            backgroundColor: `${color}`,
            opacity: "0.5",
            width: "400px",
          }}
        >
          <p className={s.ItemImage}></p>
          <div className={s.text}>
            <p>12月25日 19:00~</p>
            <p>トヨタ86セレクション</p>
            <p>新型から年代物まで年代物まで勢揃い</p>
          </div>
        </div>
      </a>
</Link>

    </div>
  );
};

export default AuctionLabels;
