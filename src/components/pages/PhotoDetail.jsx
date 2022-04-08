import { useParams, useNavigate } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';

const PhotoDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const url = `https://jsonplaceholder.typicode.com/photos/${id}`;
  const initialState = { results: null, loading: true, error: null };

  const { results, loading, error } = useFetch(url, initialState);

  if (loading)
    return (
      <section>
        <p>Loading...</p>
      </section>
    );

  if (error) return <p>{error}</p>;

  return (
    <section className='details'>
      <p>{results.title}</p>
      <img src={results.thumbnailUrl} alt={results.title} />
      <button onClick={() => navigate(-1)}>Return</button>
    </section>
  );
};

export default PhotoDetail;
