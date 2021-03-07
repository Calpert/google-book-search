import React, { Children } from 'react';


function Card({icon,title,children}){
<div class="card">
    <strong>{title}</strong>
  <div class="card-body">
    {children}
  </div>
</div>
}

export default Card;

