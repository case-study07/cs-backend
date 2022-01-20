import { Layout } from "components/ui";
import s from "../styles/signUpCompany.module.css";

export default function signUpCompany() {
    return (
      <>
        <article className={s.signUpCompany}>
          <h2>サインアップ（企業）</h2>
          <form action="">
            <div>
              <label htmlFor="">名前</label><br />
              <input type="text" name="" id="" />
            </div>
            <div>
              <label htmlFor="">企業名</label><br />
              <input type="text" name="" id="" />
            </div>
            <div>
              <label htmlFor="">メールアドレス</label><br />
              <input type="email" name="" id="" />
            </div>
            <div>
              <label htmlFor="">パスワード</label><br />
              <input type="password" name="" id="" />
            </div>
            <div>
              <label htmlFor="">確認用パスワード</label><br />
              <input type="password" name="" id="" />
            </div>
            <div>
              <label htmlFor="">電話番号</label><br />
              <input type="tel" name="" id="" />
            </div>

            <input className={s.submit} type="submit" value="新規作成" />
          </form>
        </article>
      </>
    );
}
signUpCompany.Layout = Layout;