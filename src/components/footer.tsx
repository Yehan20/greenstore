import React from 'react'
import { Link } from 'react-router-dom'
import FooterStyled, { FooterAboutStyled, FooterInformationStyled, FooterInstragramStyled, FooterOneStyled, FooterTwoStyled, MiniGallleryStyled } from '../styled/footer.styled'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import logo from '../resources/images/logo.png'
import miniGalleryImg1 from '../resources/images/instagram/1.jpg'
import miniGalleryImg2 from '../resources/images/instagram/2.jpg'
import miniGalleryImg3 from '../resources/images/instagram/3.jpg'
import miniGalleryImg4 from '../resources/images/instagram/4.jpg'
import miniGalleryImg5 from '../resources/images/instagram/5.jpg'
import miniGalleryImg6 from '../resources/images/instagram/6.jpg'
import miniGalleryImg7 from '../resources/images/instagram/7.jpg'
import miniGalleryImg8 from '../resources/images/instagram/8.jpg'
import miniGalleryImg9 from '../resources/images/instagram/9.jpg'

const galleryImgs: string[] =

  [miniGalleryImg1,
    miniGalleryImg2,
    miniGalleryImg3,
    miniGalleryImg4,
    miniGalleryImg5,
    miniGalleryImg6,
    miniGalleryImg7,
    miniGalleryImg8,
    miniGalleryImg9
  ]

const Footer = () => {

  const gallery = galleryImgs.map((galleryImg, index) => {
    return <Link key={index} to='https://www.instagram.com/' target='_blank'>
      <img src={galleryImg} alt='instagram'></img>
    </Link>
  })
  return (
    <FooterStyled>
      <FooterOneStyled>

        <FooterAboutStyled>
            <img src={logo} alt="Logo" />
            <p>
              Fresh from the farm to your table! Our vibrant vegetable and fruit shop offers the best produce for a healthy lifestyle. Come taste the goodness
            </p>
            <div>
              <Link to="https://www.facebook.com/" target="_blank" title='Click to visit'>
                <FaFacebook color='black' size={"25px"} />
              </Link>
              <Link to="https://www.facebook.com/" target="_blank" title='Click to visit'>
                <FaInstagram color='black' size={"25px"} />
              </Link>
              <Link to="https://www.facebook.com/" target="_blank" title='Click to visit'>
                <FaTwitter  color='black' size={"25px"}/>
              </Link>
            </div>
        </FooterAboutStyled>

        <FooterInformationStyled>
            <h3>Information</h3>
            <ul>
              <li>
                <Link to='https://google.com/'>About Us</Link>
              </li>
              <li>
                <Link to='https://google.com/'>Testimonials</Link>
              </li>
              <li>
                <Link to='https://google.com/'>Privacy Policy</Link>
              </li>
              <li>
                <Link to='https://google.com/'>Jobs</Link>
              </li>
            </ul>
        </FooterInformationStyled>

        <FooterInstragramStyled>
            <h3>Instagram</h3>
            <MiniGallleryStyled>
              {gallery}
            </MiniGallleryStyled>
        </FooterInstragramStyled>
        
      </FooterOneStyled>
        <FooterTwoStyled>
          <p>GreenStore © {new Date().getFullYear()} All rights Reserved. Designed and Developed by Yehan Nilanga</p>
        </FooterTwoStyled>

    </FooterStyled>
  )
}

export default Footer