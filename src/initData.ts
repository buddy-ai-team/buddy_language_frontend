/* eslint-disable @typescript-eslint/no-explicit-any */

export function getInitData(): string {

    // const initDataString = new URLSearchParams(window.location.hash.slice(1))
    //     .get('tgWebAppData');

    const initDataString = "query_id=AAHuScQsAAAAAO5JxCyn2fmY&user=%7B%22id%22%3A751061486%2C%22first_name%22%3A%22%D0%95%D0%BA%D0%B0%D1%82%D0%B5%D1%80%D0%B8%D0%BD%D0%B0%22%2C%22last_name%22%3A%22%22%2C%22username%22%3A%22ekaterina_timans%22%2C%22language_code%22%3A%22ru%22%2C%22allows_write_to_pm%22%3Atrue%7D&auth_date=1701283485&hash=b4eed861b35b16dce158c235e8b6bb7dd2accc21a1ab234053794ba4891040c5";

    if (initDataString === null) {
        throw new Error('Ooof! Something is wrong. Init data is missing');
    }
    else {
        console.log(initDataString);
        return initDataString;
    }
}