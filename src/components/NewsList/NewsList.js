import React from "react";
import { useSelector } from "react-redux";

import styles from "./NewsList.module.css";
import NewsCard from "../NewsCard/NewsCard";
import Loading from "../Loading/Loading";


const NewsList = () => {
    const storiesAreLoading = useSelector(state => state.news.storiesAreLoading);
    const stories = useSelector(state => state.news.stories);

    let cards = [...stories].sort((a, b) => {
        if (a.time < b.time) {
            return 1;
        }
        if (a.time > b.time) {
            return -1;
        }
        return 0;
    }).slice(0, 100);


    return (
        <React.Fragment>
            {storiesAreLoading && <Loading />}
            {cards && (
                <>
                    <ul className={styles.cardList}>
                        {cards.map((story) => (
                            <NewsCard key={story.id} {...story} />
                        ))}
                    </ul>
                </>
            )}
        </React.Fragment>
    );
};

export default NewsList;
