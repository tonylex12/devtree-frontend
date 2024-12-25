type ErrorMessageProps = {
  children: React.ReactNode;
};

const ErrorMessage = ({ children }: ErrorMessageProps) => {
  return <p className="text-red-500 text-sm">{children}</p>;
};
export default ErrorMessage;
