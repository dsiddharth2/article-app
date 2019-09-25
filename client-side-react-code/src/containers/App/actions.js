import { LOAD_ARTICLES, ARTICLE_LOADED_SUCCESS, ARTICLE_LOADED_FAILED } from './constants';

export function getArticles() {
    return { 
        type: LOAD_ARTICLES 
    };
}

export function loadedArticles(articles) {
    return { 
        type: ARTICLE_LOADED_SUCCESS,
        payload : articles
    };
}