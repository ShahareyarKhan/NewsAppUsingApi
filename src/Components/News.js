import React, { useEffect, useState } from 'react';
import Newsitem from './Newsitem';
import Spinner from './Spinner';
import InfiniteScroll from 'react-infinite-scroll-component';
export default function News(props) {
  const [articles, setArticles] = useState([]);
  const [filteredArticles, setFilteredArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');

  const updateNews = async () => {
    props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${page}&pageSize=${props.pageSize}`;
    setLoading(true);
    let data = await fetch(url);
    props.setProgress(30);
    let parsedData = await data.json();
    props.setProgress(70);
    setArticles(parsedData.articles);
    setFilteredArticles(parsedData.articles);
    setTotalResults(parsedData.totalResults);
    setLoading(false);
    props.setProgress(100);
  };

  useEffect(() => {
    updateNews();
  }, []);
  const fetchMoreData = async () => {
    setPage(page + 1);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${page}&pageSize=${props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    setArticles(articles.concat(parsedData.articles));
    setFilteredArticles(articles.concat(parsedData.articles));
    setTotalResults(parsedData.totalResults);
  };

  const handleSearch = (e) => {
    const searchQuery = e.target.value;
    setSearchQuery(searchQuery);
  
    const filteredArticles = articles.filter((article) =>
      article.title.toUpperCase().includes(searchQuery.toUpperCase())
    );
    setFilteredArticles(filteredArticles);
  };

  return (
    <div>
      <h1 className='text-3xl text-center font-bold'>
        Top <span className={`${props.mode === 'white' ? 'text-red-600' : 'text-green-500'}`}>Headlines</span>
      </h1>
      <div className='w-1/2 mx-auto mt-4 d-flex justify-center items-center'>
      <input
  type='search'
  placeholder='Search News'
  className='w-3/4 p-1 rounded-md text-red-900'
  style={{ border: `2px solid ${props.mode === 'white' ? 'black' : 'green'}` }}
  id='search'
  onChange={handleSearch} 
/>
        
      </div>
      {loading && <Spinner mode={props.mode} />}
      {filteredArticles.length === 0 && !loading && <p className='text-center my-8 font-semibold text-2xl' >No items found.</p>}
      <InfiniteScroll
        dataLength={filteredArticles ? filteredArticles.length : 0}
        next={fetchMoreData}
        hasMore={filteredArticles ? filteredArticles.length !== totalResults : false}
        loader={<Spinner />}
      >
        <div className='mx-auto px-4 py-6 sm:px-6 sm:py-7 lg:px-8'>
          <div className='grid grid-cols-1 gap-x-2 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8 '>
            {filteredArticles &&
              filteredArticles.map((element, index) => (
                <div key={index}>
                  <Newsitem
                    title={element ? element.title.slice(0, 140) : ' '}
                    description={element.description ? element.description.slice(0, 100) : ' '}
                    imageurl={element.urlToImage}
                    newsUrl={element.url}
                    date={element.publishedAt}
                    source={element.source.name}
                    mode={props.mode}
                    id={element.id}
                  />
                </div>
              ))}
          </div>
        </div>
      </InfiniteScroll>
    </div>
  );
}