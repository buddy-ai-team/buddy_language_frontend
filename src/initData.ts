/* eslint-disable @typescript-eslint/no-explicit-any */

export function getInitData(): string {
    try {
        const initDataString = new URLSearchParams(window.location.hash.slice(1))
            .get('tgWebAppData');

        if (initDataString === null) {
            throw new Error('Ooof! Something is wrong. Init data is missing');
        }
        else {
            return initDataString;
        }
    }
    catch (error: any) {
        console.error(error);
        throw new Error(`Error occurred during API request: ${error.message}`);
    }

}