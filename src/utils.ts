export async function fetchWithTimeout(resource: RequestInfo, options?: RequestInit & { timeout?: number }) {
    const { timeout = 30000 } = options || {};

    const controller = new AbortController();
    const id = setTimeout(() => controller.abort(), timeout);

    const response = await fetch(resource, {
        ...options,
        signal: controller.signal
    });
    clearTimeout(id);

    return response;
}


export function clearHistory() {
    localStorage.removeItem('github');
}

export function getHistory() {
    let items = [];
    let itemsJson = localStorage.getItem('github');
    if (itemsJson != null) {
        items = JSON.parse(itemsJson);
    }
    return items;
}

export function appendHistory(item: any) {
    let items = getHistory();
    localStorage.setItem('github', JSON.stringify([item, ...items]));
}