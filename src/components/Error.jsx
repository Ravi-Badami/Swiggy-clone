import { useRouteError } from "react-router-dom";
const Error = () => {
  const error = useRouteError();

  return (
    <>
      <div>something went wrong</div>
      <div className="">
        {error.status}:{error.statusText}
      </div>
    </>
  );
};

export default Error;
