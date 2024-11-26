// src/components/Header.js
import React from 'react';

const Header = () => (
  <div className="bg-white text-gray-200 pt-3 relative pl-6">
    <div className="flex items-center">
      <img src="/icon.png" alt="Logo" className="w-9 h-9 mr-3" />
      <h1 className="text-2xl font-bold text-azul-very">GraphList</h1>
    </div>
  </div>
);

export default Header;
