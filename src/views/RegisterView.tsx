import { Link } from "react-router-dom";

const RegisterView = () => {
  return (
    <>
      <nav>
        <Link to="/auth/login" className="text-white">
          Ya tienes una cuenta? Inicia sesión
        </Link>
      </nav>
    </>
  );
};

export default RegisterView;
