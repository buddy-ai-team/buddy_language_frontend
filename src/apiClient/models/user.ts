/* tslint:disable */
/* eslint-disable */
/**
 * BuddyLanguage.WebApi
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

import { Preferences } from './preferences';
import { WordEntity } from './word-entity';

/**
 * 
 *
 * @export
 * @interface User
 */
export interface User {

    /**
     * @type {string}
     * @memberof User
     */
    id: string;

    /**
     * @type {Array<WordEntity>}
     * @memberof User
     */
    wordEntities?: Array<WordEntity> | null;

    /**
     * @type {string}
     * @memberof User
     */
    firstName?: string | null;

    /**
     * @type {string}
     * @memberof User
     */
    lastName?: string | null;

    /**
     * @type {string}
     * @memberof User
     */
    telegramId: string;

    /**
     * @type {Preferences}
     * @memberof User
     */
    userPreferences: Preferences;
}
