import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { newsActions } from '../store/slices/newsSlice';
import Header from '../components/Header';

const HomePage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(newsActions.deleteArticle());
  }, [dispatch]);

  return (
    <>
      <Header />
    </>
  )
}

export default HomePage