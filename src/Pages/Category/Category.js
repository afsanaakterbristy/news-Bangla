import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsCard from '../../Shared/NewsCard/NewsCard';

const Category = () => {
    const categoryNews = useLoaderData();
    console.log(categoryNews)
    return (
        <div>
            <h2>Category News:{categoryNews.length}</h2>
            {
                categoryNews.map(news=><NewsCard key={news._id} news={news}></NewsCard>)
            }
        </div>
    );
};

export default Category;