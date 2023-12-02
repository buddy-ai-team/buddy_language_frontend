/* eslint-disable @typescript-eslint/no-explicit-any */

export function getCurentTelegramUserId(initDataString: string): string {

    try{
        const user = new URLSearchParams(initDataString).get("user");
        if (user === null) {
            throw new Error('Ooof! Something is wrong. User data is missing');
        }
        else{
            const resultUser = JSON.parse(user);
            const telegramUserId: string = resultUser.id;
            return telegramUserId;
        }
    }
    catch (error: any) {
        console.error(error);
        throw new Error(`Error occurred: ${error.message}`);
    }
}

