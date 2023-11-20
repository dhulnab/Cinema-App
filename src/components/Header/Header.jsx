import "./Header.css";
import { IoIosSearch } from "react-icons/io";
import Container from "../Container/Container";
const Header = () => {
  return (
    <header>
      <Container>
        <h1>Cinema
          <div className="up"></div>
          <div className="down"></div>
        </h1>
        <div className="search-form">
          <input type="text" name="" id="" placeholder="Find Move" />
          <button>
            <IoIosSearch className="search-img"/>
          </button>
        </div>
      </Container>
    </header>
  );
};
export default Header;
