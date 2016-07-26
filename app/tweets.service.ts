import {Component} from 'angular2/core'

export class TweetService{
    getTweets()  {
    return  [  
        {
        author: "blubb"
        twitterhandle: "@blah",
        tweet: "testtext"
        totalLikes: 5,
        iLike: true ,
        }
       
        
    ]};
}