import { motion } from 'framer-motion'
import { FaStar } from 'react-icons/fa'
import { someProductChildVarient } from '../../animations/varients'
import { someProductProps } from '../../types/types'

const Products = ({ productItems }: someProductProps) => {

    return (
        <>
            {productItems.map((productItem) => {
                const { id, src, Name, price, type } = productItem
                let URL = src
                return <motion.article variants={someProductChildVarient} key={id} id={type}>
                    <img src={`http://${URL}`} alt={Name} />
                    <div>
                        <h3>{Name}</h3>
                        <p>RS.<span>{price}</span></p>
                        <div style={{ padding: 0 }}>
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                        </div>
                    </div>
                </motion.article>
            })}
        </>
    )
}

export default Products