import { useNavigate, useParams } from "react-router-dom";

const UserPage = () => {

  const { id, fullName } = useParams();
  const navigate = useNavigate(); 

  return (
    <>
      <h2>This is the user page ({fullName})</h2>

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

export default UserPage;