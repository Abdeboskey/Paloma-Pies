import React from 'react'

const Menu = (props) => {
  const { menuData } = props

  const makePies = () => {
    return menuData.map(pie => {
      const {
        name,
        ingredients,
      } = pie

      return (
        <Pie 
          name={name}
          filling={ingredients.filling}
          crust={ingredients.crust}
        />
      )
    })
  }
  
  return (
    <section>
      {makePies}
    </section>
  )
}

export default Menu