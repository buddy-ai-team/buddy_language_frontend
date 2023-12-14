/* eslint-disable @typescript-eslint/no-explicit-any */
import axios, { AxiosInstance, AxiosResponse } from "axios";
import {
  Role,
  AddRoleRequest,
  User,
  AddUserRequest,
  WordEntity,
  AddWordEntityRequest,
  UpdateUserPreferencesRequest,
  UpdateWordEntityRequest,
  WordEntityResponse,
} from "./apiClient/index";

const BASE_URL = "https://buddylanguageapi.azurewebsites.net";

const http = axios.create({
  baseURL: BASE_URL,
});

const setAuthorizationHeader = (api: AxiosInstance, initData: string) => {
  try {
    // Устанавливаем заголовок авторизации для всех запросов с использованием переданного Axios-экземпляра
    api.defaults.headers.common["Authorization"] = `tma ${initData}`;
  } catch (error: any) {
    console.error(error);
    throw new Error(`Failed to set authorization header: ${error.message}`);
  }
};


async function requestApi<T>(
  url: string,
  method: string,
  initData: string,
  data?: any
): Promise<T> {
  try {
    setAuthorizationHeader(http, initData); // Установка заголовка авторизации перед каждым запросом
    const response = await http.request<T>({
      url,
      method,
      data,
    });
    return response.data;
  }
  catch (error: any) {
    console.error(error);
    throw new Error(`Error occurred during API request: ${error.message}`);
  }
}

// User's methods
export async function getUser(initData: string, id: string): Promise<User> {
  return requestApi<User>(`/user/get?userId=${id}`, "GET", initData);
}

export async function getUserByTelegramId(initData: string, id: string): Promise<User> {
  return requestApi<User>(`/user/get_by_telegram_id?id=${id}`, "GET", initData);
}

export async function updateUser(initData: string, user: User): Promise<User> {
  return requestApi<User>("/user/update", "POST", initData, user);
}

export async function updateUserPreferences(initData: string, newUserPreferences: UpdateUserPreferencesRequest): Promise<User> {
  return requestApi<User>("/user/update_user_preferences", "POST", initData, newUserPreferences);
}

export async function addUser(initData: string, addUserRequest: AddUserRequest): Promise<User> {
  return requestApi<User>("/user/add", "POST", initData, addUserRequest);
}

// Role's methods
export async function getRole(initData: string, id: string): Promise<Role> {
  return requestApi<Role>(`/role/get?roleId=${id}`, "GET", initData);
}

export async function getRoleAll(initData: string): Promise<Role[]> {
  return requestApi<Role[]>("/role/all", "GET", initData);
}

export async function updateRole(initData: string, role: Role): Promise<Role> {
  return requestApi<Role>("/role/update", "POST", initData, role);
}

export async function addRole(initData: string, addRoleRequest: AddRoleRequest): Promise<Role> {
  return requestApi<Role>("/role/add", "POST", initData, addRoleRequest);
}

// Word's methods
export async function getWord(initData: string, id: string): Promise<WordEntity> {
  return requestApi<WordEntity>(`/wordentity/id?wordId=${id}`, "GET", initData);
}

export async function getWordsByAccountId(initData: string, accountId: string): Promise<WordEntity[]> {
  return requestApi<WordEntity[]>(`/wordentity/id-account?accountId=${accountId}`,"GET", initData);
}

export async function updateWord(initData: string, word: UpdateWordEntityRequest): Promise<WordEntityResponse> {
  return requestApi<WordEntityResponse>("/wordentity/update", "POST", initData, word);
}

export async function addWord(initData: string, addWordEntityRequest: AddWordEntityRequest): Promise<WordEntity> {
  return requestApi<WordEntity>("/wordentity/add", "POST", initData, addWordEntityRequest,);
}

export async function deleteWord(initData: string,  id: string): Promise<AxiosResponse<void>> {
  return requestApi<AxiosResponse<void>>(`/wordentity/delete?wordEntityId=${id}`, "POST", initData);
}
