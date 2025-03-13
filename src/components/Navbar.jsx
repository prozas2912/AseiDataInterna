import { HomeIcon } from "@heroicons/react/24/solid";

export default function Navbar() {
  const menuItems = [
    { name: "Inicio", icon: <HomeIcon className="w-5 h-5 mr-2" />, link: "/AseiDataInterna/" },
    { name: "CEO", link: "/AseiDataInterna/ceo" },
    { name: "Comercial", link: "/AseiDataInterna/comercial" },
    { name: "Institucional", link: "/AseiDataInterna/institucional" },
    { name: "Legal", link: "/AseiDataInterna/legal" },
    { name: "Operaciones", link: "/AseiDataInterna/operaciones" },
  ];

  return (
    <div className="w-64 bg-[#001f4e] text-white h-screen flex flex-col shadow-lg p-4 font-roboto">
      {/* Logo con margen inferior */}
      <div className="w-full flex justify-center mb-10">
        <img src="/AseiDataInterna/logo.png" alt="Logo" className="w-full max-w-[150px] object-contain" />
      </div>

      {/* Título */}
      <div className="text-center text-[#f08d00] font-bold text-sm mb-6 uppercase tracking-wide">
        <span className="block">INTELIGENCIA DE</span>
        <span className="block">MERCADO</span>
      </div>

      {/* Menú */}
      <ul className="space-y-2">
        {menuItems.map((item, index) => (
          <li key={index} className="px-2">
            <a
              href={item.link}
              className={`w-full flex items-center justify-start p-3 cursor-pointer rounded-lg transition-all text-left ${
                item.name === "Inicio"
                  ? "bg-[#0088b2] text-white font-bold shadow-lg"
                  : "hover:bg-[#30b8d3]"
              }`}
            >
              {item.icon && item.icon} {/* Icono si existe */}
              <span className="text-md">{item.name}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
