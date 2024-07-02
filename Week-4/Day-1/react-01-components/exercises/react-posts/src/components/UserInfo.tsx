import React from 'react'

interface Author {
  name: string;
  avatarUrl: string;
}
interface AuthorInfoProps{
  author:{
      name: string;
      avatarUrl: string;
  }
}


export default function UserInfo(props:AuthorInfoProps) {
  return (
    <div className='user'>
      <div className="user-name">{props.author.name}</div>
      <img
        className="user-image"
        src={props.author.avatarUrl}
        alt={`${props.author.name} avatar`}
      />
    </div>
  );
}
