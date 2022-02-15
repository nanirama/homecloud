import React, { useState } from "react"
import styled from "styled-components";
import Layout from "../components/layout"
import DeserveSection from "../components/DeserveSection";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";
const BlogSingle = () => {
return(
<Layout>
   <Wrapper>
      <Container>
         <BlogSection>
            <BackText>
               <Link to="/blog">
               <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7.22395 13.5057L7.4344 13.2953C7.57386 13.1558 7.57386 12.9297 7.4344 12.7902L2.12207 7.47783H13.3092C13.5064 7.47783 13.6663 7.31792 13.6663 7.12069V6.82307C13.6663 6.62584 13.5064 6.46593 13.3092 6.46593H2.12207L7.4344 1.1536C7.57386 1.01414 7.57386 0.788006 7.4344 0.648511L7.22395 0.438094C7.08449 0.29863 6.85836 0.29863 6.71889 0.438094L0.437606 6.71935C0.298142 6.85882 0.298142 7.08495 0.437606 7.22444L6.71889 13.5057C6.85836 13.6452 7.08449 13.6452 7.22395 13.5057Z" fill="#6C7884"/>
               </svg>
               Back
               </Link>
            </BackText>
            <Date>Jan 2, 2022</Date>
            <Heading>Phasellus rhoncus quis nunc auctor consequat</Heading>
            <Paragraph>Nullam ornare pellentesque justo, ultrices hendrerit arcu interdum sodales. Quisque sodales arcu et ultricies volutpat.</Paragraph>
            <AuthorInfo>
               <Author>
                  <StaticImage src="../assets/images/author1.png" alt="" />
                  <h6>James Jansense</h6>
               </Author>
               <SocialLinks>
                  <SocialIcon>
                     <svg width="20" height="20" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17.9441 3.98749C17.9568 4.16248 17.9568 4.33751 17.9568 4.5125C17.9568 9.84997 13.8325 16 6.29441 16C3.97207 16 1.81473 15.3375 0 14.1875C0.329961 14.225 0.647187 14.2375 0.989844 14.2375C2.90605 14.2375 4.67004 13.6 6.07867 12.5125C4.27664 12.475 2.76648 11.3125 2.24617 9.7125C2.5 9.74997 2.75379 9.77498 3.02031 9.77498C3.38832 9.77498 3.75637 9.72496 4.09898 9.63751C2.22082 9.26247 0.812148 7.63749 0.812148 5.67499V5.62501C1.35781 5.92501 1.99238 6.11251 2.66492 6.13748C1.56086 5.41247 0.837539 4.17498 0.837539 2.77497C0.837539 2.02499 1.04055 1.33749 1.3959 0.737481C3.41367 3.18748 6.44668 4.78745 9.84766 4.96248C9.78422 4.66248 9.74613 4.35001 9.74613 4.03751C9.74613 1.81248 11.5736 0 13.8451 0C15.0253 0 16.0913 0.487499 16.84 1.275C17.7664 1.10001 18.6547 0.762491 19.4416 0.300002C19.137 1.23752 18.4898 2.02502 17.6395 2.52499C18.4644 2.43753 19.2639 2.21248 19.9999 1.90001C19.4416 2.69998 18.7436 3.41245 17.9441 3.98749V3.98749Z" fill="white"/>
                     </svg>
                  </SocialIcon>
                  <SocialIcon>
                     <svg width="10" height="20" viewBox="0 0 10 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.34469 11.25L9.86325 7.63047H6.62096V5.28164C6.62096 4.29141 7.07388 3.32617 8.526 3.32617H10V0.244531C10 0.244531 8.66239 0 7.38349 0C4.71337 0 2.96806 1.73359 2.96806 4.87188V7.63047H0V11.25H2.96806V20H6.62096V11.25H9.34469Z" fill="white"/>
                     </svg>
                  </SocialIcon>
                  <SocialIcon>
                     <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4.47689 20H0.330365V6.64702H4.47689V20ZM2.40139 4.82555C1.07547 4.82555 0 3.72732 0 2.40139C9.49039e-09 1.7645 0.253003 1.1537 0.703352 0.703352C1.1537 0.253003 1.7645 0 2.40139 0C3.03828 0 3.64909 0.253003 4.09944 0.703352C4.54979 1.1537 4.80279 1.7645 4.80279 2.40139C4.80279 3.72732 3.72687 4.82555 2.40139 4.82555ZM19.996 20H15.8584V13.4999C15.8584 11.9507 15.8271 9.96406 13.7025 9.96406C11.5467 9.96406 11.2163 11.6471 11.2163 13.3882V20H7.07427V6.64702H11.0511V8.46849H11.1092C11.6628 7.41936 13.015 6.31219 15.0325 6.31219C19.229 6.31219 20.0005 9.07565 20.0005 12.665V20H19.996Z" fill="white"/>
                     </svg>
                  </SocialIcon>
                  <SocialIcon>
                     <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.7636 15.4181L8.66986 18.5115C6.68635 20.4958 3.47311 20.4968 1.48862 18.5115C-0.495717 16.528 -0.496694 13.3147 1.48862 11.3302L4.58197 8.23648C4.62714 8.19132 4.67314 8.14701 4.71994 8.10355C5.01486 7.82992 5.49318 8.02527 5.50932 8.42722C5.51686 8.61499 5.53268 8.80249 5.55682 8.9891C5.57561 9.13429 5.52768 9.27999 5.42412 9.38347C4.78037 10.0268 2.48889 12.3182 2.48272 12.3243C1.04764 13.7602 1.04791 16.0817 2.48272 17.5173C3.91862 18.9524 6.24006 18.9521 7.67568 17.5173L10.7694 14.4236L10.7835 14.4095C12.2015 12.977 12.1952 10.6568 10.769 9.23058C10.4482 8.90972 10.0824 8.66105 9.6915 8.48413C9.51314 8.40343 9.40142 8.2237 9.41283 8.02827C9.4246 7.82576 9.46169 7.62552 9.52322 7.43222C9.60537 7.17437 9.89553 7.04312 10.1451 7.14784C10.7338 7.39488 11.2852 7.758 11.7636 8.23644C13.7436 10.2165 13.7433 13.4384 11.7636 15.4181ZM8.23643 11.7637C8.71486 12.2421 9.26619 12.6052 9.85498 12.8523C10.1045 12.957 10.3947 12.8257 10.4768 12.5679C10.5383 12.3746 10.5754 12.1743 10.5872 11.9718C10.5986 11.7764 10.4869 11.5967 10.3085 11.516C9.9176 11.3391 9.55185 11.0904 9.23099 10.7695C7.80482 9.34335 7.79853 7.02312 9.21654 5.59062L9.2306 5.57655L12.3244 2.4828C13.76 1.04799 16.0814 1.04772 17.5173 2.4828C18.9521 3.91843 18.9524 6.23987 17.5173 7.67577C17.5112 7.68191 15.2197 9.97331 14.5759 10.6166C14.4724 10.7202 14.4244 10.8658 14.4432 11.011C14.4673 11.1975 14.4832 11.385 14.4907 11.5729C14.5069 11.9749 14.9852 12.1702 15.2801 11.8966C15.3269 11.8531 15.3729 11.8088 15.4181 11.7636L18.5114 8.66988C20.4967 6.68538 20.4958 3.47214 18.5114 1.48862C16.527 -0.496695 13.3137 -0.495718 11.3302 1.48862L8.23643 4.58198C6.25678 6.56175 6.25643 9.78367 8.23643 11.7637Z" fill="white"/>
                     </svg>
                  </SocialIcon>
               </SocialLinks>
            </AuthorInfo>
            <BlogImage>
               <StaticImage src="../assets/images/blog-single.png" alt="" />
            </BlogImage>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eget velit aliquet sagittis id consectetur purus ut faucibus pulvinar. Commodo quis imperdiet massa tincidunt. At in tellus integer feugiat. Tincidunt vitae semper quis lectus nulla at. Turpis cursus in hac habitasse platea dictumst quisque. Volutpat commodo sed egestas egestas fringilla phasellus faucibus scelerisque. Lorem donec massa sapien faucibus et molestie ac feugiat. Vitae turpis massa sed elementum tempus egestas sed. Purus faucibus ornare suspendisse sed nisi. Vitae semper quis lectus nulla at. Arcu odio ut sem nulla pharetra diam sit amet. Sit amet purus gravida quis blandit turpis cursus in. Ut tellus elementum sagittis vitae et leo duis ut. Lacinia quis vel eros donec ac odio. Fermentum odio eu feugiat pretium nibh. Ipsum dolor sit amet consectetur adipiscing elit. Cursus euismod quis viverra nibh cras pulvinar. Elit ut aliquam purus sit amet.</p>
            <p>Duis ultricies lacus sed turpis tincidunt id aliquet. Mauris cursus mattis molestie a iaculis at erat pellentesque adipiscing. In massa tempor nec feugiat nisl pretium. Sapien faucibus et molestie ac feugiat. Facilisis mauris sit amet massa vitae tortor condimentum lacinia. Libero id faucibus nisl tincidunt eget nullam non nisi est. Ultricies mi quis hendrerit dolor. Sit amet luctus venenatis lectus magna fringilla. Congue eu consequat ac felis donec et odio. Magna sit amet purus gravida quis blandit.</p>
            <p>Habitasse platea dictumst quisque sagittis purus sit amet volutpat. Augue mauris augue neque gravida in fermentum et sollicitudin. Nunc vel risus commodo viverra. Amet luctus venenatis lectus magna fringilla urna porttitor rhoncus dolor. Sem et tortor consequat id porta nibh venenatis cras sed. Tristique et egestas quis ipsum suspendisse. Vivamus arcu felis bibendum ut tristique et egestas. Velit ut tortor pretium viverra suspendisse potenti nullam ac. Ipsum dolor sit amet consectetur adipiscing. Ultricies tristique nulla aliquet enim tortor at auctor urna. Aliquet nibh praesent tristique magna sit amet purus gravida. Elementum sagittis vitae et leo duis ut. Vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras tincidunt lobortis. Tincidunt nunc pulvinar sapien et. Feugiat nibh sed pulvinar proin gravida hendrerit. Turpis nunc eget lorem dolor sed viverra ipsum. Et leo duis ut diam quam nulla. Pharetra et ultrices neque ornare aenean euismod. Purus viverra accumsan in nisl nisi scelerisque eu.</p>
            <p>Morbi leo urna molestie at elementum eu facilisis sed. Mattis rhoncus urna neque viverra justo nec. Commodo nulla facilisi nullam vehicula ipsum a arcu. Id interdum velit laoreet id donec ultrices. Purus sit amet luctus venenatis lectus. Nec feugiat nisl pretium fusce id velit ut tortor pretium. Amet mauris commodo quis imperdiet massa tincidunt. Commodo elit at imperdiet dui accumsan sit amet nulla. Mattis rhoncus urna neque viverra. Elementum tempus egestas sed sed. Ac placerat vestibulum lectus mauris ultrices eros in cursus turpis. Habitasse platea dictumst vestibulum rhoncus. Quis enim lobortis scelerisque fermentum dui. Adipiscing at in tellus integer feugiat scelerisque varius morbi. Venenatis cras sed felis eget. Elit at imperdiet dui accumsan sit amet.</p>
            <p>Magna sit amet purus gravida quis blandit turpis cursus. Lobortis mattis aliquam faucibus purus in massa. Tempor orci eu lobortis elementum nibh. Et sollicitudin ac orci phasellus. Arcu non odio euismod lacinia at quis risus sed. Nunc aliquet bibendum enim facilisis gravida neque. In aliquam sem fringilla ut morbi tincidunt augue interdum. Enim diam vulputate ut pharetra sit amet aliquam. Aliquet nibh praesent tristique magna sit amet purus gravida quis. Sed turpis tincidunt id aliquet. Vitae tempus quam pellentesque nec nam aliquam sem. Lorem ipsum dolor sit amet. Ut tortor pretium viverra suspendisse potenti nullam ac tortor vitae.</p>
         </BlogSection>
      </Container>
   </Wrapper>
   <DeserveSection/>
</Layout>
);
};
export default BlogSingle;

const Wrapper = styled.div`
padding:80px 0 60px 0;
@media (max-width: 800px) {
padding:0px 0 40px 0;
}
`;
const Container = styled.div`
max-width: 840px;
margin: 0 auto;
padding: 0 15px;
position:relative;
`;
const BlogSection = styled.div`
padding:40px 0 0 0;
p{
font-size:14px;
line-height: 20px;
letter-spacing: -0.07875px;
}
`;
const BackText = styled.div`
margin-bottom:30px;
a{
color: #6C7884;
font-weight: 700;
font-size: 14px;
line-height: 20px;
letter-spacing: -0.07875px;
svg{
margin-right:5px;
}
}
`;
const Date = styled.p`
font-size: 14px;
line-height: 20px;
letter-spacing: -0.073125px;
margin-bottom: 5px;
`;
const Heading = styled.h2`
font-size:32px;
line-height: 43px;
letter-spacing: -0.44px;
@media (max-width: 599px) {
   font-size:24px;
   line-height: 30px;  
}
`;
const Paragraph = styled.p`
color: #8C96A1;
margin-bottom:25px;
font-size:15px;
`;
const AuthorInfo = styled.div`
display:flex;
justify-content:space-between;
align-items:center;
@media (max-width: 479px) {
flex-direction:column;
align-items:self-start;
}
`;
const Author = styled.div`
display:flex;
align-items:center;
h6{
padding-left:15px;
}
@media (max-width: 479px) {
margin-bottom:20px;
}
   
`;
const SocialLinks = styled.div`
display:flex;
`;
const SocialIcon = styled.div`
width: 40px;
height: 40px;
background: #236DDE;
border-radius: 50%;
text-align: center;
line-height:34px;
margin-right:12px;
`;
const BlogImage = styled.div`
margin:55px 0;
img{
border-radius: 6px;
}
@media (max-width: 767px) {
margin:32px 0;
}
`;
