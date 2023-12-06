/* eslint-disable @typescript-eslint/no-explicit-any */
import axios, { AxiosInstance } from "axios";
import { getInitData } from "./initData";
import {
  Role,
  AddRoleRequest,
  User,
  AddUserRequest,
  WordEntity,
  AddWordEntityRequest,
  UpdateUserPreferencesRequest,
} from "./apiClient/index";


//const BASE_URL = "https://buddylanguageapi.azurewebsites.net";
const LOCAL_BASE_URL = "https://localhost:7264";

const http = axios.create({
  baseURL: LOCAL_BASE_URL,
});

const setAuthorizationHeader = (api: AxiosInstance) => {
  try {
    const initData = getInitData();

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
  data?: any
): Promise<T> {
  try {
    setAuthorizationHeader(http); // Установка заголовка авторизации перед каждым запросом
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
export async function getUser(id: string): Promise<User> {
  return requestApi<User>(`/user/get?userId=${id}`, "GET");
}

export async function getUserByTelegramId(id: string): Promise<User> {
  return requestApi<User>(`/user/get_by_telegram_id?id=${id}`, "GET");
}

export async function updateUser(user: User): Promise<User> {
  return requestApi<User>("/user/update", "POST", user);
}

export async function updateUserPreferences(newUserPreferences: UpdateUserPreferencesRequest): Promise<User> {
  return requestApi<User>("/user/update_user_preferences", "POST", newUserPreferences);
}

export async function addUser(addUserRequest: AddUserRequest): Promise<User> {
  return requestApi<User>("/user/add", "POST", addUserRequest);
}

// Role's methods
export async function getRole(id: string): Promise<Role> {
  return requestApi<Role>(`/role/get?roleId=${id}`, "GET");
}

export async function getRoleAll(): Promise<Role[]> {
  return requestApi<Role[]>("/role/all", "GET");
}

export async function updateRole(role: Role): Promise<Role> {
  return requestApi<Role>("/role/update", "POST", role);
}

export async function addRole(addRoleRequest: AddRoleRequest): Promise<Role> {
  return requestApi<Role>("/role/add", "POST", addRoleRequest);
}

// Word's methods
export async function getWord(id: string): Promise<WordEntity> {
  return requestApi<WordEntity>(`/wordentity/id?wordId=${id}`, "GET");
}

export async function getWordsByAccountId(accountId: string): Promise<WordEntity[]> {
  return requestApi<WordEntity[]>(
    `/wordentity/id-account?accountId=${accountId}`,
    "GET"
  );
}

export async function updateWord(word: WordEntity): Promise<WordEntity> {
  return requestApi<WordEntity>("/wordentity/update", "POST", word);
}

export async function addWord(
  addWordEntityRequest: AddWordEntityRequest
): Promise<WordEntity> {
  return requestApi<WordEntity>(
    "/wordentity/add",
    "POST",
    addWordEntityRequest
  );
}
