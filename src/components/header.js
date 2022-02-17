import React, { useState, useEffect } from "react";
import PropTypes from "prop-types"
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import SiteLogoSvg from "../assets/images/logos/logo.svg";
import SiteLogoWhite from "../assets/images/logos/logo-white.svg";


import styled from "styled-components";
const SiteLogo = ({page, isStickyState})=>{
  if(!isStickyState && page === 'home')
  {
    return(
      <>
      <img src={SiteLogoWhite} className="desktop-logo" alt="" />
      <img src={SiteLogoSvg} className="mobile-logo" alt="" />
      {/* <GatsbyImage image={getImage(LogoWhite)} className="desktop-logo" />
      <GatsbyImage image={getImage(SiteLogo)} className="mobile-logo"  /> */}
      </>      
    ) 
  }
  else
  {
    return(
      <img src={SiteLogoSvg} />
    ) 
  }
}
const Header = ({page}) => {
  console.log('Page', page)
  const [open, setOpen] = useState(false)
  const [isStickyState, setStickyState] = useState(false);
  useEffect(() => {
  window.addEventListener('scroll', isSticky);
  return () => {
  window.removeEventListener('scroll', isSticky);
  };
  });
  const isSticky = (e) => {
  const header = document.querySelector('.header');
  const headerContainer = document.querySelector('.headercontainer');
  const scrollTop = window.scrollY;
  if(scrollTop >= 100){
    header.classList.add('is-sticky');
    header.classList.remove('not-sticky');
    if(page==='home')
    {
      setStickyState(true)
    }
    else
    {
      setStickyState(false) 
      headerContainer.classList.add('is-sticky-home');
    }    
  }
  else
  {
    header.classList.add('not-sticky');
    header.classList.remove('is-sticky');
    setStickyState(false)
  }
  };
  useEffect(
    () => {
      
    },
    [isStickyState],
  )
  return (
  <Wrapper className="header" page={page} isStickyState={isStickyState}>
     <Container className="headercontainer">
        <LogoAndLinks>
           <Logo> 
           <Link to="/">     
             <SiteLogo page={page} isStickyState={isStickyState}/> 
             </Link>
           </Logo>
          
           <Nav>
              <StyledBurger open={open} onClick={() =>
                 setOpen(!open)}>
                 <div />
                 <div />
                 <div />
              </StyledBurger>
              <Ul open={open} isStickyState={isStickyState} page={page}>
                 <li>
                 {page==='home' ? <AnchorLink href='#howitworks'>How it Works</AnchorLink> : <Link to='/#howitworks'>How it Works</Link>}
                 </li>
                 <li>
                 {page==='home' ? <AnchorLink href='#benefits'>Benefits</AnchorLink> : <Link to='/#benefits'>Benefits</Link>}
                 </li>
                 <li>
                    {page==='home' ? <AnchorLink href='#whatsincluded'>What’s Included</AnchorLink> : <Link to='/#whatsincluded'>What’s Included</Link>}
                 </li>
                 <li>
                    <Link to="/">
                    Login</Link>
                 </li>
              </Ul>
           </Nav>
        </LogoAndLinks>
     </Container>
  </Wrapper>
  );
  };
  export default Header; 

const Wrapper = styled.div`
width: 100%;
position:fixed;
z-index:999;
padding:15px 0;
@media (max-width: 800px) {
  padding:20px 0;
}
// @media (max-width: 800px) {
//   position:inherit;
//   display:inline-block;
//   padding:25px 0;  
//   min-height:70px;
// }
${({ isStickyState, page }) => !isStickyState && page==='home' ? `
    a{
      color:#ffffff !important;
    }
    li:last-child a{
      border:1px solid #fff !important;
    }
` : `
box-shadow: 0 2px 24px 0 rgb(0 0 0 / 15%);
  a{
    color: #6C7884 !important;
  }
  
`};

a {
  text-decoration: none;    
  position: relative;
  padding: 0 20px;
  font-size:14px;
  font-weight:600;
  letter-spacing: -0.07875px;
  @media (min-width: 801px) and  (max-width:815px)  {
    padding:0 17px;
  }
  &:hover{
    color:#236DDE !important;
  }
  @media (max-width: 800px) {
    font-size:16px;
    line-height:22px;
    font-weight:400;
    letter-spacing: -0.09px;
    color: #6C7884 !important;
    margin-bottom:22px;
    display: inline-block;
    padding:0;
  }
}
`;
const Container = styled.div`
// content-visibility: auto;
// contain-intrinsic-size: 500px;
  max-width: 1230px;
  margin: 0 auto;
  padding: 0px 15px;
`;
const LogoAndLinks = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
`;
const Logo = styled.div`
  display: grid;
  place-items: center;
  a{
    margin-bottom:0 !important;
  }
  .desktop-logo{
    @media (min-width: 801px) {
      display: block;
    } 
    @media (max-width: 800px) {
      display: none;
    } 
  }
  .mobile-logo{
    @media (min-width: 801px) {
      display: none;
    } 
    @media (max-width: 800px) {
      display: block;
    } 
  }
  @media (max-width: 359px) {
    img{
      width:200px;
    }
  } 
 `;
const Nav = styled.nav`
  padding: 0 0px;
  display: flex;
  justify-content: end;
  z-index:999;
 `;
 const StyledBurger = styled.div`
  width: 1.3rem;
  height: 1.3rem;
  position: fixed;
  top:26px;
  right: 15px;
  z-index: 20;
  display: none;
  cursor: pointer;
  @media (max-width: 800px) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
  }
  div {
    width: 1.4rem;
    height: 0.2rem;
    background-color: ${({ open }) => open ? '#525E6B' : '#333D47'};
    border-radius: 0px;
    transform-origin: 1px;
    transition: all 0.3s linear;
    &:nth-child(1) {
      transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
    }
    &:nth-child(2) {
      transform: ${({ open }) => open ? 'translateX(100%)' : 'translateX(0)'};
      opacity: ${({ open }) => open ? 0 : 1};
    }
    &:nth-child(3) {
      transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }
`;
const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  align-items:center;
  margin:0;
   @media (max-width: 800px) {
    flex-flow: column nowrap;
    background-color: #fff;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 100vh;
    width: 100%;
    padding-top: 7rem;
    transition: transform 0.3s ease-in-out;
    margin: 0;
    padding-top: 100px !important;
  }
@media (min-width: 801px) {
  li:last-child a{
    border:1px solid #6C7884;
    padding:8px 30px;
    border-radius:4px;
    margin-left: 20px;
    padding:13px 50px;
    display:inline-block;
  }
}
@media (max-width: 800px) {
  li:last-child{
    display:flex;
    justify-content:center;
  }
    li:last-child a{
    position:absolute;
    bottom:20px;
    display:flex;
    justify-content:center;
    background: #236DDE;
    border-radius: 4px;
    padding:13px 70px;
    color:#fff !important;
    margin-bottom:30px;
    }
}
@media (max-width: 800px) {
li{
  padding:0 24px;
}
}
  
`;
