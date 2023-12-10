/* eslint-disable @typescript-eslint/no-explicit-any */

export function getInitData(): string {

    const initDataString = new URLSearchParams(window.location.hash.slice(1))
        .get('tgWebAppData');

    if (initDataString === null) {
        throw new Error('Ooof! Something is wrong. Init data is missing');
    }
    else {
        console.log(initDataString);
        return initDataString;
    }
}