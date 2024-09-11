import React from "react";
import { Link } from "react-router-dom";

const NotFoundScreen = () => {
  return (
    <div className="p-4 text-center h-screen w-screen flex justify-center items-center flex-col bg-gray-100">
      <h1 className="text-3xl md:text-6xl font-bold animate-bounce text-red-500">
        OUPS !
      </h1>
      <h2 className="text-5xl md:text-6xl mb-7 text-gray-700">404</h2>
      <p className="text-lg text-gray-500 mb-4">
        La page que vous recherchez n'existe pas.
      </p>
      <Link
        to="/"
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700 transition duration-300 ease-in-out"
      >
        Retour à l'accueil
      </Link>
    </div>
  );
};

export default NotFoundScreen;
