import React from 'react'
import { useSelector } from 'react-redux';

function Header() {
    const store = useSelector((state) => state.name)
  return (
    <div style={{ padding: '40px', border: '2px solid blue' }}>

      <div>Header component - {store.name}</div>
    </div>
  )
}

export default Header