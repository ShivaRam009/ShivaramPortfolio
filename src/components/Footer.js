import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";

import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          
          <Col size={12} sm={6} >
            <div ><h1 className="text-white">Shivaram</h1></div>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon p-3">
            <a href="https://www.linkedin.com/in/shivaram-mittakola/"><img src={navIcon1} alt="" /></a>
              
            </div>
            <p>Copyright 2024. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
