import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import MovieList from './MovieList';

const Movies = () => {
  const [movies, setMovies] = useState([
    {
      "id": 1,
        "Title": "Harry Potter and the Sorcerer's Stone",
      "Info": "An orphaned boy enrolls in a school of wizardry, where he learns the truth about himself, his family and the terrible evil that haunts the magical world.",
      "Poster": "https://play-lh.googleusercontent.com/SF5BMT_IsoF7GBl4USjTr4CrNvXkFClA26qvzyKX6chRdGaXr6JDvnTVqO3wv2EF161VC2jD80YTedD-6HI"
  },
  {
    "id": 2,
    "Title": "Harry Potter and the Chamber of Secrets",
      "Info": "An ancient prophecy seems to be coming true when a mysterious presence begins stalking the corridors of a school of magic and leaving its victims paralyzed.",
      "Poster": "https://m.media-amazon.com/images/I/51wG4yjX0XL.jpg"
  },
  {
    "id": 3,
    "Title": "Harry Potter and the Prisoner of Azkaban",
      "Info": "Harry Potter, Ron and Hermione return to Hogwarts School of Witchcraft and Wizardry for their third year of study, where they delve into the mystery surrounding an escaped prisoner who poses a dangerous threat to the young wizard.",
      "Poster": "https://m.media-amazon.com/images/I/41wkhC7rBvL._AC_SY580_.jpg"
  },
  {
    "id": 4,
    "Title": "Harry Potter and the Goblet of Fire",
    "Info": "Harry Potter finds himself competing in a hazardous tournament between rival schools of magic, but he is distracted by recurring nightmares.",
    "Poster": "https://i.ebayimg.com/images/g/3yIAAOSwS1xfDf6G/s-l500.jpg"
},
{
    "id": 5,
    "Title": "Harry Potter and the Order of the Phoenix",
    "Info": "With their warning about Lord Voldemort's return scoffed at, Harry and Dumbledore are targeted by the Wizard authorities as an authoritarian bureaucrat slowly seizes power at Hogwarts.",
    "Poster": "https://media-cache.cinematerial.com/p/500x/953ta92w/harry-potter-and-the-order-of-the-phoenix-movie-poster.jpg?v=1456820898"
},
{
    "id": 6,
    "Title": "Harry Potter and the Half Blood Prince",
    "Info": 'As Harry Potter begins his sixth year at Hogwarts, he discovers an old book marked as "the property of the Half-Blood Prince" and begins to learn more about Lord Voldemort\'s dark past.',
    "Poster": "https://i.ebayimg.com/images/g/bKQAAOSw4ktgr1ul/s-l500.jpg"
},
{
    "id": 7,
    "Title": "Harry Potter and the Deathly Hallows Part 1",
  "Info": "As Harry, Ron and Hermione race against time and evil to destroy the Horcruxes, they uncover the existence of the three most powerful objects in the wizarding world: the Deathly Hallows.",
  "Poster": "https://goodmenproject.com/wp-content/uploads/2019/05/large_6nHrNTF3qOY19m07paTI8idEaFU.jpg"
},
{
    "id": 8,
    "Title": "Harry Potter and the Deathly Hallows Part 2",
  "Info": "Harry, Ron, and Hermione search for Voldemort's remaining Horcruxes in their effort to destroy the Dark Lord as the final battle rages on at Hogwarts.",
  "Poster": "https://i.ebayimg.com/images/g/k34AAOSw3ydV35lN/s-l500.jpg"
}]);

  
         return (
          <div className='conatiner-fluid movie-list'>
              <div className='row'>
                <MovieList movies={movies} />
              </div>
          </div>
         );
};

export default Movies;
