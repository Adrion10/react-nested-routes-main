import { Link } from 'react-router-dom';

const Photos = ({ data }) => {
  const { results, loading, error } = data;

  if (loading)
    return (
      <section>
        <p>Loading...</p>
      </section>
    );

  if (error) return <p>{error}</p>;

  const photos = results.map((photo) => (
    <li key={photo.id}>
      <Link to={`/photoDetail/${photo.id}`}>
        <p>{photo.title}</p>
      </Link>
    </li>
  ));

  return <section>{photos}</section>;
};

export default Photos;
