import * as React from "react"
import { Link } from "gatsby"
import styled from "styled-components";

const Howitwork = ({data}) => {
   console.log('how it works', data)
   const { primary, items } = data[0]
    return(
    <Wrapper id="howitworks">
       <Container>
          <h2>{primary.heading.text}</h2>
          <Grid>
             {items && items.map((item, index)=>{
                return(
                  <Item key={index}>
                     <SubBox>
                        <Icon>
                           { index===0 && (
                              <svg width="60" height="60" viewBox="0 0 54 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path opacity="0.4" d="M0 22.5V54.375C0 55.8668 0.609565 57.2976 1.6946 58.3525C2.77963 59.4074 4.25125 60 5.78571 60H48.2143C49.7488 60 51.2204 59.4074 52.3054 58.3525C53.3904 57.2976 54 55.8668 54 54.375V22.5H0ZM41.6162 35.7422L24.3796 52.3594C24.2452 52.4905 24.0855 52.5945 23.9097 52.6655C23.7339 52.7364 23.5454 52.773 23.355 52.773C23.1646 52.773 22.9761 52.7364 22.8003 52.6655C22.6245 52.5945 22.4648 52.4905 22.3304 52.3594L12.3742 42.6023C12.2398 42.4712 12.1334 42.3156 12.061 42.1444C11.9886 41.9733 11.9517 41.7899 11.9524 41.6048C11.9531 41.4197 11.9913 41.2366 12.0649 41.0659C12.1386 40.8952 12.2461 40.7403 12.3814 40.6102L12.3911 40.6008L15.8143 37.2996C15.9487 37.1685 16.1083 37.0645 16.2842 36.9935C16.46 36.9225 16.6485 36.886 16.8388 36.886C17.0292 36.886 17.2177 36.9225 17.3935 36.9935C17.5693 37.0645 17.729 37.1685 17.8634 37.2996L23.408 42.7324L36.1848 30.4055C36.3192 30.2744 36.4789 30.1703 36.6547 30.0994C36.8305 30.0284 37.019 29.9919 37.2094 29.9919C37.3997 29.9919 37.5882 30.0284 37.7641 30.0994C37.9399 30.1703 38.0996 30.2744 38.2339 30.4055L41.621 33.75C41.7555 33.881 41.8621 34.0364 41.9347 34.2075C42.0073 34.3786 42.0444 34.562 42.044 34.7471C42.0436 34.9321 42.0055 35.1153 41.9321 35.2861C41.8587 35.4569 41.7513 35.6119 41.6162 35.7422ZM36.6429 15H40.5C41.0115 15 41.502 14.8025 41.8637 14.4508C42.2254 14.0992 42.4286 13.6223 42.4286 13.125V1.875C42.4286 1.37772 42.2254 0.900806 41.8637 0.549175C41.502 0.197544 41.0115 0 40.5 0L36.6429 0C36.1314 0 35.6408 0.197544 35.2792 0.549175C34.9175 0.900806 34.7143 1.37772 34.7143 1.875V13.125C34.7143 13.6223 34.9175 14.0992 35.2792 14.4508C35.6408 14.8025 36.1314 15 36.6429 15ZM13.5 15H17.3571C17.8686 15 18.3592 14.8025 18.7208 14.4508C19.0825 14.0992 19.2857 13.6223 19.2857 13.125V1.875C19.2857 1.37772 19.0825 0.900806 18.7208 0.549175C18.3592 0.197544 17.8686 0 17.3571 0L13.5 0C12.9885 0 12.498 0.197544 12.1363 0.549175C11.7746 0.900806 11.5714 1.37772 11.5714 1.875V13.125C11.5714 13.6223 11.7746 14.0992 12.1363 14.4508C12.498 14.8025 12.9885 15 13.5 15Z" fill="#236DDE"/>
                              <path d="M41.6246 33.75L38.2255 30.4219C38.0919 30.29 37.9329 30.1851 37.7575 30.1131C37.5821 30.0411 37.3938 30.0035 37.2034 30.0024C37.0131 30.0013 36.8243 30.0368 36.6481 30.1067C36.4719 30.1767 36.3116 30.2798 36.1764 30.4102L23.3996 42.7371L17.855 37.3043C17.7213 37.1725 17.5622 37.0677 17.3868 36.9958C17.2113 36.9239 17.023 36.8864 16.8327 36.8854C16.6423 36.8844 16.4536 36.92 16.2774 36.9901C16.1012 37.0601 15.9409 37.1633 15.8058 37.2937L12.3826 40.5949C12.247 40.7248 12.1391 40.8794 12.065 41.0499C11.991 41.2204 11.9523 41.4035 11.9512 41.5886C11.9501 41.7737 11.9865 41.9571 12.0585 42.1285C12.1305 42.2998 12.2365 42.4557 12.3706 42.5871L22.3268 52.3441C22.4604 52.476 22.6195 52.5809 22.7948 52.6529C22.9702 52.7249 23.1585 52.7625 23.3489 52.7636C23.5393 52.7647 23.728 52.7292 23.9042 52.6593C24.0805 52.5893 24.2408 52.4862 24.3759 52.3559L41.6125 35.7387C41.7482 35.6088 41.8561 35.4542 41.9302 35.2837C42.0042 35.1131 42.0429 34.9301 42.044 34.745C42.0451 34.5599 42.0087 34.3764 41.9367 34.2051C41.8647 34.0337 41.7587 33.8779 41.6246 33.7465V33.75ZM48.2143 7.5H42.4286V13.125C42.4286 13.6223 42.2254 14.0992 41.8637 14.4508C41.502 14.8025 41.0115 15 40.5 15H36.6429C36.1314 15 35.6408 14.8025 35.2792 14.4508C34.9175 14.0992 34.7143 13.6223 34.7143 13.125V7.5H19.2857V13.125C19.2857 13.6223 19.0825 14.0992 18.7208 14.4508C18.3592 14.8025 17.8686 15 17.3571 15H13.5C12.9885 15 12.498 14.8025 12.1363 14.4508C11.7746 14.0992 11.5714 13.6223 11.5714 13.125V7.5H5.78571C4.25125 7.5 2.77963 8.09263 1.6946 9.14752C0.609565 10.2024 0 11.6332 0 13.125L0 22.5H54V13.125C54 11.6332 53.3904 10.2024 52.3054 9.14752C51.2204 8.09263 49.7488 7.5 48.2143 7.5Z" fill="#236DDE"/>
                              </svg>
                           )}
                           { index===1 && (
                             <svg width="60" height="60" viewBox="0 0 60 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                             <path opacity="0.4" d="M44.2177 9.47972C44.1016 9.35986 43.9636 9.26475 43.8116 9.19986C43.6597 9.13497 43.4968 9.10156 43.3323 9.10156C43.1678 9.10156 43.0049 9.13497 42.8529 9.19986C42.701 9.26475 42.563 9.35986 42.4469 9.47972L28.3333 23.9997L24.2177 19.7654C24.1016 19.6456 23.9636 19.5505 23.8116 19.4856C23.6597 19.4207 23.4968 19.3873 23.3323 19.3873C23.1678 19.3873 23.0049 19.4207 22.8529 19.4856C22.701 19.5505 22.563 19.6456 22.4469 19.7654L16.6667 25.714V30.8569H53.3333V18.8569L44.2177 9.47972ZM6.66667 32.5712V10.2854H5C3.67392 10.2854 2.40215 10.8273 1.46447 11.7917C0.526784 12.7562 0 14.0643 0 15.4283L0 42.8569C0 44.2209 0.526784 45.529 1.46447 46.4934C2.40215 47.4579 3.67392 47.9997 5 47.9997H45C46.3261 47.9997 47.5979 47.4579 48.5355 46.4934C49.4732 45.529 50 44.2209 50 42.8569V41.1426H15C12.7906 41.14 10.6725 40.2362 9.11018 38.6293C7.54792 37.0224 6.66915 34.8437 6.66667 32.5712Z" fill="#236DDE"/>
                             <path d="M55 0H15C13.6739 0 12.4021 0.541835 11.4645 1.50631C10.5268 2.47078 10 3.77889 10 5.14286V32.5714C10 33.9354 10.5268 35.2435 11.4645 36.208C12.4021 37.1725 13.6739 37.7143 15 37.7143H55C56.3261 37.7143 57.5978 37.1725 58.5355 36.208C59.4732 35.2435 60 33.9354 60 32.5714V5.14286C60 3.77889 59.4732 2.47078 58.5355 1.50631C57.5978 0.541835 56.3261 0 55 0ZM21.6667 5.14286C22.6556 5.14286 23.6223 5.44448 24.4445 6.00959C25.2668 6.57469 25.9076 7.37789 26.2861 8.31763C26.6645 9.25736 26.7635 10.2914 26.5706 11.289C26.3777 12.2867 25.9015 13.203 25.2022 13.9223C24.5029 14.6415 23.612 15.1313 22.6421 15.3298C21.6722 15.5282 20.6669 15.4263 19.7532 15.0371C18.8396 14.6478 18.0587 13.9887 17.5093 13.1429C16.9599 12.2972 16.6667 11.3029 16.6667 10.2857C16.6667 8.92174 17.1934 7.61364 18.1311 6.64917C19.0688 5.68469 20.3406 5.14286 21.6667 5.14286ZM53.3333 30.8571H16.6667V25.7143L22.45 19.7657C22.5661 19.6459 22.7041 19.5507 22.8561 19.4859C23.008 19.421 23.1709 19.3876 23.3354 19.3876C23.4999 19.3876 23.6628 19.421 23.8148 19.4859C23.9667 19.5507 24.1047 19.6459 24.2208 19.7657L28.3333 24L42.45 9.48C42.5661 9.36014 42.7041 9.26503 42.8561 9.20014C43.008 9.13525 43.1709 9.10184 43.3354 9.10184C43.4999 9.10184 43.6628 9.13525 43.8148 9.20014C43.9667 9.26503 44.1047 9.36014 44.2208 9.48L53.3333 18.8571V30.8571Z" fill="#236DDE"/>
                             </svg>
                           )}
                           { index===2 && (
                               <svg width="60" height="60" viewBox="0 0 60 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                               <path opacity="0.4" d="M12 6H42V9H48V4.5C47.9975 3.30874 47.5238 2.16686 46.6822 1.32372C45.8407 0.480587 44.6997 0.00470304 43.5084 0L10.4916 0C9.30031 0.00470304 8.15932 0.480587 7.31777 1.32372C6.47621 2.16686 6.00247 3.30874 6 4.5V27H1.5C1.10218 27 0.720644 27.158 0.43934 27.4393C0.158035 27.7206 0 28.1022 0 28.5L0 30C0.00345767 31.5888 0.635552 33.1116 1.7582 34.2358C2.88084 35.3601 4.40279 35.9943 5.99156 36H33V27H12V6Z" fill="#236DDE"/>
                               <path d="M56.625 12H39.375C38.4799 12 37.6215 12.3556 36.9885 12.9885C36.3556 13.6215 36 14.4799 36 15.375V44.625C36 45.5201 36.3556 46.3786 36.9885 47.0115C37.6215 47.6444 38.4799 48 39.375 48H56.625C57.5201 48 58.3786 47.6444 59.0115 47.0115C59.6444 46.3786 60 45.5201 60 44.625V15.375C60 14.4799 59.6444 13.6215 59.0115 12.9885C58.3786 12.3556 57.5201 12 56.625 12ZM54 42H42V18H54V42Z" fill="#236DDE"/>
                               </svg>
                           )}
                        
                        </Icon>
                        <Text>
                        <h5>Step {index+1}</h5>
                        <p>{item.item_text}</p>
                        </Text>
                     </SubBox>
                  </Item>
                )
             })}             
          </Grid>
          <Link to="/" className="btn">Digitize My Home</Link>
       </Container>
    </Wrapper>
    );
    };
export default Howitwork;
        
const Wrapper = styled.div`
padding:120px 0;
text-align:center;
@media (max-width: 991px) {
   padding:70px 0;
}
@media (max-width: 767px) {
   padding:40px 0;
}
`;
const Container = styled.div`
content-visibility: auto;
contain-intrinsic-size: 500px;
max-width: 1100px;
margin: 0 auto;
padding: 0 15px;
`;
const Grid = styled.div`
display: grid;
grid-template-columns: 1fr;
grid-gap: 10px 30px;
margin:50px 0;
@media (max-width: 767px) {
   margin:50px 0 30px 0;
}
@media (min-width: 768px) {
   grid-template-columns: repeat(3, 1fr);
}    
`;
const Item = styled.div`
`;
const SubBox = styled.div`
margin-bottom:30px;
@media (max-width:767px) {
   display:flex;
   flex-direction:row;
   text-align:left;
}
h5{
    color:#236DDE;
    margin-bottom:15px;
}
p{
   margin:0;
}
`;
const Icon = styled.div`
margin-bottom:30px;
@media (max-width:767px) {
   margin:5px 0 0 0;
   padding-right:30px;
}
`;
const Text = styled.div`
display:flex;
flex-direction:column;
`;