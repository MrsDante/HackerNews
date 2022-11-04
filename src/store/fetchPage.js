import { newsActions } from "./slices/newsSlice";
import { newStoriesIds, data } from "../services/apiForHN";

export const fetchNews = () => {
    return async (dispatch, getState) => {
        try {
            dispatch(newsActions.deleteNews());
            dispatch(newsActions.deleteLoading());
            
            const idsForNews = await newStoriesIds();
            const idsForNewsSlice = idsForNews.slice(0, 100); //ограничение в 100 новостей!!
            const dataNews = await Promise.all(
                idsForNewsSlice.map((el) => data(el))
            );
            dispatch(newsActions(dataNews));
        } catch(error) {
            dispatch(newsActions.deleteLoading('STORIES_LOADING_FAIL'));
            console.log(error);
        }
    }
};

export const fetchArticle = (id) => {
    return async (dispatch, getState) => {
        try {
            dispatch(newsActions.deleteArticle());
            const dataArticle = await data(id);
            dispatch(newsActions.loadedArticle(dataArticle));
        } catch (error) {
            dispatch(newsActions.deleteLoading('ARTICLE_LOADING_FAIL'));
            console.log('error');
        }
    }
};

export const fetchComments = () => {
    return async (dispatch, getState) => {
        try {
            dispatch(newsActions.deleteComments());
        } catch (error) {
            dispatch(newsActions.deleteLoading('COMMENTS_LOADING_FAIL'));
            console.log('error');
        }
    }
};

export const fetchSubComments = (kidsId) => {
    return async (dispatch, getState) => {
        try {
          const dataSubArticles = await Promise.all(kidsId.map(el => data(el)));
          dataSubArticles.forEach(el => dispatch(newsActions.loadedSubComments(el)));
        } catch (error) {
            dispatch(newsActions.deleteLoading('COMMENTS_LOADING_FAIL'));
        }
    }
};