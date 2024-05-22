import React, { useState } from "react";

function FilterButtons({ filterCallback }) {
    const [activeButton, setActiveButton] = useState("");

    const handleClick = (filter) => {
        setActiveButton(filter);
        filterCallback(filter);
    };

    return (
        <div className="p-8 float-left">
            <p className="mb-3 text-[14px] font-bold">Tipo:</p>

            <button
                className={`text-[#D2D5DA] p-2 m-1 ${
                    activeButton === "" ? "bg-blue-500" : "bg-[#282B30]"
                } w-auto h-auto rounded-2xl hover:bg-slate-500 transition-colors duration-300 text-[13px]`}
                onClick={() => handleClick("")}
            >
                Todas
            </button>

            <button
                className={`text-[#D2D5DA] p-2 m-1 ${
                    activeButton === "Publica" ? "bg-blue-500" : "bg-[#282B30]"
                } w-auto h-auto rounded-2xl hover:bg-slate-500 transition-colors duration-300 text-[13px]`}
                onClick={() => handleClick("Publica")}
            >
                Públicas
            </button>
            <button
                className={`text-[#D2D5DA] p-2 m-1 ${
                    activeButton === "Privada" ? "bg-blue-500" : "bg-[#282B30]"
                } w-auto h-auto rounded-2xl hover:bg-slate-500 transition-colors duration-300 text-[13px]`}
                onClick={() => handleClick("Privada")}
            >
                Privadas
            </button>
            <button
                className={`text-[#D2D5DA] p-2 m-1 ${
                    activeButton === "Cooperativa" ? "bg-blue-500" : "bg-[#282B30]"
                } w-auto h-auto rounded-2xl hover:bg-slate-500 transition-colors duration-300 text-[13px]`}
                onClick={() => handleClick("Cooperativa")}
            >
                Cooperativas
            </button>

            <button
                className={`text-[#D2D5DA] p-2 m-1 ${
                    activeButton === "Independiente" ? "bg-blue-500" : "bg-[#282B30]"
                } w-auto h-auto rounded-2xl hover:bg-slate-500 transition-colors duration-300 text-[13px]`}
                onClick={() => handleClick("Independiente")}
            >
                Independientes
            </button>

            <button
                className={`text-[#D2D5DA] p-2 m-1 ${
                    activeButton === "Sin fines de lucro" ? "bg-blue-500" : "bg-[#282B30]"
                } w-auto h-auto rounded-2xl hover:bg-slate-500 transition-colors duration-300 text-[13px]`}
                onClick={() => handleClick("Sin fines de lucro")}
            >
                Sin Fines de Lucro
            </button>
            
        </div>
    );
}

export default FilterButtons;
