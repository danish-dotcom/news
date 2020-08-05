import React, { Component } from 'react'
// import 'bootstrap/dist/css/bootstrap.min.css'

class SearchBar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            term: ''
        }
    }

    onSubmit = (e) => {
        e.preventDefault()
        this.props.updateQuery(this.state.term)
        this.setState({ term: '' })
    }

    render() {
        return (
            <div className="m-2 p-2 text-center lg:m-5 lg:text-left">

                <h1 className="lg:p-3 lg:mx-10 my-6 text-5xl font-medium text-blue-400">
                    <span className="border-b-2 border-blue-200 pb-1">
                        Morning News
                    </span>
                </h1>
                <p className="lead text-center mx-5  text-gray-700">
                    Your news from around the world
                </p>

                <div className="bg-white rounded-lg border-2 border-gray-300 p-3 mx-2 lg:mx-10 my-6">
                    {/* <p >
                        Your news here
                    </p> */}
                    <form className="lg:p-1 lg:m-1 font-sans text-base text-gray-600" onSubmit={this.onSubmit}>
                        <div className="flex">
                            <input
                                type="text"
                                className="flex-auto appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded-md py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                placeholder="Search Query"
                                value={this.state.term}
                                onChange={e => this.setState({ term: e.target.value })}
                            />
                            <div className="">
                                <button
                                    className="bg-blue-300 text-white border font-semibold border-gray-200 rounded-md ml-6 py-3 px-4 leading-tight hover:text-blue-500 hover:bg-white focus:outline-none"
                                    type="button"
                                    onClick={this.onSubmit}
                                >
                                    Search
                                </button>
                            </div>
                        </div>
                    </form>
                            
                </div>

            </div>
        )
    }
}

export default SearchBar