import Container from "../Container/Container";
import { BsFillSuitHeartFill } from "react-icons/bs";
import { LiaInstagram } from "react-icons/lia";
import "./Footer.css"

function Footer() {
  return (
    <div className="pearent">
      <Container>
        <div className="holder">
          <h5 className="footer-txt">
            Made with{" "}
            <span className="imojy">
              <BsFillSuitHeartFill />
            </span>{" "}
            by Dhulfiqar Ali
          </h5>
          <div className="insta-cont">
            <a className="insta" href="https://www.instagram.com/f18__b/">
              <LiaInstagram />
            </a>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Footer;
