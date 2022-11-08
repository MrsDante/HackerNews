const urlForHN = "https://hacker-news.firebaseio.com/v0/";
const newStoriesUrl = `${urlForHN}newstories.json?print=pretty`;

const response = (respns) => {
    if (respns.ok) {
        return respns.json();
    }
    return Promise.reject(`Ошибка ${respns.status}`);
};

export const getStoriesIds = async () => {
    return fetch(newStoriesUrl).then(response);
};

export const getData = (id) => {
    return fetch(`${urlForHN}/item/${id}.json`).then(response);
};
