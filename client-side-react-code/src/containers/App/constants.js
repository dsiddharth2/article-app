/*
 * AppConstants
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. We prefix them with 'yourproject/YourComponent' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 *
 * Follow this format:
 * export const YOUR_ACTION_CONSTANT = 'yourproject/YourContainer/YOUR_ACTION_CONSTANT';
 */

export const LOAD_ARTICLES = 'articleApp/App/LOAD_ARTICLES';
export const ARTICLE_LOADED_SUCCESS = 'articleApp/App/LOAD_ARTICLE_SUCCESS';
export const ARTICLE_LOADED_FAILED = 'articleApp/App/LOAD_ARTICLE_FAILED';

export const ADD_ARTICLE = 'articleApp/App/ADD_ARTICLE';

