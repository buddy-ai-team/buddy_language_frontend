import api from "./apiClient/_Api";
import { Role,
         AddRoleRequest,
         User,
         AddUserRequest, 
         WordEntity,
         AddWordEntityRequest } from "./apiClient/index";

class apiSevice{

    //User's metods
    async getUser(id: string){
        try {
            const response = await api.get<User>(`/user/get?userId=${id}`);
            return response.data;
        } catch (error) {
            console.error(error);
        }      
    }

    async getUserByTelegramId(id: string){
        try {
            const response = await api.get<User>(`/user/get_by_telegram_id?id=${id}`);
            return response.data;
        } catch (error) {
            console.error(error);
        }  
    }

    async updateUser(user: User){
        try {
            const response = await api.post<User>('/user/update', user);
            return response.data;
        } catch (error) {
            console.error(error);
        }  
    }

    async addUser(addUserRequest: AddUserRequest){
        try {
            const response = await api.post<User>('/user/add', addUserRequest);
            return response.data;
        } catch (error) {
            console.error(error);
        }  
    }

    //Role's metods

    async getRole(id: string){
        try {
            const response = await api.get<Role>(`/role/get?roleId=${id}`);
            return response.data;
        } catch (error) {
            console.error(error);
        }      
    }

    async getRoleAll(){
        try {
            const response = await api.get<Array<Role>>(`/role/all`);
            return response.data;
        } catch (error) {
            console.error(error);
        }  
    }

    async updateRole(role: Role){
        try {
            const response = await api.post<Role>('/role/update', role);
            return response.data;
        } catch (error) {
            console.error(error);
        }  
    }

    async addRole(addRoleRequest: AddRoleRequest){
        try {
            const response = await api.post<Role>('/role/add', addRoleRequest);
            return response.data;
        } catch (error) {
            console.error(error);
        }  
    }

    //Word's metods

    async getWord(id: string){
        try {
            const response = await api.get<WordEntity>(`/wordentity/id?wordId=${id}`);
            return response.data;
        } catch (error) {
            console.error(error);
        }      
    }

    async getWordsByAccountId(accountId: string){
        try {
            const response = await api.get<Array<WordEntity>>(`/wordentity/id-account?accountId=${accountId}`);
            return response.data;
        } catch (error) {
            console.error(error);
        }  
    }

    async updateWord(word: WordEntity){
        try {
            const response = await api.post<WordEntity>('/wordentity/update', word);
            return response.data;
        } catch (error) {
            console.error(error);
        }  
    }

    async addWord(addWordEntityRequest: AddWordEntityRequest){
        try {
            const response = await api.post<WordEntity>('/wordentity/add', addWordEntityRequest);
            return response.data;
        } catch (error) {
            console.error(error);
        }  
    }

}

export default new apiSevice();