import { useNavigate, useParams } from "react-router-dom";

const User = () => {

  const { id } = useParams();
  const navigate = useNavigate(); 

  return (
    <>
      <h2>This is the user page ({id})</h2>

      {/* <Link to={`/users`}>Back</Link> */}

    <button 
      onClick={(e) => {
        e.preventDefault();
        navigate('/users');
      }}
    >
      Back
    </button>

    </>
  );
}

export default User;