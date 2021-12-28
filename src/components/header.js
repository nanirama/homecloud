import React, { useState, useEffect } from "react";
import PropTypes from "prop-types"
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { useStaticQuery, graphql, Link } from "gatsby";
import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image";

import styled from "styled-components";
const SiteLogo = ({page, isStickyState})=>{

  const { SiteLogo, LogoWhite } = useStaticQuery(
    graphql`
      query {
        SiteLogo: file(relativePath: {eq: "logos/logo.png"}) {
          childImageSharp {
            gatsbyImageData(layout: FIXED, width: 215)
          }
        }
        LogoWhite: file(relativePath: {eq: "logos/logo-white.png"}) {
          childImageSharp {
            gatsbyImageData(layout: FIXED, width: 215)
          }
        }
      }
    `
  )

  if(!isStickyState && page === 'home')
  {
    return(
      <>
      <GatsbyImage image={getImage(LogoWhite)} className="desktop-logo" />
      <GatsbyImage image={getImage(SiteLogo)} className="mobile-logo"  />
      </>      
    ) 
  }
  else
  {
    return(
      <GatsbyImage image={getImage(SiteLogo)} />
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
             <SiteLogo page={page} isStickyState={isStickyState}/> 
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
                 <AnchorLink href='#howitworks'>How it Works</AnchorLink>
                 </li>
                 <li>
                    <AnchorLink href='#benefits'>Benefits</AnchorLink>
                 </li>
                 <li>
                    <AnchorLink href='#whatsincluded'>What’s Included</AnchorLink>
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
padding:30px 0;
@media (max-width: 800px) {
  position:inherit;
  display:inline-block;
  padding:25px 0;  
}
${({ isStickyState, page }) => !isStickyState && page==='home' ? `
    a{
      color:#ffffff !important;
    }
    li:last-child a{
      border:1px solid #fff !important;
    }
` : `
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
  max-width: 1230px;
  margin: 0 auto;
  padding: 0px 15px;
`;
const LogoAndLinks = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  height: 100%;
`;
const Logo = styled.div`
  display: grid;
  place-items: center;
  .desktop-logo{
    @media (min-width: 768px) {
      display: block;
    } 
    @media (max-width: 767px) {
      display: none;
    } 
  }
  .mobile-logo{
    @media (min-width: 768px) {
      display: none;
    } 
    @media (max-width: 767px) {
      display: block;
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
  width: 2rem;
  height: 2rem;
  position: fixed;
  top:24px;
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
    width: 2rem;
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
