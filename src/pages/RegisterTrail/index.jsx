import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { TrailsContext } from "../../context/trailsContext";
import Teste from "../../components/TrailForm";

const RegisterTrailPage = () => {
  const navigate = useNavigate();
  const { addTrail } = useContext(TrailsContext);

  const handleRegistration = (data) => {
    addTrail(data);
    navigate("/explorar-trilhas");
  };

  return <Teste onSubmit={handleRegistration} />;
};

export default RegisterTrailPage;
