import * as React from "react"
import { Link } from "gatsby"
import styled from "styled-components";
import { StaticImage } from "gatsby-plugin-image";
import Arrow1 from "../../assets/images/arrow1.svg";
import Arrow2 from "../../assets/images/arrow2.svg";
import Arrow3 from "../../assets/images/arrow3.svg";
import Arrow4 from "../../assets/images/arrow3-mobile.svg";
import Arrow5 from "../../assets/images/arrow1-mobile.svg";
import Arrow6 from "../../assets/images/arrow2-mobile.svg";
const Howitwork = () => {
return(
<Wrapper id="whatsincluded">
   <Container>
      <Grid>
         <Item>
            <TextBlock>
               <h2>What’s Included</h2>
               <p>HomeCloud goes beyond a traditional inspection report by providing unique and actionable insights via the app.</p>
               <HomeIcon className="showimage">
                  <StaticImage src="../../assets/images/home-icon1.png" alt="" />
               </HomeIcon>
            </TextBlock>
         </Item>
         <Item>
            <SubBlock>
               <TwoBlocks>
                  <SubBox>
                     <svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path opacity="0.4" d="M36.2683 15.5133C36.1845 15.4268 36.0848 15.3581 35.9751 15.3112C35.8653 15.2644 35.7477 15.2402 35.6289 15.2402C35.51 15.2402 35.3924 15.2644 35.2827 15.3112C35.1729 15.3581 35.0733 15.4268 34.9894 15.5133L24.7963 26L21.8239 22.9419C21.74 22.8554 21.6403 22.7867 21.5306 22.7398C21.4209 22.6929 21.3032 22.6688 21.1844 22.6688C21.0656 22.6688 20.9479 22.6929 20.8382 22.7398C20.7285 22.7867 20.6288 22.8554 20.5449 22.9419L16.3704 27.2381V30.9524H42.8518V22.2857L36.2683 15.5133ZM9.14813 32.1905V16.0953H7.94442C6.9867 16.0953 6.0682 16.4866 5.39098 17.1831C4.71377 17.8797 4.33331 18.8244 4.33331 19.8095L4.33331 39.6191C4.33331 40.6042 4.71377 41.5489 5.39098 42.2455C6.0682 42.942 6.9867 43.3334 7.94442 43.3334H36.8333C37.791 43.3334 38.7095 42.942 39.3868 42.2455C40.064 41.5489 40.4444 40.6042 40.4444 39.6191V38.381H15.1666C13.571 38.3791 12.0412 37.7263 10.9129 36.5658C9.78459 35.4053 9.14992 33.8318 9.14813 32.1905V32.1905Z" fill="#FFA126"/>
                        <path d="M44.0555 8.66699H15.1667C14.2089 8.66699 13.2904 9.05832 12.6132 9.75488C11.936 10.4514 11.5555 11.3962 11.5555 12.3813V32.1908C11.5555 33.1759 11.936 34.1206 12.6132 34.8172C13.2904 35.5138 14.2089 35.9051 15.1667 35.9051H44.0555C45.0133 35.9051 45.9318 35.5138 46.609 34.8172C47.2862 34.1206 47.6666 33.1759 47.6666 32.1908V12.3813C47.6666 11.3962 47.2862 10.4514 46.609 9.75488C45.9318 9.05832 45.0133 8.66699 44.0555 8.66699ZM19.9815 12.3813C20.6957 12.3813 21.3938 12.5991 21.9877 13.0072C22.5815 13.4154 23.0444 13.9955 23.3177 14.6742C23.591 15.3529 23.6625 16.0997 23.5232 16.8202C23.3839 17.5407 23.0399 18.2025 22.5349 18.722C22.0299 19.2414 21.3864 19.5952 20.686 19.7385C19.9855 19.8818 19.2594 19.8082 18.5996 19.5271C17.9397 19.246 17.3757 18.7699 16.9789 18.1591C16.5821 17.5483 16.3704 16.8302 16.3704 16.0956C16.3704 15.1105 16.7508 14.1657 17.428 13.4692C18.1052 12.7726 19.0237 12.3813 19.9815 12.3813V12.3813ZM42.8518 30.9527H16.3704V27.2384L20.5472 22.9422C20.6311 22.8557 20.7307 22.787 20.8405 22.7401C20.9502 22.6932 21.0679 22.6691 21.1867 22.6691C21.3055 22.6691 21.4231 22.6932 21.5329 22.7401C21.6426 22.787 21.7423 22.8557 21.8261 22.9422L24.7963 26.0003L34.9916 15.5137C35.0755 15.4271 35.1752 15.3584 35.2849 15.3115C35.3946 15.2647 35.5123 15.2405 35.6311 15.2405C35.7499 15.2405 35.8676 15.2647 35.9773 15.3115C36.0871 15.3584 36.1867 15.4271 36.2706 15.5137L42.8518 22.286V30.9527Z" fill="#FFA126"/>
                     </svg>
                     <h5>Pictures and Videos</h5>
                     <p>Every aspect of the  home</p>
                     <HoverBox>
                        <h5>We will take pictures of:</h5>
                        <p>Home Exterior, Roof, Structure,
Plumbing, Electrical, HVAC,
Doors, Windows, Decks, Bedrooms,
Bathrooms, etc.</p>
                     </HoverBox>
                  </SubBox>
                  <SubBox>
                     <svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M36.2315 41.8438H30.8148L29.6111 38.1875H22.3889L21.1852 41.8438H15.7685C14.7755 41.8438 13.963 42.6664 13.963 43.6719C13.963 44.6773 14.7755 45.5 15.7685 45.5H36.2315C37.2283 45.5 38.0371 44.6812 38.0371 43.6719C38.0371 42.6626 37.2321 41.8438 36.2315 41.8438ZM27.8056 11.375V22.199L30.7419 19.226C31.4472 18.5119 32.5895 18.5119 33.2952 19.226C34.0009 19.9401 34.0005 21.0968 33.2952 21.8113L27.2767 27.9051C26.5714 28.6192 25.429 28.6192 24.7233 27.9051L18.7048 21.8113C17.9995 21.0972 17.9995 19.9405 18.7048 19.226C19.0561 18.8627 19.5151 18.6875 19.9815 18.6875C20.4479 18.6875 20.9053 18.866 21.2582 19.2231L24.1945 22.199V11.375H9.14816V33.3125H42.8519V11.375H27.8056Z" fill="#30CD7C"/>
                        <path opacity="0.4" d="M47.6667 10.1562V34.5312C47.6667 36.5498 46.0492 38.1875 44.0556 38.1875H7.94445C5.95082 38.1875 4.33334 36.5498 4.33334 34.5312V10.1562C4.33334 8.13769 5.95082 6.5 7.94445 6.5H24.1945V11.375H9.14816V33.3125H42.8519V11.375H27.8056V6.5H44.0556C46.0492 6.5 47.6667 8.13769 47.6667 10.1562Z" fill="#30CD7C"/>
                     </svg>
                     <h5>Digitized Data</h5>
                     <p>Information is extracted  from the pictures and videos</p>
                     <HoverBox>
                        <h5>Then, we will digitize and process this data:</h5>
                        <p>Measurements, materials, configurations, brands, model numbers, Valve Locations, Filter Sizes, Electrical System Specifications, Efficiency Ratings and more.</p>
                     </HoverBox>
                  </SubBox>
               </TwoBlocks>
               <BottonBlks>
                  <Box>
                     <svg width="50" height="50" viewBox="0 0 52 53" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20.5901 37.3216L20.5912 39.9235C20.5912 40.3506 20.7192 40.7666 20.9541 41.1227L22.1112 42.8652C22.4667 43.3993 23.2744 43.8338 23.9156 43.8338H28.0946C28.7336 43.8338 29.5422 43.4001 29.8977 42.8659L31.0548 41.1234C31.2541 40.8826 31.4166 40.3467 31.4166 39.9872L31.4272 35.2155L20.6007 35.2156L20.5901 37.3216ZM11.9166 22.1891C11.9166 21.2904 11.1888 20.5612 10.2916 20.5612H5.95831C5.06118 20.5612 4.33331 21.2904 4.33331 22.1891C4.33331 23.0878 5.06118 23.817 5.95831 23.817H10.2916C11.1922 23.817 11.9166 23.0912 11.9166 22.1891ZM46.0416 20.5612H41.7083C40.8112 20.5612 40.0833 21.2904 40.0833 22.1891C40.0833 23.0878 40.8112 23.817 41.7083 23.817H46.0416C46.9388 23.817 47.6666 23.0878 47.6666 22.1891C47.6666 21.2904 46.9422 20.5612 46.0416 20.5612ZM13.2099 12.9136L9.45206 10.7431C8.95441 10.4379 8.3281 10.4297 7.81217 10.718C7.30435 11.0147 6.99087 11.557 6.99087 12.1424C6.99933 12.7359 7.32094 13.2785 7.82909 13.5586L11.5849 15.7285C12.0859 16.0371 12.7156 16.0439 13.2302 15.7542C13.738 15.4575 14.0508 14.9152 14.0508 14.3299C14.0427 13.7364 13.7177 13.1937 13.2099 12.9136ZM44.1729 30.8236L40.4151 28.6531C39.9157 28.3479 39.2898 28.3394 38.7732 28.6277C38.2653 28.9244 37.9525 29.4667 37.9525 30.0521C37.961 30.6456 38.2826 31.1882 38.7908 31.4683L42.5486 33.6388C43.3191 34.0713 44.3009 33.7999 44.741 33.0284C45.1818 32.2616 44.9245 31.2781 44.1729 30.8236ZM11.5849 28.6531L7.82842 30.8236C7.3206 31.1034 6.99899 31.6457 6.99019 32.2399C6.99019 32.8249 7.30334 33.3679 7.81149 33.6643C8.32777 33.9526 8.95373 33.9441 9.45342 33.6388L13.2112 31.4683C13.9641 31.0105 14.2181 30.027 13.7783 29.2639C13.3385 28.4903 12.3568 28.219 11.5849 28.6531ZM39.6094 15.9489C39.8887 15.9489 40.1679 15.8726 40.4219 15.7285L44.1715 13.558C44.9333 13.1001 45.179 12.1166 44.7386 11.3536C44.2985 10.5817 43.3167 10.3104 42.5462 10.7431L38.7969 12.9136C38.1536 13.2782 37.8489 14.0328 38.0351 14.745C38.2281 15.4572 38.8713 15.9489 39.6094 15.9489Z" fill="#236DDE"/>
                        <path opacity="0.4" d="M25.9661 9.16703C19.0599 9.18399 14.0833 14.7347 14.0833 21.0427C14.0833 23.9342 15.126 26.724 17.03 28.8972C18.1553 30.1778 19.8981 32.8469 20.5671 35.1022C20.5671 35.1191 20.5748 35.1368 20.5748 35.1537L31.4285 35.1538C31.4285 35.1368 31.4341 35.1191 31.4341 35.1022C32.1027 32.8469 33.8452 30.1772 34.9712 28.8972C36.8739 26.7878 37.9166 23.9932 37.9166 21.0427C37.9166 14.4986 32.5541 9.15008 25.9661 9.16703ZM26 15.6782C23.012 15.6782 20.5833 18.1112 20.5833 21.0434C20.5833 21.6454 20.1009 22.1286 19.5 22.1286C18.8991 22.1286 18.4166 21.6454 18.4166 21.0434C18.4234 16.9052 21.8088 13.5165 26 13.5077C26.6009 13.5077 27.0833 13.991 27.0833 14.5929C27.0833 15.1948 26.6026 15.6782 26 15.6782Z" fill="#236DDE"/>
                     </svg>
                     <h6>Insights</h6>
                  </Box>
                  <Box>
                     <svg width="32" height="32" viewBox="0 0 32 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17.3926 15.9583C17.3926 16.7191 16.7679 17.3312 15.9914 17.3312C15.2148 17.3312 14.5901 16.7191 14.5901 15.9583V9.55158C14.5901 8.79078 15.2148 8.17871 15.9914 8.17871C16.7679 8.17871 17.3926 8.79078 17.3926 9.55158V15.9583ZM14.123 20.9922C14.123 19.9797 14.958 19.1617 15.9914 19.1617C17.0248 19.1617 17.8597 19.9797 17.8597 20.9922C17.8597 22.0047 17.0248 22.8227 15.9914 22.8227C14.958 22.8227 14.123 22.0047 14.123 20.9922Z" fill="#236DDE"/>
                        <path opacity="0.4" d="M15.9972 0.854492C16.7153 0.854492 17.3693 1.25452 17.6787 1.88467L21.4328 9.45436L29.8227 10.6671C30.5175 10.7643 31.1014 11.2448 31.3232 11.9027C31.5451 12.5662 31.3641 13.287 30.862 13.7789L24.7783 19.6251L26.2146 28.0111C26.3313 28.6975 26.0452 29.3954 25.4614 29.8015C24.8834 30.2077 24.1185 30.2591 23.4938 29.9331L15.9972 26.0147L8.50643 29.9331C7.87587 30.2591 7.11103 30.2077 6.53302 29.8015C5.95501 29.3954 5.66309 28.6975 5.7857 28.0111L7.22196 19.6251L1.1371 13.7789C0.634403 13.287 0.455745 12.5662 0.67644 11.9027C0.89655 11.2448 1.47865 10.7643 2.17868 10.6671L10.5616 9.45436L14.3216 1.88467C14.631 1.25452 15.2849 0.854492 15.9972 0.854492ZM14.5901 9.55161V15.9584C14.5901 16.7192 15.2149 17.3312 15.9914 17.3312C16.7679 17.3312 17.3926 16.7192 17.3926 15.9584V9.55161C17.3926 8.7908 16.7679 8.17873 15.9914 8.17873C15.2149 8.17873 14.5901 8.7908 14.5901 9.55161ZM15.9914 19.1617C14.958 19.1617 14.1231 19.9797 14.1231 20.9922C14.1231 22.0047 14.958 22.8227 15.9914 22.8227C17.0248 22.8227 17.8597 22.0047 17.8597 20.9922C17.8597 19.9797 17.0248 19.1617 15.9914 19.1617Z" fill="#236DDE"/>
                     </svg>
                     <Text>
                     <h6>Action Items</h6>
                     <p>Repairs, Costs,  Recommendations</p>
                     </Text>
                  </Box>
                  <Box>
                     <svg width="32" height="32" viewBox="0 0 32 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path opacity="0.4" d="M31.188 9.63008L28.3344 7.10457V2.47945C28.3344 2.27501 28.2531 2.07894 28.1086 1.93437C27.964 1.78981 27.7679 1.7086 27.5635 1.7086H26.0218C25.8173 1.7086 25.6213 1.78981 25.4767 1.93437C25.3321 2.07894 25.2509 2.27501 25.2509 2.47945V4.37238L20.9881 0.596639C20.6766 0.319865 20.2743 0.166992 19.8576 0.166992C19.4409 0.166992 19.0386 0.319865 18.7271 0.596639L8.52338 9.63008C8.38787 9.75008 8.30552 9.91894 8.29441 10.0996C8.2833 10.2803 8.34434 10.458 8.46412 10.5936L9.36939 11.6189C9.48946 11.7542 9.65821 11.8365 9.83876 11.8478C10.0193 11.859 10.197 11.7984 10.333 11.6791L11.3755 10.7599V13.8433C13.1819 15.6126 14.5259 17.7986 15.2896 20.2091H26.7926C27.2015 20.2091 27.5937 20.0467 27.8828 19.7575C28.1719 19.4684 28.3344 19.0763 28.3344 18.6674V10.7584L29.376 11.6815C29.5123 11.8 29.6898 11.8601 29.8701 11.8488C30.0504 11.8375 30.219 11.7558 30.3395 11.6213L31.2448 10.5961C31.3648 10.4602 31.4261 10.2823 31.4155 10.1014C31.4048 9.92038 31.3231 9.75097 31.188 9.63008ZM22.1675 13.2714C22.1669 13.4756 22.0855 13.6713 21.941 13.8158C21.7966 13.9602 21.6009 14.0416 21.3967 14.0423H18.3132C18.1088 14.0423 17.9127 13.961 17.7682 13.8165C17.6236 13.6719 17.5424 13.4758 17.5424 13.2714V10.188C17.5424 9.98354 17.6236 9.78747 17.7682 9.64291C17.9127 9.49835 18.1088 9.41713 18.3132 9.41713H21.3967C21.6009 9.41777 21.7966 9.49919 21.941 9.64361C22.0855 9.78804 22.1669 9.98374 22.1675 10.188V13.2714Z" fill="#236DDE"/>
                        <path d="M0.583344 20.2092V24.8344H5.20847C5.20847 23.6077 4.72118 22.4313 3.8538 21.5639C2.98642 20.6965 1.81 20.2092 0.583344 20.2092H0.583344ZM0.583344 15.5841V18.6641C2.21959 18.6648 3.78863 19.3151 4.94563 20.4721C6.10263 21.6291 6.75291 23.1981 6.75355 24.8344H9.83359C9.83359 19.7274 5.69025 15.5841 0.583344 15.5841ZM0.583344 10.959V14.039C6.54349 14.039 11.3787 18.8742 11.3787 24.8344H14.4587C14.4587 17.1711 8.24659 10.959 0.583344 10.959Z" fill="#236DDE"/>
                     </svg>
                     <Text>
                     <h6>Home Systems</h6>
                     <p>Life Expectancy, Recall Status, etc.</p>
                     </Text>
                  </Box>
                  <Box>
                     <svg width="32" height="32" viewBox="0 0 32 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.29168 3.25033C8.29168 1.54727 9.67436 0.166992 11.375 0.166992C13.0757 0.166992 14.4583 1.54727 14.4583 3.25033C14.4583 4.95338 13.0757 6.33366 11.375 6.33366C9.67436 6.33366 8.29168 4.95338 8.29168 3.25033ZM25.25 6.33366C25.25 4.6306 26.6327 3.25033 28.3333 3.25033C30.034 3.25033 31.4167 4.6306 31.4167 6.33366C31.4167 8.03431 30.034 9.41699 28.3333 9.41699C26.6327 9.41699 25.25 8.03431 25.25 6.33366ZM31.4167 21.7503C31.4167 23.451 30.034 24.8337 28.3333 24.8337C26.6327 24.8337 25.25 23.451 25.25 21.7503C25.25 20.0497 26.6327 18.667 28.3333 18.667C30.034 18.667 31.4167 20.0497 31.4167 21.7503ZM0.583344 14.8128C0.583344 13.1122 1.96362 11.7295 3.66668 11.7295C5.36974 11.7295 6.75001 13.1122 6.75001 14.8128C6.75001 16.5135 5.36974 17.8962 3.66668 17.8962C1.96362 17.8962 0.583344 16.5135 0.583344 14.8128Z" fill="#236DDE"/>
                        <path opacity="0.4" d="M15.3063 8.02962C15.7784 7.92845 16.2698 7.83209 16.7709 7.83209C18.5101 7.83209 20.0951 8.51621 21.314 9.57128L25.2693 6.62767C25.3898 7.78392 26.1028 8.72337 27.0904 9.15696L23.1399 12.0572C23.506 12.9003 23.7084 13.8349 23.7084 14.7696C23.7084 15.5645 23.5879 16.292 23.3663 16.9713L26.8351 19.0525C25.9052 19.5728 25.2693 20.5605 25.25 21.6974L21.7765 19.6162C20.5142 20.8881 18.7365 21.7504 16.7709 21.7504C13.4707 21.7504 10.7054 19.4428 10.0068 16.3546H6.33569C6.60067 15.9017 6.75002 15.3766 6.75002 14.8129C6.75002 14.2493 6.60067 13.7241 6.33569 13.2279H10.0068C10.3633 11.6814 11.269 10.3036 12.512 9.33522L11.1052 6.32415C11.1968 6.32897 11.2835 6.33379 11.375 6.33379C12.4205 6.33379 13.3455 5.81348 13.8995 5.01855L15.3063 8.02962ZM16.7709 18.6671C18.9003 18.6671 20.625 16.9424 20.625 14.7696C20.625 12.6835 18.9003 10.9154 16.7709 10.9154C14.6414 10.9154 12.8733 12.6835 12.8733 14.7696C12.8733 16.9424 14.6414 18.6671 16.7709 18.6671Z" fill="#236DDE"/>
                     </svg>
                     <Text>
                     <h6>3rd Party Data</h6>
                     <p>Documents, <br/>Permits, etc.</p>
                     </Text>
                  </Box>
               </BottonBlks>
            </SubBlock>
         </Item>
      </Grid>
      <HomeIcon className="hidden">
                  <StaticImage src="../../assets/images/home-icon1.png" alt="" />
               </HomeIcon>
      <Paragraph>
         See <Link to="/">HomeCloud Certification Standards</Link> for a full list of what’s included
      </Paragraph>
   </Container>
</Wrapper>
);
};
export default Howitwork;
        
const Wrapper = styled.div`
padding:120px 0 50px 0;
background: linear-gradient(104.71deg, #3180F4 0%, #0047AD 54.68%, #0A5ACB 97.16%);
position:relative;
@media (max-width: 991px) {
    padding:70px 0 50px 0;
    text-align:center;
}
@media (max-width: 767px) {
    padding:50px 0;
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
justify-content:center;
align-items:center;
@media (min-width: 992px) {
   grid-template-columns: 4fr 8fr;
}
`;
const Item = styled.div`
`;
const Paragraph = styled.p`
color:#fff;
text-align:center;
margin:50px 0 0 0;
a{
   font-weight:700;
   color:#fff;
   text-decoration:underline;
   &:hover{
      color:#fff;
   }
}
@media (max-width: 767px) {
   margin:30px 0 0 0;
}
`;
const TextBlock = styled.div`
@media (min-width: 1200px) {
padding-right:30px;
}
p, h2{
    color:#fff;
}
h2{
    font-size:32px;
    line-height: 43px;
   letter-spacing: -0.44px;
   margin-bottom:12px;
}
@media (min-width:600px) and  (max-width:991px)  {
   p{
      max-width:500px;
      margin:0 auto 10px auto;
   }
}
@media (max-width: 599px) {
   p{
      margin-bottom:10px;
   }
}
`;
const HomeIcon = styled.div`
width:120px;
height:120px;
background: #FFFFFF;
box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1), 0px 0px 3px rgba(0, 0, 0, 0.16);
border-radius: 12px;
display: flex;
justify-content: center;
align-items: center;
margin-top:30px;
position:relative;
@media (max-width: 991px) {
   display:inline-flex;
   margin-top:70px;
}
&:before{
   content:'';
   position:absolute;
   left:128px;
   top:0;
   background-image:url(${Arrow3});
   background-position:right center;
   background-repeat:no-repeat;
   width:250px;
   height:100%;
   background-size: 100%;
   @media (min-width:992px) and  (max-width:1100px)  {
      width:215px;
   }
   @media (min-width:1050px) and  (max-width:1100px)  {
      width:235px;
   }
  
   @media (max-width: 991px) {
      background-image:url(${Arrow4});
      left: 55px;
      top: -65px;
      width:16px;
      height:44px;
   }
}
`;
const SubBlock = styled.div`
padding:20px;
border:2px dashed #fff;
@media (max-width: 991px) {
   margin-top:30px;
}
`;
const TwoBlocks = styled.div`
display:flex;
justify-content:space-between;
margin-bottom:80px;
@media (max-width:767px) {
   flex-wrap:wrap;
   margin-bottom:0px;
   flex-direction:column;
}
`;
const SubBox = styled.div`
width:45%;
background: #FFFFFF;
padding:58px 16px 48px 16px;
box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.13);
border-radius: 6px;
text-align:center;
display:inline-block;
position:relative;
min-height:250px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

&:hover{
svg, h5, p{
   display:none;
}
&:hover span{
   display:block;
   h5,p{
      display:block; 
   }
}
}
&:nth-child(1){
   &:before{
      content:'';
      position:absolute;
      right:-50px;
      top:0;
      background-image:url(${Arrow1});
      background-position:right center;
      background-repeat:no-repeat;
      width:100%;
      height:100%;
      @media (max-width:767px) {
         background-image:url(${Arrow5});
         right: -45px;
         top: 30px;
      }
   }
   h5{
      color: #C06C00;
   }
}
&:nth-child(2){
   @media (max-width:767px) {
      margin-left:10%;
   }
   @media (max-width:479px) {
      margin-left:15%;
   }
   &:before{
      content:'';
      position:absolute;
      left:0px;
      bottom:-63px;
      background-image:url(${Arrow2});
      background-position:bottom center;
      background-repeat:no-repeat;
      width:178px;
      height:63px;
      @media (max-width:767px) {
         background-image:url(${Arrow6});
         width:45px;
         height:101px;
         left:-45px;
         bottom:40px;
      }
     
   }
}

@media (max-width:767px) {
    width:90%;
    padding:40px 16px;
    margin-bottom:30px;
}
@media (max-width:479px) {
   width:85%;
   min-height:300px;
}
h5{
   color: #228753;
   margin-top:16px;
}
p{
   color: #525E6B;
    font-size:14px;
    margin:0;
}
`;
const HoverBox = styled.span`
display:none;
text-align:left;
h5{
   margin-top:0;
   margin-bottom:8px;
   font-size:14px;
}
p{
   font-size:13px;
}
`;

const BottonBlks = styled.div`
background: #FFFFFF;
box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.13);
border-radius: 6px;
padding:32px 16px;
display:flex;
flex-direction:row;
@media (max-width:767px) {
   flex-wrap:wrap;
}
`;
const Box = styled.div`
background: #ECF2FE;
border-radius: 6px;
padding:25px 10px;
margin:0 6px;
text-align:center;
width:25%;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
min-height:165px;
@media (max-width:767px) {
width:100%;
display:flex;
flex-direction:row;
text-align:left;
min-height:inherit;
margin:0;
margin-bottom:12px;
}

@media (min-width: 992px) and  (max-width:1100px)  {
   min-height:220px;
}
h6{
   color: #0A5ACB;
   font-size: 14px;
   line-height: 20px;
   margin:11px 0 4px 0;
}
p{
   color: #525E6B;
   font-size: 13px;
   line-height: 19px;
   margin:0;
}
&:nth-child(1){
background-color:#fff;
   h6{
      font-size:18px;
   }
   @media (max-width:767px) {
      flex-direction:column;
   }
}

`;
const Text = styled.div`
@media (max-width:767px) {
padding-left:15px;
width:100%;
p br{
   display:none;
}
}
`;
