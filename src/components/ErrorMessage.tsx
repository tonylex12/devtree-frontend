type ErrorMessageProps = {
  children: React.ReactNode;
};

const ErrorMessage = ({ children }: ErrorMessageProps) => {
  return (
    <p className="bg-red-100 p-2 text-red-500 text-sm uppercase rounded">
      {children}
    </p>
  );
};
export default ErrorMessage;
