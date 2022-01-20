import { Layout } from "components/ui";
import s from "../styles/signUpPerson.module.css";

export default function SignUpPerson() {
    return (
      <>
        <article className={s.signUpPerson}>
          <h2>サインアップ（個人）</h2>
          <form action="">
            <div>
              <label htmlFor="">名前</label>
              <input type="text" name="" id="" />
            </div>
            <div>
              <label htmlFor="">メールアドレス</label>
              <input type="email" name="" id="" />
            </div>
            <div>
              <label htmlFor="">パスワード</label>
              <input type="password" name="" id="" />
            </div>
            <div>
              <label htmlFor="">確認用パスワード</label>
              <input type="password" name="" id="" />
            </div>
            <div>
              <label htmlFor="">電話番号</label>
              <input type="tel" name="" id="" />
            </div>

            <input type="submit" value="新規作成" />
          </form>
        </article>
      </>
    );
}
SignUpPerson.Layout = Layout;