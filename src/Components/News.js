import React, { Component } from 'react'
import '../CSS/News.css'
const bat = require('../Images/bat.jpg')

class News extends Component {

  state = {
    articles: [
      {
        name: 'article 1',
        blurb: 'stuff about the article',
        image: bat
      },
      {
        name: 'article 2',
        blurb: 'stuff about the article',
        image: bat
      },
      {
        name: 'article 3',
        blurb: 'stuff about the article',
        image: bat
      },
      {
        name: 'article 4',
        blurb: 'stuff about the article',
        image: bat
      },
      {
        name: 'article 5',
        blurb: 'stuff about the article',
        image: bat
      },
      {
        name: 'article 6',
        blurb: 'stuff about the article',
        image: bat
      }
    ]
  }
  render() {
    return(
      <div className='articlesContainer'>
        {this.state.articles.map( article =>
          <div className='articleContainer'>
            <div>
              <h1>{article.name}</h1>
              <h2>{article.blurb}</h2>
            </div>
            <img className='articleImage' src={article.image}></img>
          </div>
        )}
      </div>
    )
  }
}

export default News
