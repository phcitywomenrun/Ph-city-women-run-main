import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page" className="flex flex-col justify-center items-center gap-8 w-full min-h-screen py-32 px-5 bg-gray-100 text-center">
      
      <h1 className="text-5xl font-bold text-red-600">Oops!</h1>
      <p className="text-lg text-gray-700">Sorry, an unexpected error has occurred.</p>
      <p className="text-md text-gray-500 italic">
        {error.statusText || error.message}
      </p>
    </div>
  );
}
