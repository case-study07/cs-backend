import { ReactElement, ReactNode, useState } from "react";
import s from "../../styles/Category.module.css"

const syllabary = [
    { Aline: "あ", Bline: "い", Cline: "う", Dline: "え", Eline: "お" },
    { Aline: "か", Bline: "き", Cline: "く", Dline: "け", Eline: "こ" },
    { Aline: "さ", Bline: "し", Cline: "す", Dline: "せ", Eline: "そ" },
    { Aline: "た", Bline: "ち", Cline: "つ", Dline: "て", Eline: "と" },
    { Aline: "な", Bline: "に", Cline: "ぬ", Dline: "ね", Eline: "の" },
    { Aline: "は", Bline: "ひ", Cline: "ふ", Dline: "へ", Eline: "ほ" },
    { Aline: "ま", Bline: "み", Cline: "む", Dline: "め", Eline: "も" },
    { Aline: "や", Bline: "ゆ", Cline: "よ", Dline: "", Eline: "" },
    { Aline: "ら", Bline: "り", Cline: "る", Dline: "れ", Eline: "ろ" },
    { Aline: "わ", Bline: "を", Cline: "ん", Dline: "", Eline: "" },
];


const Category = ():ReactElement=> {

    const [query, setQuery] = useState("");
    const clickHandler = (e:any) => {
        e.preventDefault();
        setQuery(e.target.innerText);
    }

  return (
    <div className={s.mainHeaders}>
      <div className={s.searchBar}>
        <input type="text" value="キーワード" />
        <button>Search</button>
      </div>
      <nav className={s.searchTitles}>
        <ul>
          <li className={s.categoryTagColor}>車体名</li>
          <li>乗車人数</li>
          <li>走行距離</li>
          <li>ボディタイプ</li>
          <li>メーカー</li>
          <li>年式</li>
          <li>排気量</li>
          <li>価格</li>
        </ul>
      </nav>

      <div className={s.categoryLabel}>
        <ul className={s.searchItems}>
          {syllabary.map((syllabary, index) => (
            <li key={index}>
              <p onClick={clickHandler}>{syllabary.Aline}</p>
              <p onClick={clickHandler}>{syllabary.Bline}</p>
              <p onClick={clickHandler}>{syllabary.Cline}</p>
              <p onClick={clickHandler}>{syllabary.Dline}</p>
              <p onClick={clickHandler}>{syllabary.Eline}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Category
