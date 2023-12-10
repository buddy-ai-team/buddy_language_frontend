/* eslint-disable @typescript-eslint/no-explicit-any */

export function getInitData(): string {

    // const initDataString = new URLSearchParams(window.location.hash.slice(1))
    //     .get('tgWebAppData');

        const initDataString = "query_id=AAG4059_AAAAALjTn3-y9ZAg"+
        "&user=%7B%22id%22%3A2141180856%2C%22"+
        "first_name%22%3A%22%D0%9E%D0%BD%D0%B8%D1%89%D0%B5%D0%"+
        "BD%D0%BA%D0%BE%20%D0%90%D0%BD%D0%BD%D0%B0%22%2C%22"+
        "last_name%22%3A%22%22%2C%22username%22%3A%22"+
        "Anna_Onis%22%2C%22language_code%22%3A%22ru%22%2C%22"+
        "allows_write_to_pm%22%3Atrue%7D&auth_date=1701279684"+
        "&hash=c85cdb29adad89e0f4635317bc1ae064f810d3e8227dd119c01bad0b9b406f69";

    if (initDataString === null) {
        throw new Error('Ooof! Something is wrong. Init data is missing');
    }
    else {
        console.log(initDataString);
        return initDataString;
    }
}