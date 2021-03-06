import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Slideshow from './Slideshow';
import Charts from './Charts'

export class Home extends Component {
    state = {
        articles: []
    }

    componentDidMount(){
        axios.get("https://raw.githubusercontent.com/MonolithOfficial/darkwirejsons/master/articles.json")
        .then(res => {
            this.setState({
                articles: res.data
            })
            console.log(this.state.articles)
        })
        
    }
    render() {
        let { articles } = this.state;
        let articleList = articles.length ? (
            articles.map(article => {
                return (
                    
                    <div className="articleDiv" key={article.number}>
                        <img src={"https://raw.githubusercontent.com/MonolithOfficial/darkwirejsons/master/images/" + article.photo} alt=""/>
                        <div>
                            <Link to={"/" + article.content.split('.')[0]}><p className="articleTitle">{article.title}</p></Link>
                            <p className="articleDescription">{article.desc}</p>
                            <p className="articleCategory">{article.category}</p>
                        </div>
                    </div>
                )
            })
        ) : (
            <h1>There are no articles at the moment</h1>
        )
        return (
            <div>
                <div id="topContainer">
                    <div className="slideshow-container">
                        <Slideshow />
                    </div>
                    <div id="commercialTop"><p>adspcace</p></div>
                </div>
                <div id="pageWrapperHome">
                    <div className="wrapper">
                        {articleList}
                        
                    </div>
                    <Charts />
                    
                </div>
            </div>
            
        )
    }
}

export default Home;
