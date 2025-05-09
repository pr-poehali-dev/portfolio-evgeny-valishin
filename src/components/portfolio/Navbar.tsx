
import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-blue-900">Валишин Е.Р.</h1>
        <div className="flex gap-6">
          <a href="#services" className="text-gray-600 hover:text-blue-900 transition duration-300">Услуги</a>
          <a href="#about" className="text-gray-600 hover:text-blue-900 transition duration-300">О себе</a>
          <a href="#contact" className="text-gray-600 hover:text-blue-900 transition duration-300">Контакты</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
