import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  console.log(err);
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-black text-blue-400 p-6 rounded-lg shadow-lg mx-6">
      <h1 className="text-4xl font-bold mb-4">Oops! Something went wrong :(</h1>
      <h3 className="text-2xl">{err.status}: {err.statusText}</h3>
    </div>
  );
}

export default Error;
