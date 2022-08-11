import React from 'react'
import './Home.css'

const models = [
  {id: 1, name: "Toyota MR2", parts:[
      {id:1,name: "Vent" , desc: "BlahBlah" , price: 130},
      {id:2,name: "Bent" , desc: "BlahBlah" , price: 110},
      {id:1,name: "zent" , desc: "BlahBlah" , price: 100},
  ]},
  {id: 2, name: "Mazda Rx8", parts:[
      {id:1,name: "Vent" , desc: "BlahBlah" , price: 130},
      {id:2,name: "Bent" , desc: "BlahBlah" , price: 110},
      {id:1,name: "zent" , desc: "BlahBlah" , price: 100},
  ]},
  {id: 3, name: "Toyota Celica", parts:[
      {id:1,name: "Vent" , desc: "BlahBlah" , price: 130},
      {id:2,name: "Bent" , desc: "BlahBlah" , price: 110},
      {id:1,name: "zent" , desc: "BlahBlah" , price: 100},
  ]},
  {id: 3, name: "Mazda MX-5", parts:[
      {id:1,name: "Vent" , desc: "BlahBlah" , price: 130},
      {id:2,name: "Bent" , desc: "BlahBlah" , price: 110},
      {id:1,name: "zent" , desc: "BlahBlah" , price: 100},
  ]},

]

const SideMenu = () => {
  return (
    <div className='menu-container'>
      {models.map((model) =>
      <div>
          <p>{model.name}</p>
      </div>)}
    </div>
  )
}

export default SideMenu