import React from 'react'

const Articles = ({ articles }) => {
    const newsArticles = (
        articles.map((article, index) => {
            return (
                <div className="my-2 mx-4 p-3 lg:m-10 lg:w-1/3" key={index}>
                    <div className="lg:flex bg-white rounded-lg lg:mx-5 border">
                        <div className="rounded-t lg:rounded-t-none lg:rounded-l bg-cover h-48 lg:w-1/3 lg:h-auto lg:flex-none" style={{ backgroundImage: `url(${article.urlToImage})` }}>
                        </div>
                        <div className="m-2">
                            <h5 className="text-gray-900 font-bold text-xl mb-2">{article.title}</h5>
                            <p className="text-base text-gray-700 my-1 py-1">{article.description}</p>
                            <div className="flex">
                                <h6 className="flex-auto text-gray-900 text-sm">{article.author}</h6>
                                <a
                                    className="text-sm flex"
                                    href={article.url}
                                    target="_blank"
                                >
                                    Article Link        
                                <svg className="ml-1 h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <svg fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clipRule="evenodd"></path></svg>
                                </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            )
        })
    )

    return (
        <div className="lg:flex lg:flex-wrap lg:justify-center">
            {newsArticles}
        </div>
    )
}

export default Articles