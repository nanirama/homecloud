import React from "react"
import styled from "styled-components";
import img from '../../assets/images/durham-banner.png';

import DigitizeMyHome from "../popups/DigitizeMyHome"

const Hero = () => {
  return(
  <Wrapper>
     <BannerContent>
        <Container>
            <ContentBlock>
           <LeftBlock>
              <h2>HomeCloud it’s in Durham!</h2>
              <p>We put your home information into an app to simplify maintenance and increase home value. When you’re ready to sell, your digital HomeCloud profile makes your home more marketable and data is seamlessly transferred to the next owner to set them up for success.</p>
              <DigitizeMyHome/>
           </LeftBlock>
           <RightBlock>
               <Grid>
                   <Item>
               <SubBox>
               <svg width="34" height="34" viewBox="0 0 34 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.4" d="M6.27144 19H4.18811C4.02235 19 3.86338 19.0658 3.74617 19.1831C3.62896 19.3003 3.56311 19.4592 3.56311 19.625V21.7083C3.56311 21.8741 3.62896 22.0331 3.74617 22.1503C3.86338 22.2675 4.02235 22.3333 4.18811 22.3333H6.27144C6.4372 22.3333 6.59617 22.2675 6.71339 22.1503C6.8306 22.0331 6.89644 21.8741 6.89644 21.7083V19.625C6.89644 19.4592 6.8306 19.3003 6.71339 19.1831C6.59617 19.0658 6.4372 19 6.27144 19ZM6.27144 14H4.18811C4.02235 14 3.86338 14.0658 3.74617 14.1831C3.62896 14.3003 3.56311 14.4592 3.56311 14.625V16.7083C3.56311 16.8741 3.62896 17.0331 3.74617 17.1503C3.86338 17.2675 4.02235 17.3333 4.18811 17.3333H6.27144C6.4372 17.3333 6.59617 17.2675 6.71339 17.1503C6.8306 17.0331 6.89644 16.8741 6.89644 16.7083V14.625C6.89644 14.4592 6.8306 14.3003 6.71339 14.1831C6.59617 14.0658 6.4372 14 6.27144 14ZM6.27144 9H4.18811C4.02235 9 3.86338 9.06585 3.74617 9.18306C3.62896 9.30027 3.56311 9.45924 3.56311 9.625V11.7083C3.56311 11.8741 3.62896 12.0331 3.74617 12.1503C3.86338 12.2675 4.02235 12.3333 4.18811 12.3333H6.27144C6.4372 12.3333 6.59617 12.2675 6.71339 12.1503C6.8306 12.0331 6.89644 11.8741 6.89644 11.7083V9.625C6.89644 9.45924 6.8306 9.30027 6.71339 9.18306C6.59617 9.06585 6.4372 9 6.27144 9ZM12.9381 19H10.8548C10.689 19 10.53 19.0658 10.4128 19.1831C10.2956 19.3003 10.2298 19.4592 10.2298 19.625V21.7083C10.2298 21.8741 10.2956 22.0331 10.4128 22.1503C10.53 22.2675 10.689 22.3333 10.8548 22.3333H12.9381C13.1039 22.3333 13.2628 22.2675 13.3801 22.1503C13.4973 22.0331 13.5631 21.8741 13.5631 21.7083V19.625C13.5631 19.4592 13.4973 19.3003 13.3801 19.1831C13.2628 19.0658 13.1039 19 12.9381 19ZM12.9381 14H10.8548C10.689 14 10.53 14.0658 10.4128 14.1831C10.2956 14.3003 10.2298 14.4592 10.2298 14.625V16.7083C10.2298 16.8741 10.2956 17.0331 10.4128 17.1503C10.53 17.2675 10.689 17.3333 10.8548 17.3333H12.9381C13.1039 17.3333 13.2628 17.2675 13.3801 17.1503C13.4973 17.0331 13.5631 16.8741 13.5631 16.7083V14.625C13.5631 14.4592 13.4973 14.3003 13.3801 14.1831C13.2628 14.0658 13.1039 14 12.9381 14ZM12.9381 9H10.8548C10.689 9 10.53 9.06585 10.4128 9.18306C10.2956 9.30027 10.2298 9.45924 10.2298 9.625V11.7083C10.2298 11.8741 10.2956 12.0331 10.4128 12.1503C10.53 12.2675 10.689 12.3333 10.8548 12.3333H12.9381C13.1039 12.3333 13.2628 12.2675 13.3801 12.1503C13.4973 12.0331 13.5631 11.8741 13.5631 11.7083V9.625C13.5631 9.45924 13.4973 9.30027 13.3801 9.18306C13.2628 9.06585 13.1039 9 12.9381 9ZM29.6048 19H27.5214C27.3557 19 27.1967 19.0658 27.0795 19.1831C26.9623 19.3003 26.8964 19.4592 26.8964 19.625V21.7083C26.8964 21.8741 26.9623 22.0331 27.0795 22.1503C27.1967 22.2675 27.3557 22.3333 27.5214 22.3333H29.6048C29.7705 22.3333 29.9295 22.2675 30.0467 22.1503C30.1639 22.0331 30.2298 21.8741 30.2298 21.7083V19.625C30.2298 19.4592 30.1639 19.3003 30.0467 19.1831C29.9295 19.0658 29.7705 19 29.6048 19ZM29.6048 14H27.5214C27.3557 14 27.1967 14.0658 27.0795 14.1831C26.9623 14.3003 26.8964 14.4592 26.8964 14.625V16.7083C26.8964 16.8741 26.9623 17.0331 27.0795 17.1503C27.1967 17.2675 27.3557 17.3333 27.5214 17.3333H29.6048C29.7705 17.3333 29.9295 17.2675 30.0467 17.1503C30.1639 17.0331 30.2298 16.8741 30.2298 16.7083V14.625C30.2298 14.4592 30.1639 14.3003 30.0467 14.1831C29.9295 14.0658 29.7705 14 29.6048 14Z" fill="white"/>
<path d="M32.3131 10.6665H25.2297V1.9165C25.2297 1.58498 25.098 1.26704 24.8636 1.03262C24.6292 0.7982 24.3113 0.666504 23.9797 0.666504L16.4797 0.666504C16.1482 0.666504 15.8303 0.7982 15.5959 1.03262C15.3614 1.26704 15.2297 1.58498 15.2297 1.9165V5.6665H11.8964V1.49984C11.8964 1.27882 11.8086 1.06686 11.6523 0.910582C11.496 0.754301 11.2841 0.666504 11.0631 0.666504H10.2297C10.0087 0.666504 9.79676 0.754301 9.64048 0.910582C9.4842 1.06686 9.3964 1.27882 9.3964 1.49984V5.6665H6.06307V1.49984C6.06307 1.27882 5.97527 1.06686 5.81899 0.910582C5.66271 0.754301 5.45075 0.666504 5.22974 0.666504H4.3964C4.17539 0.666504 3.96343 0.754301 3.80715 0.910582C3.65087 1.06686 3.56307 1.27882 3.56307 1.49984V5.6665H1.47974C1.14822 5.6665 0.830273 5.7982 0.595853 6.03262C0.361432 6.26704 0.229736 6.58498 0.229736 6.9165L0.229736 25.6665C0.229736 26.1085 0.405331 26.5325 0.717892 26.845C1.03045 27.1576 1.45438 27.3332 1.8964 27.3332H31.8964C32.3384 27.3332 32.7624 27.1576 33.0749 26.845C33.3875 26.5325 33.5631 26.1085 33.5631 25.6665V11.9165C33.5631 11.585 33.4314 11.267 33.197 11.0326C32.9625 10.7982 32.6446 10.6665 32.3131 10.6665ZM6.8964 21.7082C6.8964 21.8739 6.83056 22.0329 6.71335 22.1501C6.59613 22.2673 6.43716 22.3332 6.2714 22.3332H4.18807C4.02231 22.3332 3.86334 22.2673 3.74613 22.1501C3.62892 22.0329 3.56307 21.8739 3.56307 21.7082V19.6248C3.56307 19.4591 3.62892 19.3001 3.74613 19.1829C3.86334 19.0657 4.02231 18.9998 4.18807 18.9998H6.2714C6.43716 18.9998 6.59613 19.0657 6.71335 19.1829C6.83056 19.3001 6.8964 19.4591 6.8964 19.6248V21.7082ZM6.8964 16.7082C6.8964 16.8739 6.83056 17.0329 6.71335 17.1501C6.59613 17.2673 6.43716 17.3332 6.2714 17.3332H4.18807C4.02231 17.3332 3.86334 17.2673 3.74613 17.1501C3.62892 17.0329 3.56307 16.8739 3.56307 16.7082V14.6248C3.56307 14.4591 3.62892 14.3001 3.74613 14.1829C3.86334 14.0657 4.02231 13.9998 4.18807 13.9998H6.2714C6.43716 13.9998 6.59613 14.0657 6.71335 14.1829C6.83056 14.3001 6.8964 14.4591 6.8964 14.6248V16.7082ZM6.8964 11.7082C6.8964 11.8739 6.83056 12.0329 6.71335 12.1501C6.59613 12.2673 6.43716 12.3332 6.2714 12.3332H4.18807C4.02231 12.3332 3.86334 12.2673 3.74613 12.1501C3.62892 12.0329 3.56307 11.8739 3.56307 11.7082V9.62484C3.56307 9.45908 3.62892 9.30011 3.74613 9.18289C3.86334 9.06568 4.02231 8.99984 4.18807 8.99984H6.2714C6.43716 8.99984 6.59613 9.06568 6.71335 9.18289C6.83056 9.30011 6.8964 9.45908 6.8964 9.62484V11.7082ZM13.5631 21.7082C13.5631 21.8739 13.4972 22.0329 13.38 22.1501C13.2628 22.2673 13.1038 22.3332 12.9381 22.3332H10.8547C10.689 22.3332 10.53 22.2673 10.4128 22.1501C10.2956 22.0329 10.2297 21.8739 10.2297 21.7082V19.6248C10.2297 19.4591 10.2956 19.3001 10.4128 19.1829C10.53 19.0657 10.689 18.9998 10.8547 18.9998H12.9381C13.1038 18.9998 13.2628 19.0657 13.38 19.1829C13.4972 19.3001 13.5631 19.4591 13.5631 19.6248V21.7082ZM13.5631 16.7082C13.5631 16.8739 13.4972 17.0329 13.38 17.1501C13.2628 17.2673 13.1038 17.3332 12.9381 17.3332H10.8547C10.689 17.3332 10.53 17.2673 10.4128 17.1501C10.2956 17.0329 10.2297 16.8739 10.2297 16.7082V14.6248C10.2297 14.4591 10.2956 14.3001 10.4128 14.1829C10.53 14.0657 10.689 13.9998 10.8547 13.9998H12.9381C13.1038 13.9998 13.2628 14.0657 13.38 14.1829C13.4972 14.3001 13.5631 14.4591 13.5631 14.6248V16.7082ZM13.5631 11.7082C13.5631 11.8739 13.4972 12.0329 13.38 12.1501C13.2628 12.2673 13.1038 12.3332 12.9381 12.3332H10.8547C10.689 12.3332 10.53 12.2673 10.4128 12.1501C10.2956 12.0329 10.2297 11.8739 10.2297 11.7082V9.62484C10.2297 9.45908 10.2956 9.30011 10.4128 9.18289C10.53 9.06568 10.689 8.99984 10.8547 8.99984H12.9381C13.1038 8.99984 13.2628 9.06568 13.38 9.18289C13.4972 9.30011 13.5631 9.45908 13.5631 9.62484V11.7082ZM21.8964 16.7082C21.8964 16.8739 21.8306 17.0329 21.7133 17.1501C21.5961 17.2673 21.4372 17.3332 21.2714 17.3332H19.1881C19.0223 17.3332 18.8633 17.2673 18.7461 17.1501C18.6289 17.0329 18.5631 16.8739 18.5631 16.7082V14.6248C18.5631 14.4591 18.6289 14.3001 18.7461 14.1829C18.8633 14.0657 19.0223 13.9998 19.1881 13.9998H21.2714C21.4372 13.9998 21.5961 14.0657 21.7133 14.1829C21.8306 14.3001 21.8964 14.4591 21.8964 14.6248V16.7082ZM21.8964 11.7082C21.8964 11.8739 21.8306 12.0329 21.7133 12.1501C21.5961 12.2673 21.4372 12.3332 21.2714 12.3332H19.1881C19.0223 12.3332 18.8633 12.2673 18.7461 12.1501C18.6289 12.0329 18.5631 11.8739 18.5631 11.7082V9.62484C18.5631 9.45908 18.6289 9.30011 18.7461 9.18289C18.8633 9.06568 19.0223 8.99984 19.1881 8.99984H21.2714C21.4372 8.99984 21.5961 9.06568 21.7133 9.18289C21.8306 9.30011 21.8964 9.45908 21.8964 9.62484V11.7082ZM21.8964 6.70817C21.8964 6.87393 21.8306 7.0329 21.7133 7.15011C21.5961 7.26732 21.4372 7.33317 21.2714 7.33317H19.1881C19.0223 7.33317 18.8633 7.26732 18.7461 7.15011C18.6289 7.0329 18.5631 6.87393 18.5631 6.70817V4.62484C18.5631 4.45908 18.6289 4.30011 18.7461 4.1829C18.8633 4.06568 19.0223 3.99984 19.1881 3.99984H21.2714C21.4372 3.99984 21.5961 4.06568 21.7133 4.1829C21.8306 4.30011 21.8964 4.45908 21.8964 4.62484V6.70817ZM30.2297 21.7082C30.2297 21.8739 30.1639 22.0329 30.0467 22.1501C29.9295 22.2673 29.7705 22.3332 29.6047 22.3332H27.5214C27.3556 22.3332 27.1967 22.2673 27.0795 22.1501C26.9623 22.0329 26.8964 21.8739 26.8964 21.7082V19.6248C26.8964 19.4591 26.9623 19.3001 27.0795 19.1829C27.1967 19.0657 27.3556 18.9998 27.5214 18.9998H29.6047C29.7705 18.9998 29.9295 19.0657 30.0467 19.1829C30.1639 19.3001 30.2297 19.4591 30.2297 19.6248V21.7082ZM30.2297 16.7082C30.2297 16.8739 30.1639 17.0329 30.0467 17.1501C29.9295 17.2673 29.7705 17.3332 29.6047 17.3332H27.5214C27.3556 17.3332 27.1967 17.2673 27.0795 17.1501C26.9623 17.0329 26.8964 16.8739 26.8964 16.7082V14.6248C26.8964 14.4591 26.9623 14.3001 27.0795 14.1829C27.1967 14.0657 27.3556 13.9998 27.5214 13.9998H29.6047C29.7705 13.9998 29.9295 14.0657 30.0467 14.1829C30.1639 14.3001 30.2297 14.4591 30.2297 14.6248V16.7082Z" fill="white"/>
</svg>
<h3>4th Biggest</h3>
<p>City in North Carolina</p>
               </SubBox>
               </Item>
               <Item>
               <SubBox>
               <svg width="35" height="34" viewBox="0 0 35 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.4" d="M21.2031 28.7027V21.2954C21.2031 21.0498 21.1056 20.8143 20.9319 20.6406C20.7583 20.467 20.5228 20.3694 20.2772 20.3694H14.7217C14.4761 20.3694 14.2406 20.467 14.067 20.6406C13.8933 20.8143 13.7958 21.0498 13.7958 21.2954V28.7027C13.7958 28.9483 13.6982 29.1838 13.5246 29.3574C13.351 29.5311 13.1154 29.6286 12.8699 29.6286H5.46254C5.21697 29.6286 4.98146 29.5311 4.80782 29.3574C4.63417 29.1838 4.53662 28.9483 4.53662 28.7027V18.0008C4.63963 17.9308 4.75942 17.8915 4.85317 17.807L17.4995 6.6543L30.1579 17.8174C30.247 17.8972 30.3639 17.9331 30.4623 18.0026V28.7027C30.4623 28.9483 30.3647 29.1838 30.1911 29.3574C30.0175 29.5311 29.7819 29.6286 29.5364 29.6286H22.129C21.8835 29.6286 21.648 29.5311 21.4743 29.3574C21.3007 29.1838 21.2031 28.9483 21.2031 28.7027Z" fill="white"/>
<path d="M31.3837 16.4292L18.113 4.72391C17.9439 4.57468 17.726 4.49233 17.5005 4.49233C17.2749 4.49233 17.0571 4.57468 16.8879 4.72391L3.6172 16.4298C3.43454 16.5938 3.19421 16.6786 2.94906 16.6655C2.70392 16.6523 2.47402 16.5424 2.30992 16.3598L1.07035 14.9813C0.906332 14.7987 0.82157 14.5583 0.834701 14.3132C0.847832 14.0681 0.957781 13.8382 1.14037 13.6741L15.955 0.595477C16.379 0.212207 16.9301 0 17.5016 0C18.0731 0 18.6243 0.212207 19.0482 0.595477L33.8594 13.6741C34.0421 13.8381 34.1521 14.0679 34.1654 14.3131C34.1786 14.5582 34.0939 14.7986 33.93 14.9813L32.6916 16.3598C32.6103 16.4503 32.5119 16.5238 32.4022 16.5763C32.2925 16.6287 32.1735 16.659 32.052 16.6655C31.9306 16.6719 31.809 16.6544 31.6944 16.6138C31.5797 16.5733 31.4741 16.5106 31.3837 16.4292V16.4292Z" fill="white"/>
</svg>
<h3>52,409</h3>
<p>Homes</p>
               </SubBox>
               </Item>
               <Item>
               <SubBox>
               <svg width="35" height="34" viewBox="0 0 35 34" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.4" d="M14.375 5.54183C16.303 5.54184 18.1713 6.21034 19.6616 7.43344C21.152 8.65653 22.1721 10.3585 22.5482 12.2494C22.9243 14.1404 22.6332 16.1032 21.7243 17.8035C20.8155 19.5038 19.3452 20.8364 17.564 21.5742C15.7828 22.312 13.8009 22.4093 11.9559 21.8497C10.111 21.29 8.51718 20.1079 7.44607 18.5049C6.37496 16.9018 5.89281 14.977 6.08179 13.0583C6.27078 11.1396 7.11918 9.34585 8.48246 7.98258C9.25446 7.2063 10.1728 6.59087 11.1842 6.17191C12.1957 5.75295 13.2802 5.53879 14.375 5.54183ZM14.375 0.333496C6.89587 0.333496 0.833374 6.396 0.833374 13.8752C0.833374 21.3543 6.89587 27.4168 14.375 27.4168C21.8542 27.4168 27.9167 21.3543 27.9167 13.8752C27.9167 6.396 21.8542 0.333496 14.375 0.333496Z" fill="white"/>
<path d="M33.7045 31.3687L31.862 33.2111C31.7174 33.3566 31.5455 33.472 31.3561 33.5508C31.1667 33.6296 30.9636 33.6701 30.7585 33.6701C30.5534 33.6701 30.3503 33.6296 30.1609 33.5508C29.9715 33.472 29.7996 33.3566 29.655 33.2111L23.1641 26.7202C23.0191 26.5747 22.9043 26.4021 22.8261 26.2122C22.7479 26.0223 22.7079 25.8188 22.7084 25.6135V24.5523L25.0521 22.2085H26.1133C26.3187 22.208 26.5222 22.248 26.7121 22.3262C26.902 22.4044 27.0746 22.5193 27.2201 22.6642L33.711 29.1551C34.0026 29.4501 34.1656 29.8485 34.1643 30.2632C34.1631 30.678 33.9978 31.0754 33.7045 31.3687Z" fill="white"/>
</svg>
<h3>120</h3>
<p>Weekly Inspections</p>
               </SubBox>
               </Item>
               </Grid>
           </RightBlock>
           </ContentBlock>
        </Container>
     </BannerContent>
    
  </Wrapper>
  );
  };

export default Hero;

const Wrapper = styled.div`
background-image: url(${img});
background-position:center;
background-repeat:no-repeat;
background-size: cover;
min-height:800px;
position:relative;
@media (max-width: 991px) {
    min-height:700px;
}
`;
const Container = styled.div`
max-width: 1230px;
margin: 0 auto;
padding: 0 15px;
`;
const BannerContent = styled.div`
position:absolute;
bottom:60px;
left:0;
right:0;
`;
const ContentBlock = styled.div`
display:flex;
justify-content: space-between;
align-items: center;
@media (max-width: 991px) {
    flex-direction:column-reverse;
}
`;
const LeftBlock = styled.div`
display: flex;
flex-direction: column;
padding:32px;
background: #FFFFFF;
box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.13);
border-radius: 6px;
width:460px;
@media (max-width: 991px) {
    position:absolute;
    bottom:-150px;
}
@media (max-width: 550px) {
 width:90%;
}
@media (max-width: 479px) {
  width:85%;
  padding:20px;
}
h2{
  color: #236DDE;
  font-size:28px;
  line-height:34px;
}
`;
const RightBlock = styled.div`
display:flex;
margin-left:15px;
@media (max-width: 991px) {
    flex-direction:row;
    margin-left:0px;
    position:absolute;
    bottom:200px;
}
@media (max-width: 449px) {
    bottom:230px;
}
`;
const SubBox = styled.div`
background: rgba(0, 0, 0, 0.6);
border-radius: 6px;
padding:25px;
text-align:center;
@media (min-width: 992px) and  (max-width:1160px)  {
padding:20px;
}
@media (max-width: 991px) {
display:flex;
flex-direction:row;
align-items:center;
}
@media (max-width: 449px) {
    padding:20px 15px;
}
h3{
    color: #fff;
    font-size:28px;
    line-height:34px; 
    margin:14px 0 8px 0;  
    @media (min-width: 992px) and  (max-width:1160px)  {
        font-size:22px;
    }
    @media (max-width: 991px) {
        font-size:16px;
        line-height:24px; 
        margin: 0 5px 0 15px;

    }
    @media (max-width: 345px) {
        font-size:15px;
    }
  }
  p{
      color:#fff;
      margin:0;
      @media (max-width: 345px) {
        font-size:13px;
    }
  }
`;
const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 10px 20px;
    @media (min-width: 992px) {
        grid-template-columns: repeat(3, 1fr);
    }
`;
const Item = styled.div`
`;