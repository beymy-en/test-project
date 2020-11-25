import React, {useEffect, useRef, useState} from 'react';
import {appendHistory, fetchWithTimeout} from "./utils";


function ApiGithub() {
    const [data, setData] = useState<any>(null);
    const timer = useRef<any>(null)

    useEffect(() => {
        timer.current = setInterval(() => {
            const startTime = Date.now();
            let endTime;
            fetchWithTimeout('https://api.github.com', {
                cache: 'no-cache',
                timeout: 5000,
            }).then(r => r.json()).then(result => {
                setData(result);
                endTime = Date.now();
                const item = {status: 'ok', startTime, endTime}
                appendHistory(item);
            }).catch((e) => {
                endTime = Date.now();
                const item = {status: 'error', startTime, endTime}
                appendHistory(item);
            });
        }, 5000);

        return () => {
            clearInterval(timer.current);
        }
    }, []);

    return (
        <>
            <div>
                ApiGithub
            </div>
            {data && (
                <table style={{width: 1000}}>
                    <thead>
                    <tr>
                        <th>键</th>
                        <th>值</th>
                    </tr>
                    </thead>
                    <tbody>
                    {Object.keys(data).map((key) => (
                        <tr key={key}>
                            <td>{key}</td>
                            <td>{data[key]}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            )}
        </>
    );
}

export default ApiGithub;