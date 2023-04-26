import React, { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useAppSelector } from '../../hooks/hooks';

const Toast = () => {
    const {toggleHide,toastMessage} = useAppSelector((state)=>state.Cart)
    const [isMount,setIsMount] = useState(false)
    
    // takes from the store and customises the messages
    useEffect(()=>{
        if(isMount){
            toast(toastMessage.message, {
            position: "top-center",
            type:toastMessage.color,
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
            progress: undefined,
            theme: "light",
         });
         return ()=> toast.dismiss()
        }
        setIsMount(true)
    },[toggleHide])
  
  return (
    <ToastContainer className={'toast'} style={{color:'#111',maxWidth:'700px',width:`${toastMessage.color==='info'|| toastMessage.color==='default'?'100%':''}`}}  />
  )
}

export default Toast