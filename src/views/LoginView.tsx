import { Link } from "react-router-dom";

const LoginView = () => {
  return (
    <>
      <h1 className="text-white text-4xl font-bold">Iniciar Sesión</h1>
      <nav className="mt-10">
        <Link
          to="/auth/register"
          className="text-white text-center text-lg block"
        >
          No tienes una cuenta? Registrate
        </Link>
      </nav>
    </>
  );
};
export default LoginView;
