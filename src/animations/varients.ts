export const CartOverLayVarient = {
    hidden: {
        x: '100vw',
        opacity: 0
    },
    visible: {
        transition: {
            type: 'tween',
            when: 'beforeChildren',
            staggerChildren: 0.5
        },
        x: 0,
        opacity: 1
    },
    leave: {
        x: '100vw',
        transition: {
            type: 'tween',
            delay: 0.5
        }
    }
}

export const CartVarient = {
    hidden: {
        x: '100vw'
    },
    visible: {
        x: 0,
        transition: {
            type: 'tween',
            when: 'beforeChildren',
            ease: 'linear',
            duration: 0.5
        }
    },
    leave: {
        x: '100vw',
        opacity: 0,
        transition: {
            type: 'tween',
            duration: 1
        }

    }
}

export const someProductVarient = {
    hidden: {
        opacity: 0
    },
    visible: {
        opacity: 1,
        transition: {
            type: 'tween',
            duration: 0.5,
            ease: 'easeIn',
            when: "beforeChildren",
            staggerChildren: 0.4
        }
    },
    exit:{
        opacity:0,
    }
}
export const someProductChildVarient = {
    hidden: {
        opacity: 0
    },
    visible: {
        opacity: 1,
        transition: {
            type: 'tween',
            duration: 0.5,
            ease: 'easeIn'
        }
    
    },
    exit:{
        opacity:0
    }
}

export const customVarient = {
    hidden: {
        opacity: 0

    },
    visible: {
        opacity: 1,
        
        transition: {
         
            duration: 0.5,
            type: 'tween',
            ease: 'easeIn',
            when: 'beforeChildren',
       
        }

    },
    exit:{
        opacity:0,
        transition: {
         
            duration: 0.1,
            
       
        }
    }
}

export const pageVariant = {
  hidden:{
    opacity:0,
    
  } ,
  visible:{

    opacity:1,
    transition:{
      ease:'easeIn',
      delay:0.5,
      duration:0.5,
      type:'tween',
      when:'beforeChildren',
    }
  },
  exit:{
    x:'-100vw',
    transition:{
      ease:'easeOut',
      type:"tween",
      duration:0.5,
   }

 }
}


export const pageVariantAll={

    hidden:{
       x:'100vw',
       opacity:0
    },
    visible:{
      opacity:1 ,
      x:0,
      transition:{
        delay:0.3,
        duration:0.5,
        ease:'easeOut',
        type:'tween',
        when: 'beforeChildren',
        staggerChildren:1,
    }
    },
    exit:{
     x:'-100vw',
     transition:{
        
       ease:'easeIn',
       duration:0.5,
    }
 
  }
 }

 export const pageVariantVeg={

    hidden:{
       x:'100vw',
       opacity:0
    },
    visible:{
      opacity:1 ,
      x:0,
      transition:{
        duration:0.5,

       type:'spring',stiffness:100}
    },
    exit:{
     x:'-100vw',
     transition:{
       ease:'easeIn'
       
    }
 
  }
 }
