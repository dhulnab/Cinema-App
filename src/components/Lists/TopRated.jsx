import "./List.css";
import { useEffect, useState } from "react";
import Container from "../Container/Container";

const TopRated = () => {
  const [topRated, setTopRated] = useState([]);

  useEffect(() => {
    const fetchTopRatedFilms = async () => {
      try {
        const apiKey = "aca090f7988d2ccd2e093157a5b83f28";
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&language=en-US&page=1`
        );
        if (response.ok) {
          const data = await response.json();
          setTopRated(data.results.slice(0, 20));
        } else {
          console.error("Failed to fetch top-rated films");
        }
      } catch (error) {
        console.error("Error fetching top-rated films:", error);
      }
    };

    fetchTopRatedFilms(topRated);
  }, []);

  return (
    <div>
      <Container>
        <h2 className="header">Top Rated</h2>
        <div className="grid">
          {topRated.map((item) => (
            <div className="list" key={item.id}>
              <div className="img-cont">
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
export default TopRated;
