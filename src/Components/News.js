import React, { Component } from 'react'
import '../CSS/News.css'
import fire from '../firebase'
import firebase from 'firebase'

const bat = require('../Images/bat.jpg')
const database = fire.database()

class News extends Component {

  state = {

  }

  componentDidMount() {
    console.log(this.props.articles)
    let articlesRef = database.ref('articles')
    articlesRef.on('value', data => {
      let articles=data.val()
      this.props.updateArticles(articles)
    })
  }
  render() {
    return(
      <div className='articlesContainer'>
        {this.props.articles.length > 1
          ? this.props.articles.map( article =>
            <div className='articleContainer'>
              <div>
                <h1>{article.name}</h1>
                <h2>{article.blurb}</h2>
              </div>
              <img className='articleImage' src={eval(article.image)}></img>
            </div>
            )
          : []
        }
      </div>
    )
  }
}

export default News
