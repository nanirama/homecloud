import React, { useState, useEffect, useRef }  from "react"
import { useForm } from "react-hook-form";
import axios from "axios";
import styled from 'styled-components';
const WaitlistForm = ({setFormStep, onHide }) => {
const { register, handleSubmit, formState: { errors } } = useForm();
const [isSubmitting, setIsSubmitting] = useState(false);
const [serverState, setServerState] = useState({
submitting: false,
status: null
});
useEffect(
() => {
console.log('serverState',isSubmitting)
},
[serverState, isSubmitting],
)
const handleServerResponse = (ok, msg, form) => {
setServerState({
submitting: false,
status: { ok, msg }
});
if (ok) {
    //e.reset();
}
};
const onSubmit = (data,e) => {
setIsSubmitting(true)
const form = e.target;
setServerState({ submitting: true });
axios({
method: "post",
url: "https://getform.io/f/b12e69c4-15aa-4168-a0a4-89ce0cb68715",
data: new FormData(form)
})
.then(r => {
handleServerResponse(true, "Thanks!", form);
console.log('Step 2')
setFormStep('step3');
})
.catch(r => {
    handleServerResponse(false, r, form)
console.log('Step 3',r)
});
};
return(
<>
<Popup>
   <svg className="closebtn" onClick={onHide} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M13.8925 0.33986L7.99994 6.23242L2.10738 0.339861C1.9446 0.177079 1.68091 0.177079 1.51813 0.339861L0.339617 1.51837C0.176835 1.68115 0.176835 1.94485 0.339617 2.10763L6.23217 8.00018L0.339616 13.8927C0.176834 14.0555 0.176834 14.3192 0.339616 14.482L1.51813 15.6605C1.68091 15.8233 1.9446 15.8233 2.10738 15.6605L7.99994 9.76795L13.8925 15.6605C14.0553 15.8233 14.319 15.8233 14.4818 15.6605L15.6603 14.482C15.823 14.3192 15.823 14.0555 15.6603 13.8927L9.76771 8.00018L15.6603 2.10763C15.823 1.94484 15.823 1.68115 15.6603 1.51837L14.4818 0.33986C14.319 0.177078 14.0553 0.177078 13.8925 0.33986Z" fill="#333D47"/>
   </svg>
   <h4>Join the Waitlist and provide Agent's<br/> Email for Earlier Access</h4>
   <TextBlock>
      <p>Provide your name, zip code and email. We will contact you with updates and as we rollout HomeCloud services in your area.</p>
   </TextBlock>
   <FormBlk>
      <FormInner>
          <form onSubmit={handleSubmit(onSubmit)}>
            <label>First Name*</label>
            <input type="text" name="firstname" id="firstname" placeholder="First Name*"
            {...register("firstname", { required: true })} className={errors.firstname && `error`} 
            />
            <label>Last Name*</label>
            <input type="text" name="lastname" id="lastname" placeholder="Last Name*"
            {...register("lastname", { required: true })} className={errors.lastname && `error`} 
            />
            <label>Phone Number*</label>
            <input type="text" name="phone" id="phone" placeholder="Phone Number*"
            {...register("phone", { required: true })} className={errors.phone && `error`} 
            />
            <label>Zip Code*</label>
            <input type="text" id="zipcode" name="zipcode" placeholder="Zip Code*"
            {...register("zipcode", { required: true })} className={errors.zipcode && `error`} 
            />
            <label>Your Email Address*</label>
            <input type="text" id="email" name="email" placeholder="Email Address"
            {...register("email", { required: true })} className={errors.email && `error`}
            />
            <label>Selling Real Estate Agent Email</label>
            <input type="text" id="agent_email" name="agent_email" placeholder="Agent Email Address"
            // {...register("agent_email", { required: true })} className={errors.agent_email && `error`} 
            />
            <FormBtn>
               <input type="submit" value="Join Waitlist" className="btn" disabled={isSubmitting}/>
            </FormBtn>
         </form>
      </FormInner>
   </FormBlk>
</Popup>
</>
);
}
export default WaitlistForm;

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
    margin:0 !important;
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
svg.closebtn{
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
    color:#fff;
    padding:17px 60px;
    width:100%;
    line-height:22px;
    font-size: 16px;
    font-style: normal;
    margin:0;
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
input.error, .error, input:focus, .error:focus-visible{
    border: 2px solid #DB4343 !important;
    box-sizing: border-box !important;
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
    margin-bottom:5px;
    color:#333d47;
}
form{
  text-align:left;
}
`;
const FormBtn = styled.div`
padding:10px 0 32px 0;
@media (max-width: 599px) {
    padding:25px 15px;
}
`;
