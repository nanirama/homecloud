import React, { useState, useEffect }  from "react"
import axios from "axios";
import styled from 'styled-components';
import { StaticImage } from "gatsby-plugin-image";
const WaitlistForm = ({setFormStep, onHide }) => {
      const [serverState, setServerState] = useState({
        submitting: false,
        status: null
      });
      useEffect(
        () => {
          console.log('serverState',serverState)
        },
        [serverState],
      )
      const handleServerResponse = (ok, msg, form) => {
        setServerState({
          submitting: false,
          status: { ok, msg }
        });
        if (ok) {
          form.reset();
        }
      };
      const handleOnSubmit = e => {
        e.preventDefault();
        const form = e.target;
        setServerState({ submitting: true });
        axios({
          method: "post",
          url: "https://getform.io/f/b12e69c4-15aa-4168-a0a4-89ce0cb68715",
          data: new FormData(form)
        })
          .then(r => {
            handleServerResponse(true, "Thanks!", form);
            setFormStep('step3');
          })
          .catch(r => {
            handleServerResponse(false, r.response.data.error, form);
          });
      };
return(
    <>
               <Popup>
               <svg onClick={onHide} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.8925 0.33986L7.99994 6.23242L2.10738 0.339861C1.9446 0.177079 1.68091 0.177079 1.51813 0.339861L0.339617 1.51837C0.176835 1.68115 0.176835 1.94485 0.339617 2.10763L6.23217 8.00018L0.339616 13.8927C0.176834 14.0555 0.176834 14.3192 0.339616 14.482L1.51813 15.6605C1.68091 15.8233 1.9446 15.8233 2.10738 15.6605L7.99994 9.76795L13.8925 15.6605C14.0553 15.8233 14.319 15.8233 14.4818 15.6605L15.6603 14.482C15.823 14.3192 15.823 14.0555 15.6603 13.8927L9.76771 8.00018L15.6603 2.10763C15.823 1.94484 15.823 1.68115 15.6603 1.51837L14.4818 0.33986C14.319 0.177078 14.0553 0.177078 13.8925 0.33986Z" fill="#333D47"/>
                </svg>
                  <h4>Join the Waitlist and provide Agent's<br/> Email for Earlier Access</h4>
                  <TextBlock>
                      <p>Provide your name, zip code and email. We will contact you with updates and as we rollout HomeCloud services in your area.</p>
                  </TextBlock>
                  <FormBlk>
                  <FormInner>
                  <form onSubmit={handleOnSubmit}>
                     <label>First Name</label>
                     <input type="text" name="firstname" id="firstname" placeholder="First Name" />
                     <label>Last Name</label>
                     <input type="text" name="lastname" id="lastname" placeholder="Last Name" />
                     <label>Zip Code*</label>
                     <input type="text" id="zipcode" name="zipcode" placeholder="Zip Code*" />
                     <label>Your Email Address</label>
                     <input type="text" id="email" name="email" placeholder="Email Address" />
                     <label>Selling Real Estate Agent Email</label>
                     <input type="text" id="agent_email" name="agent_email" placeholder="Email Address" />
                     <FormBtn>
                     <input type="submit" value="Join Waitlist"  className="btn"/>
                     {/* <Button onClick={e=>(setFormStep('step3'))} className="btn">
                     Join Waitlist</Button> */}
                     </FormBtn>
                     </form>
                     </FormInner>
                    
                     </FormBlk>
               </Popup>
    {/* <ModalBlock>
               <h3>Success</h3>
               <Popup>
                   <Success>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <path d="M13.8925 0.33986L7.99994 6.23242L2.10738 0.339861C1.9446 0.177079 1.68091 0.177079 1.51813 0.339861L0.339617 1.51837C0.176835 1.68115 0.176835 1.94485 0.339617 2.10763L6.23217 8.00018L0.339616 13.8927C0.176834 14.0555 0.176834 14.3192 0.339616 14.482L1.51813 15.6605C1.68091 15.8233 1.9446 15.8233 2.10738 15.6605L7.99994 9.76795L13.8925 15.6605C14.0553 15.8233 14.319 15.8233 14.4818 15.6605L15.6603 14.482C15.823 14.3192 15.823 14.0555 15.6603 13.8927L9.76771 8.00018L15.6603 2.10763C15.823 1.94484 15.823 1.68115 15.6603 1.51837L14.4818 0.33986C14.319 0.177078 14.0553 0.177078 13.8925 0.33986Z" fill="#333D47"/>
                  </svg>
                  <StaticImage src="../../assets/images/success.png" alt="" />
                     <h4>We are set!</h4>
                     <p>Thanks for joining our Waitlist.</p>
                     </Success>
               </Popup>
               </ModalBlock> */}
          
    </>
);
}
export default WaitlistForm;

const ModalBlock = styled.div`
margin-bottom:30px;
h3{
    margin-bottom:30px;
    }
`;
const Popup = styled.div`
width:100%;
background: #FFFFFF;
box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.13);
border-radius: 8px;
display: flex;
position:relative;
padding:0px;
flex-direction: column;
align-items: center;

h4{
width:100%;
text-align:left;
padding:32px;
@media (max-width: 599px) {
    padding:25px 15px;
}
@media (max-width: 400px) {
    font-size: 16px;
br{
    display:none;
}
}
}
svg{
position:absolute;
right:32px;
top:36px;
cursor:pointer;
    @media (max-width: 599px) {
        right:15px;
    }
}
.btn{
width:100%;
}
input{
border: 1px solid #DDE1E9;
width: 100%;
line-height: 40px;
padding: 0 15px;
border-radius: 4px;
margin-bottom: 24px;
color: #6C7884;
font-size: 14px;
font-style:italic;
}
select{
    border: 1px solid #DDE1E9;
width: 100%;
line-height: 40px;
padding: 0 15px;
border-radius: 4px;
margin-bottom: 24px;
color: #6C7884;
font-size: 14px;
font-style:italic;
height: 40px;
background-color: transparent;
}
`;
const TextBlock = styled.div`
padding:32px;
padding-bottom:0;
border-top:1px solid #DDE1E9;
@media (max-width: 599px) {
    padding:25px 15px;
}
p{
    background: #F6F7F9;
    border-radius: 6px;
    padding:12px;
    text-align:left;
    font-size: 14px;
    line-height: 20px;
    margin:0;
}
`;
const FormBlk = styled.div`
width:100%;
`;
const FormInner = styled.div`
width:100%;
padding:32px;
padding-bottom: 10px;
border-bottom:1px solid #DDE1E9;
@media (max-width: 599px) {
    padding:25px 15px;
}
label{
    font-weight: bold;
    font-size: 14px;
    line-height: 20px;
    margin-bottom:4px;
}
`;
const FormBtn = styled.div`
padding:32px;
@media (max-width: 599px) {
    padding:25px 15px;
}
`;
const Button = styled.div`
`;

const Success = styled.div`
padding:90px 32px 80px 32px;
@media (max-width: 599px) {
    padding:25px 15px;
}
text-align:center;
h4{
    padding:0;
    margin:40px 0 12px 0;
    text-align:center;
    font-size: 24px;
}
`;