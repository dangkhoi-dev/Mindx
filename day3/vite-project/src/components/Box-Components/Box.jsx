import React from 'react'
import './Box.css'

const Box = (props) => {
  return (
    <div className="border">
        <div className="name">Tôi tên: {props.name}</div>
        <div className="class">Học lớp: {props.study}</div>
        <div className="comment">{props.comment}</div>
    </div>
  )
}

export default Box;