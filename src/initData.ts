/* eslint-disable @typescript-eslint/no-explicit-any */

export function getInitDataString(): string | null {

    const initDataString = new URLSearchParams(window.location.hash.slice(1))
        .get('tgWebAppData');
    return initDataString;
}
