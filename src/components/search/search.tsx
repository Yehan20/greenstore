import React, { useEffect, useState } from 'react'
import { SearchStyled } from '../../styled/allitems.style'
import { AiOutlineSearch } from 'react-icons/ai';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { searchItem } from '../../reducers/cartSlice';

const Serach = () => {
  const [search,setSearch] = useState('');
  
  const dispatch = useAppDispatch();
  
  // each time user types run this
  useEffect(()=>{
     
     dispatch(searchItem(search));
  },[search])

  return (
    <SearchStyled>
        <input type="text" placeholder='search' value={search} onChange={(e)=>setSearch(e.target.value)} />
        <button><AiOutlineSearch fontSize={"18px"}/></button>
    </SearchStyled>
  )
}

export default Serach

