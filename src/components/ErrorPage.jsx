import React from "react";
import { useRouteError, Link } from "react-router";

const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-center">
      <h1 className="text-5xl font-bold text-red-500 mb-4">Oops!</h1>
      <p className="text-lg text-gray-700 mb-2">
       No, Route Matched
      </p>
      <p className="text-gray-500 italic">
        {error.statusText || error.message}
      </p>

      <Link
        to="/login"
        className="mt-6 px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
      >
        Go Home
      </Link>
    </div>
  );
};

export default ErrorPage;
