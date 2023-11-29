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
  private requestApi<T>(url: string, method: string, data?: any): Promise<T> {
    return new Promise((resolve, reject) => {
      http
        .request<T>({
          url,
          method,
          data,
        })
        .then((response) => {
          resolve(response.data);
        })
        .catch((error) => {
          console.error(error);
          reject(new Error(`Error occurred during API request: ${error.message}`));
        });
    });
  }

  // User's methods
  getUser(id: string): Promise<User> {
    return this.requestApi<User>(`/user/get?userId=${id}`, "GET");
  }

  getUserByTelegramId(id: string): Promise<User> {
    return this.requestApi<User>(`/user/get_by_telegram_id?id=${id}`, "GET");
  }

  updateUser(user: User): Promise<User> {
    return this.requestApi<User>("/user/update", "POST", user);
  }

  addUser(addUserRequest: AddUserRequest): Promise<User> {
    return this.requestApi<User>("/user/add", "POST", addUserRequest);
  }

  // Role's methods
  getRole(id: string): Promise<Role> {
    return this.requestApi<Role>(`/role/get?roleId=${id}`, "GET");
  }

  getRoleAll(): Promise<Role[]> {
    return this.requestApi<Role[]>("/role/all", "GET");
  }

  updateRole(role: Role): Promise<Role> {
    return this.requestApi<Role>("/role/update", "POST", role);
  }

  addRole(addRoleRequest: AddRoleRequest): Promise<Role> {
    return this.requestApi<Role>("/role/add", "POST", addRoleRequest);
  }

  // Word's methods
  getWord(id: string): Promise<WordEntity> {
    return this.requestApi<WordEntity>(`/wordentity/id?wordId=${id}`, "GET");
  }

  getWordsByAccountId(accountId: string): Promise<WordEntity[]> {
    return this.requestApi<WordEntity[]>(
      `/wordentity/id-account?accountId=${accountId}`,
      "GET"
    );
  }

  updateWord(word: WordEntity): Promise<WordEntity> {
    return this.requestApi<WordEntity>("/wordentity/update", "POST", word);
  }

  addWord(addWordEntityRequest: AddWordEntityRequest): Promise<WordEntity> {
    return this.requestApi<WordEntity>(
      "/wordentity/add",
      "POST",
      addWordEntityRequest
    );
  }
}

export default new ApiService();