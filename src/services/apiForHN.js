const url = 'https://hacker-news.firebaseio.com/v0/';
const newStoriesUrl = `${url}newstories.json?print=pretty`;

const response = (respns) => {
    if (respns.ok) {
        return respns.json();
    }
    return Promise.reject(`Ошибка ${respns.status}`);
};

export const newStoriesIds = async() => {
  return fetch(newStoriesUrl).then(response);
};

export const data = (id) => {
    return fetch(`${url}/item/${id}.json`).then(response);
};