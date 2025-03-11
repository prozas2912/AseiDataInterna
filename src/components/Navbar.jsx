import { useState } from "react";
import { HomeIcon, ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/solid";

export default function Navbar() {
  const [selected, setSelected] = useState(null);

  const handleSelect = (index) => {
    setSelected(selected === index ? null : index);
  };

  const menuItems = [
    { name: "Inicio", icon: <HomeIcon className="w-5 h-5 mr-2" />, subItems: [] },
    { name: "CEO", subItems: ["Liderazgo", "Estrategia", "Innovación"] },
    { name: "Institucional", subItems: [] },
    { name: "Comercial", subItems: [] },
    { name: "Operaciones", subItems: ["Logística", "Producción", "Mantenimiento"] },
    { name: "Legal", subItems: [] },
  ];

  return (
    <div className="w-64 bg-[#001f4e] text-white h-screen flex flex-col shadow-lg p-4 font-roboto">
      {/* Logo con margen inferior mayor */}
      <div className="w-full flex justify-center mb-10">
        <img src="/logo.png" alt="Logo" className="w-full max-w-[150px] object-contain" />
      </div>

      {/* Título separado del logo */}
      <div className="text-center text-[#f08d00] font-bold text-sm mb-6 uppercase tracking-wide">
        <span className="block">INTELIGENCIA DE</span>
        <span className="block">MERCADO</span>
      </div>

      {/* Menú */}
      <ul className="space-y-2">
        {menuItems.map((item, index) => (
          <li key={index} className="px-2">
            <div
              className={`flex items-center justify-between p-3 cursor-pointer rounded-lg transition-all ${
                item.name === "Inicio"
                  ? "bg-[#0088b2] text-white font-bold shadow-lg"
                  : selected === index
                  ? "bg-gray-700 text-white font-bold"
                  : "hover:bg-gray-600"
              }`}
              onClick={() => handleSelect(index)}
            >
              <div className="flex items-center">
                {item.icon && item.icon} {/* Muestra el icono si existe */}
                <span className="text-md">{item.name}</span>
              </div>
              {item.subItems.length > 0 && (
                <span className="text-gray-300 text-sm">
                  {selected === index ? <ChevronUpIcon className="w-5 h-5" /> : <ChevronDownIcon className="w-5 h-5" />}
                </span>
              )}
            </div>

            {/* Submenú con animación de altura */}
            <ul
              className={`pl-6 overflow-hidden transition-all duration-500 ${
                selected === index ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              {item.subItems.map((subItem, subIndex) => (
                <li key={subIndex} className="text-gray-300 p-2 hover:text-white text-sm">
                  {subItem}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}
