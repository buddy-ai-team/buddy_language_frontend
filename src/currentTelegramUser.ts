/* eslint-disable @typescript-eslint/no-explicit-any */

export function getCurentTelegramUser(initDataString: string): any {

    try{
        const user = new URLSearchParams(initDataString).get("user");
        if (user === null) {
            throw new Error('Ooof! Something is wrong. User data is missing');
        }
        else{
            const resultUser = JSON.parse(user);
            return resultUser; 
        }
    }
    catch (error: any) {
        console.error(error);
        throw new Error(`Error occurred: ${error.message}`);
    }
}

