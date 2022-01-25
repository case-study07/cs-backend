import axios from "axios";
import AuctionListCard from "components/Card/AuctionListCard";
import Image from "next/image";
import Link from "next/link";
import s from "../../styles/AuctionLabels.module.css";



const AuctionLabels = (props) => {
  const { list } = props;

  return (
    <div className={s.root}>
      
      {list.map((item) => (<AuctionListCard key={item.id}  auction={item}/>))}
      
    </div>
  );
};

export default AuctionLabels;

