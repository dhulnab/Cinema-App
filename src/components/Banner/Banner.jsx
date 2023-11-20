import "./Banner.css";
import { IoPlayCircleOutline } from "react-icons/io5";
import { IoIosArrowBack,IoIosArrowForward } from "react-icons/io";
import { useEffect, useState } from "react";


const Banner = ({ list }) => {
  const [slideIndex, setSlideIndex] = useState(0);
  const [filteredFilms, setFilteredFilms] = useState([]);

  const nextSlide = () => {
    slideIndex === filteredFilms.length - 1
      ? setSlideIndex(0)
      : setSlideIndex(slideIndex + 1);
  };
  const preivousSlide = () => {
    slideIndex === 0
      ? setSlideIndex(filteredFilms.length - 1)
      : setSlideIndex(slideIndex - 1);
  };

  useEffect(() => {
    setFilteredFilms([...list.slice(-20,-10)]);
  }, [list]);


  return (
    <div className="slider">
      {filteredFilms.map((item, index) => (
        <div
          key={index}
          className={slideIndex === index ? "item" : "item item-hidden"}
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/w500${item.backdrop_path})`,
          }}
        >
          <div className="dark">
            <div className="caption">
              <h1>{item.title}</h1>
              <p className="desc">{item.overview}</p>
              <h2 className="year">{new Date(item.release_date).getFullYear()}</h2>
              <div className="watch">
                <IoPlayCircleOutline className="watch-img" />
                <span className="watch-btn">Show trailer</span>
              </div>
            </div>
            <div className="move">
              <span className="arrow" onClick={preivousSlide}>
                <IoIosArrowBack />
              </span>
              <span className="num-move">{slideIndex+1}/{filteredFilms.length}</span>
              <span className="arrow" onClick={nextSlide}>
                <IoIosArrowForward />
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Banner;
