import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../../hooks/hooks'
import { fetchItem } from '../../../reducers/cartSlice'

const Item = () => {
const {id}= useParams()
console.log(id);
const dispatch = useAppDispatch()
const {singleItem,singleItemState}= useAppSelector((state)=>state.Cart)
    useEffect(()=>{
        dispatch(fetchItem(id as string))
    },[])
  return (
    <div>Item {singleItem?.Name}</div>
  )
}

export default Item