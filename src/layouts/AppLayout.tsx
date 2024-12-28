import { Navigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getUser } from "../api/DevTreeAPI";
import Loader from "../components/shared/Loader";
import DevTree from "../components/DevTree";

const AppLayout = () => {
  const { data, isLoading, isError } = useQuery({
    queryFn: getUser,
    queryKey: ["user"],
    retry: 1,
    refetchOnWindowFocus: false,
  });

  if (isLoading) return <Loader />;

  if (isError) return <Navigate to="/auth/login" />;

  if (data) return <DevTree data={data} />;
};

export default AppLayout;
