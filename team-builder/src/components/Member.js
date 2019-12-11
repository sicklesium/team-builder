import React, { useState } from 'react';

function Member(props){
  // console.log(props.member)

  const [object, setObject] = useState(props.member)

  return(
      <div key={props.id} className='memberbox'>
          <h1>{object.name}</h1>
          <h2>{object.email}</h2>
          <h3>{object.role}</h3>

      </div>
  )
}

export default Member;
