import { Layout } from "components/ui";
import { ReactNode } from "react";

export default function CarEdit() :ReactNode {
    return (
        <div>
            <article>
            <h2 hidden>車登録</h2>
            <p>アイコン</p>
            <form action="">
                <input type="file" name="" id="" />
                <input type="file" name="" id="" />
                <input type="file" name="" id="" />
                <input type="file" name="" id="" />
                <input type="file" name="" id="" />
                <section>
                    <h3>車詳細</h3>
                    <dl>
                        <dt>型式</dt>
                        <dd><input type="text" name="" id="" value="DBA-ZV37" /></dd>

                        <dt>形状</dt>
                        <dd><input type="text" name="" id="" value="クーペ" /></dd>

                        <dt>外装色</dt>
                        <dd><input type="text" name="" id="" value="赤" /></dd>

                        <dt>内装色</dt>
                        <dd><input type="text" name="" id="" value="赤" /></dd>

                        <dt>シフト</dt>
                        <dd><input type="text" name="" id="" value="コラムシフト" /></dd>
                        
                        <dt>車台番号</dt>
                        <dd><input type="text" name="" id="" value="" /></dd>

                        <dt>駆動方式</dt>
                        <dd><input type="text" name="" id="" value="2WD" /></dd>

                        <dt>排気量</dt>
                        <dd><input type="text" name="" id="" value="3000cc" /></dd>
                        
                        <dt>エンジン種別</dt>
                        <dd><input type="text" name="" id="" value="ガソリン" /></dd>
                        
                        <dt>輸入車</dt>
                        <dd><input type="text" name="" id="" value="" /></dd>
                        
                        <dt>評価点</dt>
                        <dd><input type="text" name="" id="" value="S" /></dd>

                        <dt>車体評価</dt>
                        <dd><input type="text" name="" id="" value="A" /></dd>

                        <dt>メーター交換</dt>
                        <dd><input type="text" name="" id="" value="" /></dd>

                        <dt>車体評価</dt>
                        <dd><input type="text" name="" id="" value="" /></dd>
                        
                        <dt>外装評価</dt>
                        <dd><input type="text" name="" id="" value="A" /></dd>
                        
                        <dt>評価</dt>
                        <dd><input type="text" name="" id="" value="" /></dd>
                        
                        <dt>駆動方式</dt>
                        <dd><input type="text" name="" id="" value="" /></dd>
                        
                        <dt>ハンドル</dt>
                        <dd><input type="text" name="" id="" value="右" /></dd>

                        <dt>ギア</dt>
                        <dd><input type="text" name="" id="" value="6速" /></dd>

                        <dt>エアコン</dt>
                        <dd><input type="text" name="" id="" value="" /></dd>
                    
                        <dt> 乗車人数</dt>
                        <dd><input type="text" name="" id="" value="5" /></dd>
                    
                        <dt>ドア数</dt>
                        <dd><input type="text" name="" id="" value="4" /></dd>

                        <dt>車歴</dt>
                        <dd><input type="text" name="" id="" value="" /></dd>

                        <dt>付加</dt>
                        <dd><input type="text" name="" id="" value="PS" /></dd>

                        <dt>色替</dt>
                        <dd><input type="text" name="" id="" value="" /></dd>
    
                        <dt>年式(初年登録年)</dt>
                        <dd><input type="text" name="" id="" value="2015(H27)" /></dd>

                        <dt>走行距離</dt>
                        <dd><input type="text" name="" id="" value="14.4万km" /></dd>
                        
                        <dt>修復歴</dt>
                        <dd><input type="radio" name="" id="" checked />あり</dd>
                        <dd><input type="radio" name="" id="" />なし</dd>
    
                        <dt>禁煙車</dt>
                        <dd><input type="radio" name="" id="" checked />あり</dd>
                        <dd><input type="radio" name="" id="" />なし</dd>                        
                        
                        <dt>リサイクル</dt>
                        <dd><input type="radio" name="" id="" checked />あり</dd>
                        <dd><input type="radio" name="" id="" />なし</dd>                        
                        
                        <dt>キャンピングカー</dt>
                        <dd><input type="radio" name="" id="" checked />あり</dd>
                        <dd><input type="radio" name="" id="" />なし</dd>    
                        
                        <dt>福祉車両</dt>
                        <dd><input type="radio" name="" id="" checked />あり</dd>
                        <dd><input type="radio" name="" id="" />なし</dd>    
                        
                        <dt>正規輸入車</dt>
                        <dd><input type="radio" name="" id="" checked />あり</dd>
                        <dd><input type="radio" name="" id="" />なし</dd>                        
                        
                        <dt>車検</dt>
                        <dd>
                            <textarea name="" id="" cols={50} rows={10}>車検残：無
車検の取得にあたって法定費用が必要となります。
車検整備無
車検整備(法定24ヶ月定期点検整備/商用車は12ヶ月)を実施しません。
購入後(車検取得後)に別途、車検整備を実施してください
                            </textarea>
                        </dd>
                       
                        <dt>法廷整備</dt>
                        <dd>
                            <textarea name="" id="" cols={50} rows={10}>保障無
車両の状態については販売店位ご確認ください
                            </textarea>
                        </dd>
                       
                        <dt>保障</dt>
                        <dd>
                            <textarea name="" id="" cols={50} rows={10}>法定整備無
無償・有償保障とも無となります。
                            </textarea>
                        </dd>                       
                        
                </dl>
                </section>
                <input type="submit" value="編集" />
            </form>

        </article>
        </div>
    )
}

CarEdit.Layout = Layout;