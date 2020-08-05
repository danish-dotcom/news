import React from 'react'
import news from '../api/news'
import SearchBar from './SearchBar'
import Articles from './Articles'

console.log(process.env.REACT_APP_API_KEY)

class App extends React.Component {
    state = {
        news: [],
        term: ''
    }

    getNews = async (term) => {
        const response = await news.get('/everything', {
            params: { q: term }
        })
        this.setState({ news: response.data.articles})
    }

    updateQuery = (term) => {
        this.setState({ term: term })
        this.getNews(term)
    }

    render() {
        return (
            <div>
                <SearchBar updateQuery={this.updateQuery} />
                <h2 className="text-center text-gray-700 mb-10">{this.state.term ? `Search Results for "${this.state.term}"` : ''}</h2>
                <div className="border-b-2 mx-12 mb-6 lg:mx-20"></div>
                <Articles articles={this.state.news} />   
                {/*  */}
            </div>

        )
    }
}


export default App