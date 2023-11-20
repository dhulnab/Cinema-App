import "./List.css";
import { useEffect, useState } from "react";
import Container from "../Container/Container";

const MostPopular = () => {
  const [mostPopular, setMostPopular] = useState([]);
  useEffect(() => {
    const apiKey = "aca090f7988d2ccd2e093157a5b83f28"; // Replace with your actual TMDB API key

    const fetchMostPopularFilms = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc`
        );

        if (response.ok) {
          const data = await response.json();
          setMostPopular(data.results.slice(0, 20));
        } else {
          console.error("Failed to fetch most popular films");
        }
      } catch (error) {
        console.error("Error fetching most popular films:", error);
      }
    };

    fetchMostPopularFilms();
  }, []);
  return (
    <div>
      <Container>
        <h2 className="header">Most Popular</h2>
        <div className="grid">
          {mostPopular.map((item) => (
            <div className="list" key={item.id}>
              <div  className="img-cont">
                <div
                  style={{
                    backgroundImage: `url(https://image.tmdb.org/t/p/w500${item.poster_path})`,
                  }}
                  className="cover"
                ></div>
              </div>
              <h4 className="item-title"> {item.title} </h4>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};
export default MostPopular;
