import React from 'react'

const Header = (props) => {
    const {Title}=props.data
  return (
      <>
      <h1>{Title}</h1>
    </>
  )
}

export default Header