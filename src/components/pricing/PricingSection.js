import React, { useContext } from "react"
import styled from "styled-components";
import { Accordion, AccordionContext, useAccordionButton } from 'react-bootstrap'
import { useStaticQuery, graphql, Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const PricingSection = () => {
   const { PricingIcon} = useStaticQuery(
      graphql`
        query {
         PricingIcon: file(relativePath: {eq: "home-icon.png"}) {
            childImageSharp {
              gatsbyImageData(layout: FIXED, width: 67)
            }
          }         
        }
      `
    )
    const ContextAwareToggle = ({ children, eventKey, callback })=> {
      const { activeEventKey } = useContext(AccordionContext);
    
      const decoratedOnClick = useAccordionButton(
        eventKey,
        () => callback && callback(eventKey),
      );
    
      const isCurrentEventKey = activeEventKey === eventKey;
      if(isCurrentEventKey){
         return (
            <p>View Less</p>            
         );
      }
      else
      {
         return (
            <p>See Details </p>  
         );
      }
    
      
    }
   return(
   <Wrapper>
      <Banner>
         <Container>
            <h1>Pricing that fits your Home</h1>
            <p>It is a long established fact that a reader will be distracted<br/> by the readable content of a page when looking.</p>
         </Container>
      </Banner>
      <Container>
         <BenifitBlk>
            <Grid>
               <TextBlock>
                  <Image>
                  <GatsbyImage image={getImage(PricingIcon)} />
                  </Image>
                  <h4>Home Evaluation</h4>
                  <h2>From $399* <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.4998 2.74177C14.4858 2.74177 17.7579 5.9701 17.7579 9.99984C17.7579 14.0083 14.5116 17.2579 10.4998 17.2579C6.49298 17.2579 3.24177 14.0132 3.24177 9.99984C3.24177 5.99436 6.48781 2.74177 10.4998 2.74177ZM10.4998 1.6665C5.89779 1.6665 2.1665 5.39913 2.1665 9.99984C2.1665 14.6032 5.89779 18.3332 10.4998 18.3332C15.1019 18.3332 18.8332 14.6032 18.8332 9.99984C18.8332 5.39913 15.1019 1.6665 10.4998 1.6665ZM9.29016 13.2256H9.69339V9.19339H9.29016C9.06748 9.19339 8.88693 9.01284 8.88693 8.79016V8.52134C8.88693 8.29866 9.06748 8.11812 9.29016 8.11812H10.9031C11.1257 8.11812 11.3063 8.29866 11.3063 8.52134V13.2256H11.7095C11.9322 13.2256 12.1127 13.4062 12.1127 13.6289V13.8977C12.1127 14.1204 11.9322 14.3009 11.7095 14.3009H9.29016C9.06748 14.3009 8.88693 14.1204 8.88693 13.8977V13.6289C8.88693 13.4062 9.06748 13.2256 9.29016 13.2256ZM10.4998 5.16113C9.90599 5.16113 9.42457 5.64255 9.42457 6.2364C9.42457 6.83025 9.90599 7.31167 10.4998 7.31167C11.0937 7.31167 11.5751 6.83025 11.5751 6.2364C11.5751 5.64255 11.0937 5.16113 10.4998 5.16113Z" fill="#333D47"/>
</svg></h2>
                  <h5>Up to 1,499 Sq. Ft.</h5>
                  <p>+$40 for each 500 Sq. Ft. increment.*</p>
                  <Button to="/" className="btn">Digitize My Home</Button>
               </TextBlock>
               <Benifits>
                  <h3>Benefits:</h3>
                  <Links>
                     <ul>
                        <li>
                           <svg width="20" height="22" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M16.8332 8.99984C16.8332 13.6022 13.1022 17.3332 8.49984 17.3332C3.89745 17.3332 0.166504 13.6022 0.166504 8.99984C0.166504 4.39745 3.89745 0.666504 8.49984 0.666504C13.1022 0.666504 16.8332 4.39745 16.8332 8.99984ZM7.53593 13.4123L13.7187 7.22947C13.9287 7.01953 13.9287 6.6791 13.7187 6.46916L12.9584 5.70884C12.7485 5.49886 12.408 5.49886 12.1981 5.70884L7.15575 10.7511L4.80162 8.39698C4.59167 8.18704 4.25125 8.18704 4.04127 8.39698L3.28095 9.1573C3.07101 9.36724 3.07101 9.70767 3.28095 9.91761L6.77558 13.4122C6.98556 13.6222 7.32595 13.6222 7.53593 13.4123V13.4123Z" fill="#1FAD64"/>
                           </svg>
                           <p>No need to wait for a costly scheduled home inspection.</p>
                        </li>
                        <li>
                           <svg width="20" height="22" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M16.8332 8.99984C16.8332 13.6022 13.1022 17.3332 8.49984 17.3332C3.89745 17.3332 0.166504 13.6022 0.166504 8.99984C0.166504 4.39745 3.89745 0.666504 8.49984 0.666504C13.1022 0.666504 16.8332 4.39745 16.8332 8.99984ZM7.53593 13.4123L13.7187 7.22947C13.9287 7.01953 13.9287 6.6791 13.7187 6.46916L12.9584 5.70884C12.7485 5.49886 12.408 5.49886 12.1981 5.70884L7.15575 10.7511L4.80162 8.39698C4.59167 8.18704 4.25125 8.18704 4.04127 8.39698L3.28095 9.1573C3.07101 9.36724 3.07101 9.70767 3.28095 9.91761L6.77558 13.4122C6.98556 13.6222 7.32595 13.6222 7.53593 13.4123V13.4123Z" fill="#1FAD64"/>
                           </svg>
                           <p>Provided Quickly.</p>
                        </li>
                        <li>
                           <svg width="20" height="22" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M16.8332 8.99984C16.8332 13.6022 13.1022 17.3332 8.49984 17.3332C3.89745 17.3332 0.166504 13.6022 0.166504 8.99984C0.166504 4.39745 3.89745 0.666504 8.49984 0.666504C13.1022 0.666504 16.8332 4.39745 16.8332 8.99984ZM7.53593 13.4123L13.7187 7.22947C13.9287 7.01953 13.9287 6.6791 13.7187 6.46916L12.9584 5.70884C12.7485 5.49886 12.408 5.49886 12.1981 5.70884L7.15575 10.7511L4.80162 8.39698C4.59167 8.18704 4.25125 8.18704 4.04127 8.39698L3.28095 9.1573C3.07101 9.36724 3.07101 9.70767 3.28095 9.91761L6.77558 13.4122C6.98556 13.6222 7.32595 13.6222 7.53593 13.4123V13.4123Z" fill="#1FAD64"/>
                           </svg>
                           <p>Review before making an offer on a home.</p>
                        </li>
                        <li>
                           <svg width="20" height="22" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M16.8332 8.99984C16.8332 13.6022 13.1022 17.3332 8.49984 17.3332C3.89745 17.3332 0.166504 13.6022 0.166504 8.99984C0.166504 4.39745 3.89745 0.666504 8.49984 0.666504C13.1022 0.666504 16.8332 4.39745 16.8332 8.99984ZM7.53593 13.4123L13.7187 7.22947C13.9287 7.01953 13.9287 6.6791 13.7187 6.46916L12.9584 5.70884C12.7485 5.49886 12.408 5.49886 12.1981 5.70884L7.15575 10.7511L4.80162 8.39698C4.59167 8.18704 4.25125 8.18704 4.04127 8.39698L3.28095 9.1573C3.07101 9.36724 3.07101 9.70767 3.28095 9.91761L6.77558 13.4122C6.98556 13.6222 7.32595 13.6222 7.53593 13.4123V13.4123Z" fill="#1FAD64"/>
                           </svg>
                           <p>Provides more detailed information than a home inspection so you can get the best non-contingent offers faster.</p>
                        </li>
                        <li>
                           <svg width="20" height="22" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M16.8332 8.99984C16.8332 13.6022 13.1022 17.3332 8.49984 17.3332C3.89745 17.3332 0.166504 13.6022 0.166504 8.99984C0.166504 4.39745 3.89745 0.666504 8.49984 0.666504C13.1022 0.666504 16.8332 4.39745 16.8332 8.99984ZM7.53593 13.4123L13.7187 7.22947C13.9287 7.01953 13.9287 6.6791 13.7187 6.46916L12.9584 5.70884C12.7485 5.49886 12.408 5.49886 12.1981 5.70884L7.15575 10.7511L4.80162 8.39698C4.59167 8.18704 4.25125 8.18704 4.04127 8.39698L3.28095 9.1573C3.07101 9.36724 3.07101 9.70767 3.28095 9.91761L6.77558 13.4122C6.98556 13.6222 7.32595 13.6222 7.53593 13.4123V13.4123Z" fill="#1FAD64"/>
                           </svg>
                           <p>Includes home history, documentation, and service providers.</p>
                        </li>
                        <li>
                           <svg width="20" height="22" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M16.8332 8.99984C16.8332 13.6022 13.1022 17.3332 8.49984 17.3332C3.89745 17.3332 0.166504 13.6022 0.166504 8.99984C0.166504 4.39745 3.89745 0.666504 8.49984 0.666504C13.1022 0.666504 16.8332 4.39745 16.8332 8.99984ZM7.53593 13.4123L13.7187 7.22947C13.9287 7.01953 13.9287 6.6791 13.7187 6.46916L12.9584 5.70884C12.7485 5.49886 12.408 5.49886 12.1981 5.70884L7.15575 10.7511L4.80162 8.39698C4.59167 8.18704 4.25125 8.18704 4.04127 8.39698L3.28095 9.1573C3.07101 9.36724 3.07101 9.70767 3.28095 9.91761L6.77558 13.4122C6.98556 13.6222 7.32595 13.6222 7.53593 13.4123V13.4123Z" fill="#1FAD64"/>
                           </svg>
                           <p> Home information is never deleted and transfers as the home changes owners.</p>
                        </li>
                     </ul>
                  </Links>
               </Benifits>
            </Grid>
         </BenifitBlk>
         <Schedule>
            <h3>This can be added once you Schedule your Home Evaluation:</h3>
            <ScheduleItem>
               <Item>
                  <Addon>Add-on</Addon>
                  <h4>Radon Test</h4>
                  <h5>$139</h5>
                  <Accordion>
                     <Accordion.Item eventKey="0">
                        <Accordion.Header>
                          <ContextAwareToggle eventKey="0"/>
                           {/* <p>See Details </p> */}
                        </Accordion.Header>
                        <Accordion.Body>
                        <p>Radon is colorless, odorless, and extremely carcinogenic (cancer-causing). Get a radon test once and add it to your HomeCloud app to the benefit of all future home-owners.</p>
                        <Links>
                           <ul>
                              <li>
                                 <svg width="20" height="22" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M16.8332 8.99984C16.8332 13.6022 13.1022 17.3332 8.49984 17.3332C3.89745 17.3332 0.166504 13.6022 0.166504 8.99984C0.166504 4.39745 3.89745 0.666504 8.49984 0.666504C13.1022 0.666504 16.8332 4.39745 16.8332 8.99984ZM7.53593 13.4123L13.7187 7.22947C13.9287 7.01953 13.9287 6.6791 13.7187 6.46916L12.9584 5.70884C12.7485 5.49886 12.408 5.49886 12.1981 5.70884L7.15575 10.7511L4.80162 8.39698C4.59167 8.18704 4.25125 8.18704 4.04127 8.39698L3.28095 9.1573C3.07101 9.36724 3.07101 9.70767 3.28095 9.91761L6.77558 13.4122C6.98556 13.6222 7.32595 13.6222 7.53593 13.4123V13.4123Z" fill="#1FAD64"/>
                                 </svg>
                                 <p> It can affect homes anywhere in the U.S.</p>
                              </li>
                              <li>
                                 <svg width="20" height="22" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M16.8332 8.99984C16.8332 13.6022 13.1022 17.3332 8.49984 17.3332C3.89745 17.3332 0.166504 13.6022 0.166504 8.99984C0.166504 4.39745 3.89745 0.666504 8.49984 0.666504C13.1022 0.666504 16.8332 4.39745 16.8332 8.99984ZM7.53593 13.4123L13.7187 7.22947C13.9287 7.01953 13.9287 6.6791 13.7187 6.46916L12.9584 5.70884C12.7485 5.49886 12.408 5.49886 12.1981 5.70884L7.15575 10.7511L4.80162 8.39698C4.59167 8.18704 4.25125 8.18704 4.04127 8.39698L3.28095 9.1573C3.07101 9.36724 3.07101 9.70767 3.28095 9.91761L6.77558 13.4122C6.98556 13.6222 7.32595 13.6222 7.53593 13.4123V13.4123Z" fill="#1FAD64"/>
                                 </svg>
                                 <p>The only way to check for elevated levels of radon in your home is with testing.</p>
                              </li>
                              <li>
                                 <svg width="20" height="22" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M16.8332 8.99984C16.8332 13.6022 13.1022 17.3332 8.49984 17.3332C3.89745 17.3332 0.166504 13.6022 0.166504 8.99984C0.166504 4.39745 3.89745 0.666504 8.49984 0.666504C13.1022 0.666504 16.8332 4.39745 16.8332 8.99984ZM7.53593 13.4123L13.7187 7.22947C13.9287 7.01953 13.9287 6.6791 13.7187 6.46916L12.9584 5.70884C12.7485 5.49886 12.408 5.49886 12.1981 5.70884L7.15575 10.7511L4.80162 8.39698C4.59167 8.18704 4.25125 8.18704 4.04127 8.39698L3.28095 9.1573C3.07101 9.36724 3.07101 9.70767 3.28095 9.91761L6.77558 13.4122C6.98556 13.6222 7.32595 13.6222 7.53593 13.4123V13.4123Z" fill="#1FAD64"/>
                                 </svg>
                                 <p>High levels of radon can be found in any building.</p>
                              </li>
                              <li>
                                 <svg width="20" height="22" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M16.8332 8.99984C16.8332 13.6022 13.1022 17.3332 8.49984 17.3332C3.89745 17.3332 0.166504 13.6022 0.166504 8.99984C0.166504 4.39745 3.89745 0.666504 8.49984 0.666504C13.1022 0.666504 16.8332 4.39745 16.8332 8.99984ZM7.53593 13.4123L13.7187 7.22947C13.9287 7.01953 13.9287 6.6791 13.7187 6.46916L12.9584 5.70884C12.7485 5.49886 12.408 5.49886 12.1981 5.70884L7.15575 10.7511L4.80162 8.39698C4.59167 8.18704 4.25125 8.18704 4.04127 8.39698L3.28095 9.1573C3.07101 9.36724 3.07101 9.70767 3.28095 9.91761L6.77558 13.4122C6.98556 13.6222 7.32595 13.6222 7.53593 13.4123V13.4123Z" fill="#1FAD64"/>
                                 </svg>
                                 <p>This report will be added to My Home in your HomeCloud app when ready.</p>
                              </li>
                           </ul>
                        </Links>
                        </Accordion.Body>
                     </Accordion.Item>                     
                     </Accordion>
                  
               </Item>
               <Item>
                  <Addon>Add-on</Addon>
                  <h4>Wood Destroying Report</h4>
                  <h5>$139</h5>
                  <Accordion>
                     <Accordion.Item eventKey="0">
                        <Accordion.Header>
                          <ContextAwareToggle eventKey="0"/>
                           {/* <p>See Details </p> */}
                        </Accordion.Header>
                        <Accordion.Body>
                        <p>Radon is colorless, odorless, and extremely carcinogenic (cancer-causing). Get a radon test once and add it to your HomeCloud app to the benefit of all future home-owners.</p>
                        <Links>
                           <ul>
                              <li>
                                 <svg width="20" height="22" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M16.8332 8.99984C16.8332 13.6022 13.1022 17.3332 8.49984 17.3332C3.89745 17.3332 0.166504 13.6022 0.166504 8.99984C0.166504 4.39745 3.89745 0.666504 8.49984 0.666504C13.1022 0.666504 16.8332 4.39745 16.8332 8.99984ZM7.53593 13.4123L13.7187 7.22947C13.9287 7.01953 13.9287 6.6791 13.7187 6.46916L12.9584 5.70884C12.7485 5.49886 12.408 5.49886 12.1981 5.70884L7.15575 10.7511L4.80162 8.39698C4.59167 8.18704 4.25125 8.18704 4.04127 8.39698L3.28095 9.1573C3.07101 9.36724 3.07101 9.70767 3.28095 9.91761L6.77558 13.4122C6.98556 13.6222 7.32595 13.6222 7.53593 13.4123V13.4123Z" fill="#1FAD64"/>
                                 </svg>
                                 <p> It can affect homes anywhere in the U.S.</p>
                              </li>
                              <li>
                                 <svg width="20" height="22" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M16.8332 8.99984C16.8332 13.6022 13.1022 17.3332 8.49984 17.3332C3.89745 17.3332 0.166504 13.6022 0.166504 8.99984C0.166504 4.39745 3.89745 0.666504 8.49984 0.666504C13.1022 0.666504 16.8332 4.39745 16.8332 8.99984ZM7.53593 13.4123L13.7187 7.22947C13.9287 7.01953 13.9287 6.6791 13.7187 6.46916L12.9584 5.70884C12.7485 5.49886 12.408 5.49886 12.1981 5.70884L7.15575 10.7511L4.80162 8.39698C4.59167 8.18704 4.25125 8.18704 4.04127 8.39698L3.28095 9.1573C3.07101 9.36724 3.07101 9.70767 3.28095 9.91761L6.77558 13.4122C6.98556 13.6222 7.32595 13.6222 7.53593 13.4123V13.4123Z" fill="#1FAD64"/>
                                 </svg>
                                 <p>The only way to check for elevated levels of radon in your home is with testing.</p>
                              </li>
                              <li>
                                 <svg width="20" height="22" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M16.8332 8.99984C16.8332 13.6022 13.1022 17.3332 8.49984 17.3332C3.89745 17.3332 0.166504 13.6022 0.166504 8.99984C0.166504 4.39745 3.89745 0.666504 8.49984 0.666504C13.1022 0.666504 16.8332 4.39745 16.8332 8.99984ZM7.53593 13.4123L13.7187 7.22947C13.9287 7.01953 13.9287 6.6791 13.7187 6.46916L12.9584 5.70884C12.7485 5.49886 12.408 5.49886 12.1981 5.70884L7.15575 10.7511L4.80162 8.39698C4.59167 8.18704 4.25125 8.18704 4.04127 8.39698L3.28095 9.1573C3.07101 9.36724 3.07101 9.70767 3.28095 9.91761L6.77558 13.4122C6.98556 13.6222 7.32595 13.6222 7.53593 13.4123V13.4123Z" fill="#1FAD64"/>
                                 </svg>
                                 <p>High levels of radon can be found in any building.</p>
                              </li>
                              <li>
                                 <svg width="20" height="22" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M16.8332 8.99984C16.8332 13.6022 13.1022 17.3332 8.49984 17.3332C3.89745 17.3332 0.166504 13.6022 0.166504 8.99984C0.166504 4.39745 3.89745 0.666504 8.49984 0.666504C13.1022 0.666504 16.8332 4.39745 16.8332 8.99984ZM7.53593 13.4123L13.7187 7.22947C13.9287 7.01953 13.9287 6.6791 13.7187 6.46916L12.9584 5.70884C12.7485 5.49886 12.408 5.49886 12.1981 5.70884L7.15575 10.7511L4.80162 8.39698C4.59167 8.18704 4.25125 8.18704 4.04127 8.39698L3.28095 9.1573C3.07101 9.36724 3.07101 9.70767 3.28095 9.91761L6.77558 13.4122C6.98556 13.6222 7.32595 13.6222 7.53593 13.4123V13.4123Z" fill="#1FAD64"/>
                                 </svg>
                                 <p>This report will be added to My Home in your HomeCloud app when ready.</p>
                              </li>
                           </ul>
                        </Links>
                        </Accordion.Body>
                     </Accordion.Item>                     
                     </Accordion>
               </Item>
               <Item>
                  <Addon>Add-on</Addon>
                  <h4>Well Water Test</h4>
                  <h5>$149</h5>
                  <Accordion>
                     <Accordion.Item eventKey="0">
                        <Accordion.Header>
                          <ContextAwareToggle eventKey="0"/>
                           {/* <p>See Details </p> */}
                        </Accordion.Header>
                        <Accordion.Body>
                        <p>Radon is colorless, odorless, and extremely carcinogenic (cancer-causing). Get a radon test once and add it to your HomeCloud app to the benefit of all future home-owners.</p>
                        <Links>
                           <ul>
                              <li>
                                 <svg width="20" height="22" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M16.8332 8.99984C16.8332 13.6022 13.1022 17.3332 8.49984 17.3332C3.89745 17.3332 0.166504 13.6022 0.166504 8.99984C0.166504 4.39745 3.89745 0.666504 8.49984 0.666504C13.1022 0.666504 16.8332 4.39745 16.8332 8.99984ZM7.53593 13.4123L13.7187 7.22947C13.9287 7.01953 13.9287 6.6791 13.7187 6.46916L12.9584 5.70884C12.7485 5.49886 12.408 5.49886 12.1981 5.70884L7.15575 10.7511L4.80162 8.39698C4.59167 8.18704 4.25125 8.18704 4.04127 8.39698L3.28095 9.1573C3.07101 9.36724 3.07101 9.70767 3.28095 9.91761L6.77558 13.4122C6.98556 13.6222 7.32595 13.6222 7.53593 13.4123V13.4123Z" fill="#1FAD64"/>
                                 </svg>
                                 <p> It can affect homes anywhere in the U.S.</p>
                              </li>
                              <li>
                                 <svg width="20" height="22" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M16.8332 8.99984C16.8332 13.6022 13.1022 17.3332 8.49984 17.3332C3.89745 17.3332 0.166504 13.6022 0.166504 8.99984C0.166504 4.39745 3.89745 0.666504 8.49984 0.666504C13.1022 0.666504 16.8332 4.39745 16.8332 8.99984ZM7.53593 13.4123L13.7187 7.22947C13.9287 7.01953 13.9287 6.6791 13.7187 6.46916L12.9584 5.70884C12.7485 5.49886 12.408 5.49886 12.1981 5.70884L7.15575 10.7511L4.80162 8.39698C4.59167 8.18704 4.25125 8.18704 4.04127 8.39698L3.28095 9.1573C3.07101 9.36724 3.07101 9.70767 3.28095 9.91761L6.77558 13.4122C6.98556 13.6222 7.32595 13.6222 7.53593 13.4123V13.4123Z" fill="#1FAD64"/>
                                 </svg>
                                 <p>The only way to check for elevated levels of radon in your home is with testing.</p>
                              </li>
                              <li>
                                 <svg width="20" height="22" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M16.8332 8.99984C16.8332 13.6022 13.1022 17.3332 8.49984 17.3332C3.89745 17.3332 0.166504 13.6022 0.166504 8.99984C0.166504 4.39745 3.89745 0.666504 8.49984 0.666504C13.1022 0.666504 16.8332 4.39745 16.8332 8.99984ZM7.53593 13.4123L13.7187 7.22947C13.9287 7.01953 13.9287 6.6791 13.7187 6.46916L12.9584 5.70884C12.7485 5.49886 12.408 5.49886 12.1981 5.70884L7.15575 10.7511L4.80162 8.39698C4.59167 8.18704 4.25125 8.18704 4.04127 8.39698L3.28095 9.1573C3.07101 9.36724 3.07101 9.70767 3.28095 9.91761L6.77558 13.4122C6.98556 13.6222 7.32595 13.6222 7.53593 13.4123V13.4123Z" fill="#1FAD64"/>
                                 </svg>
                                 <p>High levels of radon can be found in any building.</p>
                              </li>
                              <li>
                                 <svg width="20" height="22" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M16.8332 8.99984C16.8332 13.6022 13.1022 17.3332 8.49984 17.3332C3.89745 17.3332 0.166504 13.6022 0.166504 8.99984C0.166504 4.39745 3.89745 0.666504 8.49984 0.666504C13.1022 0.666504 16.8332 4.39745 16.8332 8.99984ZM7.53593 13.4123L13.7187 7.22947C13.9287 7.01953 13.9287 6.6791 13.7187 6.46916L12.9584 5.70884C12.7485 5.49886 12.408 5.49886 12.1981 5.70884L7.15575 10.7511L4.80162 8.39698C4.59167 8.18704 4.25125 8.18704 4.04127 8.39698L3.28095 9.1573C3.07101 9.36724 3.07101 9.70767 3.28095 9.91761L6.77558 13.4122C6.98556 13.6222 7.32595 13.6222 7.53593 13.4123V13.4123Z" fill="#1FAD64"/>
                                 </svg>
                                 <p>This report will be added to My Home in your HomeCloud app when ready.</p>
                              </li>
                           </ul>
                        </Links>
                        </Accordion.Body>
                     </Accordion.Item>                     
                     </Accordion>
               </Item>
            </ScheduleItem>
         </Schedule>
      </Container>
   </Wrapper>
   );
   };
export default PricingSection;    
        
const Wrapper = styled.div`
padding:90px 0 30px 0;

@media (max-width: 800px) {
    padding:0 0 40px 0;
}
`;
const Banner = styled.div`
width: 100%;
margin-bottom:56px;
background: linear-gradient(104.71deg, #0047AD 34.23%, #0A5ACB 97.16%);
padding:40px 0;
h1{
   color:#fff;
   font-size:32px;
   line-height:43px;
   margin-bottom:15px;
}
p{
   color:#fff;
   font-size:16px;
   line-height:22px;
   font-weight:400;
   margin:0;
}
`;
const Container = styled.div`
max-width: 845px;
margin: 0 auto;
padding: 0 15px;

`;
const BenifitBlk = styled.div`
padding:20px;
border:1px solid #DDE1E9;
border-radius:6px;
`;
const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 10px 30px;
    @media (min-width: 768px) {
        grid-template-columns: 4fr 8fr;
    }
`;
const TextBlock = styled.div`
padding-left:20px;
h4{
   font-size:18px;
   line-height:23px;
   font-weight:700;
   color:#333D47;
   margin-top:20px;
}
h2{
   font-size:28px;
   line-height:34px;
   font-weight:700;
   color:#333D47;
   margin:5px 0;
   svg{
      margintop:-20px;
   }
}
h5{
   font-size:16px;
   line-height:22px;
   font-weight:700;
   color:#333D47;
   margin-bottom:5px;
}
p{
   font-size:14px;
   line-height:20px;
}
`;
const Image = styled.div`
margin-top:20px;
`;
const Button = styled.div`
padding:17px 25px;
margin-bottom:20px;
`;
const Benifits = styled.div`
border-radius:6px;
background: linear-gradient(218.37deg, #0047AD 32.08%, #0A5ACB 98.3%);
padding:32px;
@media only screen and (max-width:800px){
   padding:15px;
}
h3{
   color:#fff;
   font-size:20px;
   line-height:32px;
   font-weight:700;
   margin-bottom:20px;
}
ul li svg{
   padding-right:2% !important;
   width:8% !important;}
ul li p{
   width:90% !important;
}
`;
const Links = styled.div`
ul li svg{
   float:left;
   padding-right:3%;
   width:12%;
}
ul li {
   width:100%;
   margin-bottom:20px;
}
ul li p{
   width:84%;
   float:left;
   margin:0;color:#fff;
   font-size:14px;
   line-height:20px;
   font-weight:400;
}
`;
const Schedule = styled.div`
padding:25px 0;
h3{
   color:#333D47;
   font-size:20px;
   line-height:32px;
   font-weight:700;
   margin-bottom:20px;}
`;
const ScheduleItem = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 10px;
    @media (min-width: 768px) {
      grid-template-columns: repeat(3, 1fr);
      grid-gap: 10px 15px;     
    }
`;
const Item = styled.div`
height:auto !important;
display:flex;
flex-direction:column;
border:1px solid #DDE1E9;
padding:20px;
border-radius: 6px;
h4{
   font-size:18px;
   line-height:23px;
   font-weight:700;
   color:#333D47;
   margin:5px 0;}
h5{
   font-size:16px;
   line-height:23px;
   font-weight:400;
   color:#333D47;
   margin-bottom:15px;
}
p{
   font-size:14px;
   line-height:20px;
   color:#333D47;
}
ul li p{
   color:#333D47 !important;
}
.accordion-item{
   border:none !important;
   }
.accordion-header{
   padding:0px !important;
   margin:0px !important;
}
.accordion-button{
   padding:0px !important;
   margin:0px 0px 0px !important;
}
.accordion-button::after{
   width: 16px;
   height: 16px;
   float:left !important;
   margin-left:8px !important;
   background-size: 100%;
   background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%236C7884'%3e%3cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e");
}
.accordion-button p{
   color: #236DDE;
   font-weight: bold;
   text-decoration:underline;
   float:left;
   font-size: 14px;
   line-height: 30px;
   padding:0px;
   margin-bottom:0px;
}
.accordion-body{
   height:100% !important;
   padding:0px !important;
   margin:0px !important;  
}
   .accordion-button h4{
      
   }
   .accordion-button:not(.collapsed),
   .accordion-button:focus,
   .accordion-item:last-of-type .accordion-button.collapsed{
      background-color:transparent !important;
      border:none !important;
      box-shadow: none !important;
      border-radius:none !important;
   }
`;
const Addon = styled.div`
text-transform:uppercase;
color: #236DDE;
text-align: center;
font-weight: bold;
margin-bottom:px;
font-size: 11px;
line-height: 14px;
padding:5px 8px;
background: #ECF2FE;
border-radius: 4px;
width: 100%;
max-width: 65px;
`;





