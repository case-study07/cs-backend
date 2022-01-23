import { useEffect, useState } from "react"



// カウントダウンタイマー
export function useCountTimer(props:number) {
    const [days, setDays] = useState(0);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        // 時間取得
        const targetIntervalTime =
            Math.ceil(new Date().getTime() / 1000 / 60 / props) * 1000 * 60 * props;

        // 取得時刻からカウントダウン
        const target = new Date(targetIntervalTime);
        const interval = setInterval(() => {
            const now = new Date();
            const differnce = target.getTime() - now.getTime();

            const d = Math.floor(differnce / (1000 * 60 * 60 * 24));
            setDays(d);

            const h = Math.floor(
                (differnce % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
            );
            setHours(h);

            const m = Math.floor((differnce % (1000 * 60 * 60)) / (1000 * 60));
            setMinutes(m);

            const s = Math.floor((differnce % (1000 * 60)) / 1000);
            setSeconds(s);
            if (d <= 0 && h <= 0 && m <= 0 && s <= 0) {
                setIsActive(true);
            }
        }, 1000);
        return () => clearInterval(interval);
    }, []);
    return { days, hours, minutes, seconds, isActive };
}
