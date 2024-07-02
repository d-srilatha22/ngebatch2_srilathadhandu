import React from 'react'
import UserInfo from './UserInfo'


interface Author{
  name:string,
  avatarUrl:string
}

interface CommentsProp{
  date:String,
  text:string,
  author:Author
}

export default function Comment(props:CommentsProp) {
  return (
    <div className="comment">
      <div className="comment-date">{props.date}</div>
      <div className="comment-text">{props.text}</div>
      <UserInfo author={props.author} />
    </div>
  );
}
