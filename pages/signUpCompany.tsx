import { Layout } from "components/ui";

export default function signUpCompany() {
    return (
        <>
                  <article>
            <h2 hidden>サインアップ（企業）</h2>
            <form action="">
                <div>
                    <label htmlFor="" hidden>アイコン</label>
                    <input type="file" name="" id=""/>
                </div>
                <div>
                    <label htmlFor="">名前</label>
                    <input type="text" name="" id=""/>
                </div>
                <div>
                    <label htmlFor="">企業名</label>
                    <input type="text" name="" id=""/>
                </div>
                <div>
                    <label htmlFor="">メールアドレス</label>
                    <input type="email" name="" id=""/>
                </div>
                <div>
                    <label htmlFor="">パスワード</label>
                    <input type="password" name="" id=""/>
                </div>
                <div>
                    <label htmlFor="">確認用パスワード</label>
                    <input type="password" name="" id=""/>
                </div>
                <div>
                    <label htmlFor="">電話番号</label>
                    <input type="tel" name="" id=""/>
                </div>

                <input type="submit" value="新規作成" />
            </form>
        </article>
        </>
    )
}
signUpCompany.Layout = Layout;