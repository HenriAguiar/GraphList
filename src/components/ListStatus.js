// src/components/ListStatus.js
import React from 'react';

const ListStatus = ({ valores }) => (
  <div className="bg-gray-900 text-gray-200 p-4 rounded-lg h-[316px]">
    <h5 className="text-lg font-bold mb-3 text-white">
      Situação da Lista
    </h5>
    <ul className="flex gap-2">
      {valores.map((item, index) => (
        <li
          key={index}
          className="bg-gray-800 text-gray-300 py-2 px-4 rounded-lg shadow-md relative"
        >
          <span className="absolute top-1 left-1 text-xs text-azul-logo">{index}</span>
          <span className="text-lg">{item}</span>
        </li>
      ))}
    </ul>
  </div>
);

export default ListStatus;
