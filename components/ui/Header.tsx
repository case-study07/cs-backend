import s from '../../styles/Header.module.css'

const Header = () => {
    return (
      <>
        <div className={s.headerColor}>
          <header className={s.headerBar}>
            <h1>HALMOTOR</h1>
            <nav className={s.headerNav}>
              <ul>
                <li>店舗一覧</li>
                <li>会社概要</li>
                <li>お問い合わせ</li>
                <li>
                  <button>
                    ようこそ〇〇さん
                    <br />
                    プロフィールへ
                  </button>
                </li>
              </ul>
            </nav>
          </header>
        </div>
      </>
    );
}

export default Header
