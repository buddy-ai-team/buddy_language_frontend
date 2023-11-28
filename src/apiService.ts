/* eslint-disable @typescript-eslint/no-explicit-any */
import axios, { AxiosInstance } from "axios";
import api from "./apiClient/_Api";
import {
  Role,
  AddRoleRequest,
  User,
  AddUserRequest,
  WordEntity,
  AddWordEntityRequest,
} from "./apiClient/index";

// Создаем экземпляр Axios с нужными заголовками авторизации
const http: AxiosInstance = axios.create();

// Функция для установки заголовка авторизации в Axios перед отправкой запроса
const setAuthorizationHeader = () => {
  const initData = new URLSearchParams(window.location.hash.slice(1)).get(
    "tgWebAppData"
  );

  if (initData === null) {
    throw new Error("Ooof! Something is wrong. Init data is missing");
    return; // Игнорируем запрос, если initData отсутствует
  }

  // Устанавливаем заголовок авторизации для всех запросов с использованием созданного Axios-экземпляра
  http.defaults.headers.common["Authorization"] = `tma ${initData}`;
};

class ApiService {
  private async requestApi<T>(
    url: string,
    method: string,
    data?: any
  ): Promise<T> {
    try {
      setAuthorizationHeader(); // Установка заголовка перед каждым запросом
      const response = await api.request<T>({
        url,
        method,
        data,
      });
      return response.data;
    } catch (error: any) {
      console.error(`Error occurred during API request: ${error.message}`);
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
