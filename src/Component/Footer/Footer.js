import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { FaEnvelope } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className='footers'>
    <Container>

         <Row className='mt-4 justify-content-center w-95 p-3' >


<Col>
     <h3 className='text-center'>نحن دائماً جاهزون لمساعدتك</h3>
     {/* <p>تواصل معنا من خلال أي من قنوات الدعم التالية:</p> */}
</Col>

{/* <Col className='d-flex'>

    <di className='ms-4 '>
        <div className='d-flex justify-content-center'>
            <FaEnvelope />

        </div>
        <div>
            <h6>الدعم البر البريد الاكتروني</h6>
            <p>hyma0985@gmail.com</p>
        </div>
    </di>
    
    <di className='ms-4'>
    <div className='d-flex justify-content-center'>
            <FaPhone/>

        </div>
        <div>
            <h6>الدعم الهاتف</h6>
            <p>01115442864</p>
        </div>
    </di>
    

</Col> */}

</Row>

<h6 className='text-center'> جميع الحقوق محفوظه &copy;</h6>
</Container>

</div>

  )
}

export default Footer