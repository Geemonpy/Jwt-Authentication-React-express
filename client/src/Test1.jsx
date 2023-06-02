import React from 'react'

const Test1 = () => {
  const phones =[
    {id:1,name:"neethu"},
    {id:2,price:"555"},
    {id:3,name:"geemon"}
  ];

const listItems = phones.map(phone=>
    <li key={phone.id} >{phone.name}
   
    
    </li>
    
)


  return (
    <div>

<ul>{listItems}</ul>
    </div>
  )
}

export default Test1