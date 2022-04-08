import { useLocation } from 'react-router-dom';

const Titles100 = () => {
  const location = useLocation();

  return (
    <div>
      {location.state.map((item) => (
        <p key={item.id}>{item.title}</p>
      ))}
    </div>
  );
};

export default Titles100;
