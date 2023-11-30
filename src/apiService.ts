/* eslint-disable @typescript-eslint/no-explicit-any */
import http from "./apiClient/http";
import {
  Role,
  AddRoleRequest,
  User,
  AddUserRequest,
  WordEntity,
  AddWordEntityRequest,
} from "./apiClient/index";

class ApiService {

  private async requestApi<T>(
    url: string,
    method: string,
    data?: any
  ): Promise<T> {
    try {
      const response = await http.request<T>({
        url,
        method,
        data,
      });
      return response.data;
    } catch (error: any) {
      console.error(error);
      throw new Error(`Error occurred during API request: ${error.message}`);
    }
  }

  // User's methods
  async getUser(id: string): Promise<User> {
    return this.requestApi<User>(`/user/get?userId=${id}`, "GET");
  }

  async getUserByTelegramId(id: string): Promise<User> {
    return this.requestApi<User>(`/user/get_by_telegram_id?id=${id}`, "GET");
  }

  async updateUser(user: User): Promise<User> {
    return this.requestApi<User>("/user/update", "POST", user);
  }

  async addUser(addUserRequest: AddUserRequest): Promise<User> {
    return this.requestApi<User>("/user/add", "POST", addUserRequest);
  }

  // Role's methods
  async getRole(id: string): Promise<Role> {
    return this.requestApi<Role>(`/role/get?roleId=${id}`, "GET");
  }

  async getRoleAll(): Promise<Role[]> {
    return this.requestApi<Role[]>("/role/all", "GET");
  }

  async updateRole(role: Role): Promise<Role> {
    return this.requestApi<Role>("/role/update", "POST", role);
  }

  async addRole(addRoleRequest: AddRoleRequest): Promise<Role> {
    return this.requestApi<Role>("/role/add", "POST", addRoleRequest);
  }

  // Word's methods
  async getWord(id: string): Promise<WordEntity> {
    return this.requestApi<WordEntity>(`/wordentity/id?wordId=${id}`, "GET");
  }

  async getWordsByAccountId(accountId: string): Promise<WordEntity[]> {
    return this.requestApi<WordEntity[]>(
      `/wordentity/id-account?accountId=${accountId}`,
      "GET"
    );
  }

  async updateWord(word: WordEntity): Promise<WordEntity> {
    return this.requestApi<WordEntity>("/wordentity/update", "POST", word);
  }

  async addWord(
    addWordEntityRequest: AddWordEntityRequest
  ): Promise<WordEntity> {
    return this.requestApi<WordEntity>(
      "/wordentity/add",
      "POST",
      addWordEntityRequest
    );
  }
}

export default new ApiService();