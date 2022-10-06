import { useNavigate, useParams } from "react-router-dom";

const TicketPage = () => {

  const { id } = useParams();
  const navigate = useNavigate(); 

  return (
    <>
      <h2>Ticket ID: {id}</h2>
    <button 
      onClick={(e) => {
        e.preventDefault();
        navigate('/tickets');
      }}
    >
      Back
    </button>

    </>
  );
}

export default TicketPage;