import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component'


const News = (props) => {
    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(true)
    const [page, setPage] = useState(true)
    const [totalArticles, setTotalArticles] = useState(0);
    document.title = `Daily News | ${props.category} headlines`

    useEffect(() => {
        updateNews(props);
    }, [])

    const updateNews = async () => { 
        props.setProgress(15);
        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=745300860fb74a0b8bd5c04ceaa47599&pagesize=${props.pageSize}&page=${page}`;
        console.log(url);
        let raw = await fetch(url);
        props.setProgress(30);
        let data = await raw.json().then((data) => {
            props.setProgress(70);
            setArticles(data.articles)
            setTotalArticles(data.totalResults)
            setLoading(false)
        })
        props.setProgress(100);
    }

    const fetch_more_data = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=745300860fb74a0b8bd5c04ceaa47599&pagesize=${props.pageSize}&page=${page + 1}`;
        let raw = await fetch(url);
        let data = await raw.json().then((data) => {
            setPage(page + 1)
            setArticles(articles.concat(data.articles))
            setTotalArticles(data.totalResults)
            setLoading(false)
        })
    }

    return (
        <>
            <h2 className="text-center" style={{marginTop: '90px'}}>Daily News - {props.category.charAt(0).toUpperCase()+props.category.slice(1)} headlines.</h2>
            {loading && <Spinner />}
            <InfiniteScroll
                dataLength={articles.length}
                next={fetch_more_data}
                hasMore={articles.length !== totalArticles}
                loader={<Spinner />}
            >
                <div className="container my-3">
                    <div className="row">
                        {articles.map((elem) => {
                            return <div className="col-md-4" key={elem.url}>
                                <NewsItem title={elem.title} desc={elem.description} imgurl={elem.urlToImage} author={elem.author} date={elem.publishedAt} source={elem.source.name} newsurl={elem.url} />
                            </div>
                        })}
                    </div>
                </div>
            </InfiniteScroll>
        </>

    )
}

News.defaultProps = {
    country: 'in',
    pageSize: 6,
    category: 'general',
}
News.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
}
export default News
