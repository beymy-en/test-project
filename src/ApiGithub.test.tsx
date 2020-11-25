import React from 'react';
import {render, screen, waitFor} from '@testing-library/react';
import ApiGithub from './ApiGithub';

jest.setTimeout(10000);

test('api loading', async () => {
    render(<ApiGithub />);
    expect(screen.queryByText('ApiGithub')).not.toBeNull();
    expect(screen.queryByText('current_user_url')).toBeNull();
    await waitFor(() => screen.getByText('current_user_url'), {
        timeout: 10000
    });
    expect(screen.queryByText('current_user_url')).not.toBeNull();
});
