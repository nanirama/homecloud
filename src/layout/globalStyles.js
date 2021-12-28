import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`

body{margin:0;padding:0;font-family: 'Nunito Sans', sans-serif; font-weight:400;}
ul, ol{ margin:0; padding:0 !important;}
ul li{ list-style:none;float:left;}
a, a:hover{ text-decoration:none;}

h1,h2,h3,h4,h5,h6{font-family: 'Nunito Sans', sans-serif; margin:0;color: #333D47;font-weight:700;}
h2{font-size: 44px;line-height: 54px;letter-spacing: -0.91px;margin-bottom:24px;}
h3{font-size: 24px; line-height: 30px;letter-spacing: -0.24px;}
h4{font-size: 20px; line-height: 32px;letter-spacing: -0.12px;}
h5{font-size:18px;line-height: 23px;letter-spacing: -0.11px;}

p{font-family: 'Nunito Sans', sans-serif; margin:0;margin-bottom:24px;letter-spacing: -0.09px;font-size: 16px;line-height: 22px;font-weight:400;letter-spacing: -0.09px;color: #333D47;}

.btn{background: #236DDE;border-radius: 4px;font-size: 16px;line-height: 22px;display: inline-block;text-align: center;letter-spacing: -0.09px;color:#fff;padding:17px 60px;font-weight: 700;}
.btn:hover{background: #0a5acb;color:#fff;transition-duration: 1s;filter: drop-shadow(0px 2px 10px rgba(35, 109, 222, 0.19)) drop-shadow(0px 6px 17px rgba(35, 109, 222, 0.15)); transition: ease-in-out;transition-duration: 300ms;}
.btn:focus{box-shadow: 0 0 0 0rem rgba(13,110,253,.25);}

ol{ padding-left:15px;}
ol li{font-size: 14px;line-height: 20px;letter-spacing: -0.07875px;color: #333D47;}

.is-sticky {position: fixed;top: 0; left: 0;width: 100%;z-index: 999;box-shadow: 0 2px 24px 0 rgb(0 0 0 / 15%);background:none;background-color: #fff;animation: 500ms ease-in-out 0s normal none 1 running fadeInDown;}

@media only screen and (min-width:801px){
.is-sticky nav ul li:last-child a{background: #236DDE;border-radius: 4px;font-size: 14px;line-height: 22px; border-color:#236DDE; color:#fff !important;}
}

.react-tabs__tab-list{border-bottom:none !important;margin:5px 0 0 0 !important;}
.react-tabs__tab{ position:relative;padding: 10px 20px 12px 20px !important;}
.react-tabs__tab--selected {border-radius:0 !important; border:none !important;}
.react-tabs__tab--selected:before{ content:''; position:absolute;bottom:-15px; left:0; background-color:#236DDE; width:100%;height:4px;}
.react-tabs__tab:focus {box-shadow: 0 0 0px hsl(208, 99%, 50%) !important; border-color:none !important;}


.modal-backdrop.show {opacity: .95;}






@media only screen and (max-width:767px){
h2{font-size: 35px;line-height: 45px;}
.btn{ padding:15px 30px; font-size:15px;}
.react-tabs__tab-list{ margin-top:30px !important;  display: flex;justify-content: center;}
.react-tabs__tab--selected::before {bottom:-10px;}
}
@media only screen and (max-width:599px){

}
@media only screen and (max-width:479px){
h3{font-size:20px;line-height:30px;} 
h4{font-size:18px;line-height:26px;} 
p{font-size:15px;}
}
`;
 
export default GlobalStyle;