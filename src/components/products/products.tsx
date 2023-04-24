import { motion } from 'framer-motion'
import { FaStar } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { someProductChildVarient } from '../../animations/varients'
import { someProductProps } from '../../types/types'

const Products = ({ productItems }: someProductProps) => {
  //
    return (
        <>
            {productItems.map((productItem) => {
                const { id, src, Name, price, type ,ext} = productItem
                let URL = src
                return <Link to={`/item/${ext}`}>
                                 <motion.article key={id} id={type}>
                    <img src={`http://${URL}`} alt={Name} />
                    <div>
                        <h3>{Name}</h3>
                        <p>RS.<span>{price}</span></p>
                        <div style={{ padding: 0 }}>
                            <FaStar color='rgb(117, 162, 57)' />
                            <FaStar color='rgb(117, 162, 57)' />
                            <FaStar color='rgb(117, 162, 57)' />
                            <FaStar color='rgb(117, 162, 57)'/>
                            <FaStar  color='rgb(117, 162, 57)'/>
                        </div>
                    </div>
                </motion.article>
                </Link>
  
            })}
        </>
    )
}

export default Products