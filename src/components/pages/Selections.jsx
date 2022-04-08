import { Link, Outlet } from "react-router-dom";

const Selections = ({ data }) => {
  const { results, loading, error } = data;

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  const contact = () => results.filter((result) => result.title.length);

  return (
    <section>
      <h1>contact
        
      </h1>
      <Link to="titles30" state={contact()}>
        Titles 30
      </Link>

      <Outlet />
    </section>
  );
};

export default Selections;
