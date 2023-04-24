import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Loader from '../../../components/loader/loader'
import { useAppDispatch, useAppSelector } from '../../../hooks/hooks'
import { addCart, calculateTotal, fetchItem } from '../../../reducers/cartSlice'
import { SingleProductStyled } from '../../../styled/allitems.style'
import {AiOutlinePlus,AiOutlineMinus} from 'react-icons/ai';
import {HiShoppingBag} from 'react-icons/hi'
import { AnimatePresence, motion } from 'framer-motion'
import { pageVariantAll, pageVariantVeg } from '../../../animations/varients'
import Product from '../../../components/products/product'


enum LoadingStatus  {
  loading="pending",
  success="fetched",
  error="rejected",
}

const Item = () => {

   const SingleProductMotion = motion(SingleProductStyled)

    return (  
    
         <SingleProductMotion initial='hidden' animate='visible'  exit='exit' variants={pageVariantAll}>
         <Product/>
        </SingleProductMotion>
           
    )
}

export default Item

