/* eslint-disable @typescript-eslint/no-explicit-any */

export function getCurentTelegramUser(initDataString: string): any {

    const user = new URLSearchParams(initDataString).get("user");

    if (user === null) {
        throw new Error('Ooof! Something is wrong. User data is missing');
    }
        
    const resultUser = JSON.parse(user);
    return resultUser;

}

