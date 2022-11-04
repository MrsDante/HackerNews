import { createSlice } from "@reduxjs/toolkit";

const newsSlice = createSlice({
    name: 'news',
    initialState: {
        stories: [],
        comments: [],
        subComments: [],
        article: null,
        storiesLoading: true,
        commentsLoading: true,
        articleLoading: true
    },
    reducers: {
        loadedStories(state, action) {
          const dataForStories = action.payload;
          const dataForStoriesFiltered = dataForStories.filter(el => el !== null);
          state.stories = dataForStoriesFiltered;
          state.storiesLoading = false;
        },
        loadedComments(state, action) {
          state.comments = action.payload;
          state.commentsLoading = false;
        },
        loadedSubComments(state, action) {
            state.subComments = [...state.subComments, action.payload];
        },
        loadedArticle(state, action) {
          state.article = action.payload;
          state.articleLoading = false;
        },
        deleteNews(state) {
            state.stories = [];
            state.storiesLoading = true;
        },
        deleteComments(state) {
            state.comments = [];
            state.commentsLoading = true;
            state.subComments = [];
        },
        deleteArticle(state) {
            state.article = null;
            state.comments = [];
            state.subComments = [];
            state.articleLoading = true;
            state.commentsLoading = true;
        },
        deleteLoading(state, action) {
            if (action.payload === 'STORIES_LOADING_FAIL') {
                state.storiesLoading = false;
            }
            if (action.payload === 'ARTICLE_LOADING_FAIL') {
                state.articleLoading = false;
            }
            if (action.payload === 'COMMENTS_LOADING_FAIL') {
                state.commentsLoading = false;
            }
        }
    }
});

export const newsActions = newsSlice.actions;
export default newsSlice;