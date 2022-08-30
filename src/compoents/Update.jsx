import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { updateName } from '../features/name/nameSlice';

function Update() {
  const store = useSelector((state) => state.name)
  const dispatch = useDispatch();
  return (
    <div style={{ padding: '40px', border: '2px solid black' }}>

    <div>update component - 
    &nbsp;<input type="text" value={store.name.toUpperCase()} onChange={(e) => dispatch(updateName(e.target.value.toUpperCase()))} />
      {store.name ? <span>({store.name})</span> : null}
      </div>
    </div>
  )
}

export default Update