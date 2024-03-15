import React, { useState } from 'react'
import IconButton from '@mui/material/IconButton';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import Badge from '@mui/material/Badge';


export default function Counter() {
    let [like,setLike]=useState(0);
    let [disLike,setDisLike]=useState(0);

    const incrementLike = ()=>setLike(like+1);
    const incrementDisLike = ()=>setDisLike(disLike+1); 
  return (
    <div>
      <IconButton aria-label="like" onClick={incrementLike}>
        <Badge badgeContent={like} color="success">
            <ThumbUpIcon color="#a31545"/>
        </Badge>
      </IconButton>
      <IconButton aria-label="dislike" onClick={incrementDisLike}>
        <Badge badgeContent={disLike} color="error">
            <ThumbDownIcon color="tertiary"/>
        </Badge>
      </IconButton>
    </div>
  )
}
