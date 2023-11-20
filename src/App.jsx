import { useEffect, useState } from "react";
import "./App.css";
import Banner from "./components/Banner/Banner";
import Container from "./components/Container/Container";
import Header from "./components/Header/Header";
import Space from "./components/Space/Space";
import TopRated from "./components/Lists/TopRated";
import MostPopular from "./components/Lists/MostPopular";
import UpComing from "./components/Lists/UpComing";
import Footer from "./components/Footer/Footer";

function App() {
  const [filmsList, setFilmsList] = useState([]);
  const apiKey = "aca090f7988d2ccd2e093157a5b83f28"; // Replace with your actual API key

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
    },
  };

  const fetchFilms = () => {
    fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`,
      options
    )
      .then((response) => response.json())
      .then((data) => setFilmsList(data.results))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    fetchFilms();
  }, []);

  return (
    <>
      <Header />
      <Space height={20} />
      <Container>
        <Banner list={filmsList} />
      </Container>
      <Space height={30} />
      <TopRated />
      <Space height={50} />
      <MostPopular />
      <Space height={50} />
      <UpComing />
      <Space height={50} />
      <Footer/>
    </>
  );
}

export default App;
