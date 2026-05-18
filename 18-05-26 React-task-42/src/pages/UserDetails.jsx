import { useParams, useNavigate } from "react-router-dom";

export default function UserDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  return (
    <div>
      <h1>User Details</h1>

      <p>User ID: {id}</p>

      <button onClick={() => navigate("/users")}>
        Back to Users
      </button>
    </div>
  );
}