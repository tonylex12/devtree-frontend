import { Link } from "react-router-dom";

const LoginView = () => {
  return (
    <>
      <nav>
        <Link to="/auth/register" className="text-white">
          No tienes una cuenta? Registrate
        </Link>
      </nav>
    </>
  );
};
export default LoginView;
