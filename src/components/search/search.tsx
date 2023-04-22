import React, { useEffect, useState } from 'react'
import { SearchStyled } from '../../styled/allitems.style'
import { AiOutlineSearch } from 'react-icons/ai';
import { getItemsType } from '../../custom';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { searchItem } from '../../reducers/cartSlice';
import { motion } from 'framer-motion';
import { pageVariantAll } from '../../animations/varients';

const Serach = () => {
  const [search,setSearch] = useState('');
  const SearchMotion = motion(SearchStyled); 
  const dispatch = useAppDispatch();
  
  // each time user types run this
  useEffect(()=>{
     dispatch(searchItem(search));
  },[search])

  return (
    <SearchMotion>
        <input type="text" placeholder='search' onChange={(e)=>setSearch(e.target.value)} />
        <button><AiOutlineSearch fontSize={"18px"}/></button>
    </SearchMotion>
  )
}

export default Serach

