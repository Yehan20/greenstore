
import { FaRegStar } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { someProductProps } from '../../types/types'

const Products = ({ productItems }: someProductProps) => {

    return (
        <>
            {productItems.map((productItem) => {
                const { id, src, Name, price, type, ext } = productItem
                return <Link title='View More' to={`/item/${ext}`} key={id} className={type}>
                    <article >
                        <img src={`https://${src}`} alt={Name} />
                        <div className='stats'>
                            <h3>{Name}</h3>
                            <p>RS.<span>{price}</span></p>
                            <div style={{ padding: 0 }}>
                                <FaRegStar color='rgb(117, 162, 57)' />
                                <FaRegStar color='rgb(117, 162, 57)' />
                                <FaRegStar color='rgb(117, 162, 57)' />
                                <FaRegStar color='rgb(117, 162, 57)' />
                                <FaRegStar color='rgb(117, 162, 57)' />
                            </div>
                        </div>
                    </article>
                </Link>

            })}
        </>
    )
}

export default Products