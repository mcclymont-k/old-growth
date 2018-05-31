import React, { Component } from 'react'
import '../CSS/News.css'
import fire from '../firebase'
import firebase from 'firebase'

const bat = require('../Images/bat.jpg')
const owl = require('../Images/owl.jpeg')
const database = fire.database()

class News extends Component {

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
        {
          this.props.articles.length > 1
          ? this.props.articles.map( article =>
            <div className='articleContainer' onClick={e => window.location = article.url}>
              <img className='articleImage' src={article.image}></img>
              <h1>{article.name}</h1>
              <h2>{article.blurb}</h2>
            </div>
            )
          : []
        }
      </div>
    )
  }
}

export default News
