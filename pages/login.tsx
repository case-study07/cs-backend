import { Layout } from "components/ui";
import s from "../styles/login.module.css";

export default function LoginUpPerson() {
  return (
    <>
      <article className={s.login}>
        <h2>ログイン</h2>
        <form action="">
          <div>
            <label htmlFor="">メールアドレス</label>
            <input type="email" name="" id="" />
          </div>
          <div>
            <label htmlFor="">パスワード</label>
            <input type="password" name="" id="" />
          </div>

          <input type="submit" value="ログイン" />
        </form>
      </article>
    </>
  );
}
LoginUpPerson.Layout = Layout;
