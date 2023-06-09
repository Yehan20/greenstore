import { Link } from 'react-router-dom'
import MegaMenuStyled, { MenuBigChildStyled, MenuChildStyled1, MenuChildStyled2, MenuChildStyled3, MenuChildStyled4 } from '../styled/megaMenuStyled'

const MegaMenu = () => {
    return (
        <MegaMenuStyled>
            <MenuChildStyled1>
                <p>Straight from the Garden</p>
                <h3>Fresh Fruits</h3>
            </MenuChildStyled1>

            <MenuChildStyled2>
                <p>No Chemicals</p>
                <h3>Fresh Taste</h3>
            </MenuChildStyled2>

            <MenuBigChildStyled>
                <h1>Organic <span>Vegetables and Fruits</span></h1>
                <p>Sale up to 40% off </p>
                <p>Best price</p>
                <Link to='/all' title='Click to visit'>Show now</Link>
            </MenuBigChildStyled>

            <MenuChildStyled3>
                <p>Savor the Flavor of Nature's Bounty</p>
                <h3>Handpicked Vegetables</h3>
            </MenuChildStyled3>

            <MenuChildStyled4>
                <p>Best Price</p>
                <h3>Organic Vegetables</h3>
            </MenuChildStyled4>
        </MegaMenuStyled>

    )
}

export default MegaMenu