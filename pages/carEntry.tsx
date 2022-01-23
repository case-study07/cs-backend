import { Layout } from "components/ui";
import s from "../styles/carEntry.module.css";

export default function CarEntry() {
        const handleSubmit = (e) => {
          e.preventDefault();
          console.log(e);
        };
    return (
      <div className={s.carEntry}>
        <article>
          <h2>車登録</h2>
          <p>アイコン</p>
          <form onSubmit={handleSubmit}>
              <div className={s.icon}>
                <div>
                    <label htmlFor=""><input type="file" name="" id="" />ファイルを選択</label>
                    <p>選択されていません</p>
                </div>
                <div>
                    <label htmlFor=""><input type="file" name="" id="" />ファイルを選択</label>
                    <p>選択されていません</p>
                </div>
                <div>
                    <label htmlFor=""><input type="file" name="" id="" />ファイルを選択</label>
                    <p>選択されていません</p>
                </div>
                <div>
                    <label htmlFor=""><input type="file" name="" id="" />ファイルを選択</label>
                    <p>選択されていません</p>
                </div>
                <div>
                    <label htmlFor=""><input type="file" name="" id="" />ファイルを選択</label>
                    <p>選択されていません</p>
                </div>
              </div>
            <section>
              <h3>車詳細</h3>
              <table className={s.table}>
                  <tbody>
                    <tr>
                        <th>型式</th>
                        <td><input type="text" name="" id="" /></td>
                        <th>形状</th>
                        <td><input type="text" name="" id="" /></td>
                    </tr>
                    <tr>
                        <th>外装色</th>
                        <td><input type="text" name="" id="" /></td>
                        <th>内装色</th>
                        <td><input type="text" name="" id="" /></td>
                    </tr>
                    <tr>
                        <th>シフト</th>
                        <td><input type="text" name="" id="" /></td>
                        <th>車台番号</th>
                        <td><input type="text" name="" id="" /></td>
                    </tr>
                    <tr>
                        <th>駆動方式</th>
                        <td><input type="text" name="" id="" /></td>
                        <th>排気量</th>
                        <td><input type="text" name="" id="" /></td>
                    </tr>
                    <tr>
                        <th>エンジン種別</th>
                        <td><input type="text" name="" id="" /></td>
                        <th>輸入車</th>
                        <td><input type="text" name="" id="" /></td>
                    </tr>
                    <tr>
                        <th>評価点</th>
                        <td><input type="text" name="" id="" /></td>
                        <th>車体評価</th>
                        <td><input type="text" name="" id="" /></td>
                    </tr>
                    <tr>
                        <th>外装評価</th>
                        <td><input type="text" name="" id="" /></td>
                        <th>内装評価</th>
                        <td><input type="text" name="" id="" /></td>
                    </tr>
                    <tr>
                        <th>メーター交換</th>
                        <td><input type="text" name="" id="" /></td>
                        <th>駆動方式</th>
                        <td><input type="text" name="" id="" /></td>
                    </tr>
                    <tr>
                        <th>ハンドル</th>
                        <td><input type="text" name="" id="" /></td>
                        <th>ギア</th>
                        <td><input type="text" name="" id="" /></td>
                    </tr>
                    <tr>
                        <th>エアコン</th>
                        <td>
                        <input type="text" name="" id="" /></td>
                        <th> 乗車人数</th>
                        <td><input type="text" name="" id="" /></td>
                    </tr>
                    <tr>
                        <th>ドア数</th>
                        <td><input type="text" name="" id="" /></td>
                        <th>車歴</th>
                        <td><input type="text" name="" id="" /></td>
                    </tr>
                    <tr>
                        <th>付加</th>
                        <td><input type="text" name="" id="" /></td>
                        <th>色替</th>
                        <td><input type="text" name="" id="" /></td>
                    </tr>
                    <tr>
                        <th>年式(初年登録年)</th>
                        <td><input type="text" name="" id="" /></td>
                        <th>走行距離</th>
                        <td><input type="text" name="" id="" /></td>
                    </tr>
                    <tr>
                        <th>修復歴</th>
                        <td className={s.tdRadio}>
                            <label htmlFor="repairYes"><input type="radio" name="repair" id="repairYes" />あり</label>
                            <label htmlFor="repairNo"><input type="radio" name="repair" id="repairNo" />なし</label>
                        </td>
                        <th>禁煙車</th>
                        <td className={s.tdRadio}>
                            <label htmlFor="smokingYes"><input type="radio" name="smoking" id="smokingYes" />あり</label>
                            <label htmlFor="smokingNo"><input type="radio" name="smoking" id="smokingNo" />なし</label>
                        </td>
                    </tr>
                    <tr>
                        <th>リサイクル</th>
                        <td className={s.tdRadio}>
                            <label htmlFor="recyclingYes"><input type="radio" name="recyclingYes" id="recyclingYes" />あり</label>
                            <label htmlFor="recyclingNo"><input type="radio" name="recycling" id="recyclingNo" />なし</label>
                        </td>
                        <th>キャンピングカー</th>
                        <td className={s.tdRadio}>
                            <label htmlFor="campYes"><input type="radio" name="camp" id="campYes" />あり</label>
                            <label htmlFor="campNo"><input type="radio" name="camp" id="campNo" />なし</label>
                        </td>
                    </tr>
                    <tr>
                        <th>福祉車両</th>
                        <td className={s.tdRadio}>
                            <label htmlFor="welfareYes"><input type="radio" name="welfare" id="welfareYes" />あり</label>
                            <label htmlFor="welfareNo"><input type="radio" name="welfare" id="welfareNo" />なし</label>
                        </td>
                        <th>正規輸入車</th>
                        <td className={s.tdRadio}>
                            <label htmlFor="regularYes"><input type="radio" name="regular" id="regularYes" />あり</label>
                            <label htmlFor="regularNo"><input type="radio" name="regular" id="regularNo" />なし</label>
                        </td>
                    </tr>
                    <tr>
                        <th>車検</th>
                        <td colSpan={3}><textarea name="" id="" cols={30} rows={10}></textarea></td>
                    </tr>
                    <tr>
                        <th>法定整備</th>
                        <td colSpan={3}><textarea name="" id="" cols={30} rows={10}></textarea></td>
                    </tr>
                    <tr>
                        <th>保障</th>
                        <td colSpan={3}><textarea name="" id="" cols={30} rows={10}></textarea></td>
                    </tr>
                  </tbody>
              </table>
            </section>
            <input type="submit" value="登録" />
          </form>
        </article>
      </div>
    );
}
CarEntry.Layout = Layout;