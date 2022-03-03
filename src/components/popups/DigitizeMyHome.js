import React, {useState} from "react"
import styled from 'styled-components';
import ModalBoxContent from "../ModalBoxContent";

const DigitizeMyHome = () => {
const [modalShow, setModalShow] = useState(false);
return(
    <>
    <Button className="btn" onClick={() => setModalShow(true)}>Certify a Home</Button>
    <ModalBoxContent
          show={modalShow}
          onHide={() => setModalShow(false)}
      />  
    </>    
);
}
export default DigitizeMyHome;

const Button = styled.button`
`;