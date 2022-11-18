import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import {onoff} from "./ToggleSlice"

function Togglerview() {
    const dispatch = useDispatch()
    const name = useSelector(state=>state.togs.active)
  return (
    <div>
      
      <button onClick={()=>dispatch(onoff())}>{name?'on':'off'}</button>
    </div>
  )
}
export default Togglerview