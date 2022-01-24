import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'; // 주소에서 id를 받아오기 위해서 사용
import Movie from '../components/Movie';

function Detail() {
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState();
  // 오브젝트 형식으로 id가 들어있음
  const { id } = useParams();
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    console.log(json.data.movie);
    setMovie(json.data.movie);
    setLoading(false);
  };

  useEffect(() => {
    getMovie();
  }, []);
  return (
    <div>
      <h1>Detail</h1>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <Movie
          key={movie.id}
          id={movie.id}
          coverImg={movie.medium_cover_image}
          title={movie.title}
          genres={movie.genres}
        />
      )}
    </div>
  );
}
export default Detail;
