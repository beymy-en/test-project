import React from 'react';
import {render, screen, waitFor} from '@testing-library/react';
import ApiGithubHistory from './ApiGithubHistory';
import {appendHistory, clearHistory} from "./utils";
import ApiGithub from './ApiGithub';

jest.setTimeout(10000);

test('api history', async () => {
    clearHistory();
    appendHistory({
        status: 'ok',
    })
    render(<ApiGithubHistory />);

    expect(screen.queryByText('ApiGithubHistory')).not.toBeNull();
    expect(screen.queryByText('ok')).not.toBeNull();
});
