import React from 'react';
import {getHistory} from './utils';

function ApiGithubHistory() {
    const items = getHistory();
    return (
        <>
            <div>
                ApiGithubHistory
            </div>
            <table>
                <thead>
                <tr>
                    <th>状态</th>
                    <th>开始时间</th>
                    <th>结束时间</th>
                    <th>加载时间</th>
                </tr>
                </thead>
                <tbody>
                {items.map((item: any, index: any) => (
                    <tr key={item.startTime || index}>
                        <td>{item.status}</td>
                        <td>{item.startTime && new Date(item.startTime).toISOString()}</td>
                        <td>{item.endTime && new Date(item.endTime).toISOString()}</td>
                        <td>{item.startTime && item.endTime && `${item.endTime - item.startTime}ms`}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </>
    );
}

export default ApiGithubHistory;