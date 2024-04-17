import { useEffect } from "react";
import { useState } from "react";

import NewsItem from "./NewsItem"


const NewsBoard = ({category}) => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {

    let url=`https://gnews.io/api/v4/top-headlines?category=${category}&lang=en&country=in&apikey=78c78b490fadff4c4c7528490ac0ce9c`;
    fetch(url)
    .then(response => response.json())
    .then(data => { 
      setArticles(data.articles)
    });

    console.log(articles)
  }, [category]);

  return (
    <div>
      <h2 className="text-center">Top <span className="badge bg-danger"> Headlines </span>
      </h2>
      {articles.length > 0 ? (
        articles.map((news, index) => {
          return (
            <NewsItem key={index} title={news.title} description={news.description} src={news.image} url={news.url} />
          );
        })
      ) : (
        <p>Loading articles...</p>
      )}
    </div>
  );
};

export default NewsBoard;