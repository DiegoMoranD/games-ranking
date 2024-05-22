import React, { useState } from "react";

function FilterButtons({ filterCallback }) {
    const [activeButton, setActiveButton] = useState("");

    const handleClick = (filter) => {
        setActiveButton(filter);
        filterCallback(filter);
    };

    return (
        <div className="p-8 float-left">
            <p className="mb-3 text-[14px] font-bold">Genero:</p>

            <button
                className={`text-[#D2D5DA] p-2 m-1 ${
                    activeButton === "" ? "bg-blue-500" : "bg-[#282B30]"
                } w-auto h-auto rounded-2xl hover:bg-slate-500 transition-colors duration-300 text-[13px]`}
                onClick={() => handleClick("")}
            >
                Todos
            </button>

            <button
                className={`text-[#D2D5DA] p-2 m-1 ${
                    activeButton === "FPS" ? "bg-blue-500" : "bg-[#282B30]"
                } w-auto h-auto rounded-2xl hover:bg-slate-500 transition-colors duration-300 text-[13px]`}
                onClick={() => handleClick("FPS")}
            >
                FPS
            </button>

            <button
                className={`text-[#D2D5DA] p-2 m-1 ${
                    activeButton === "Aventura" ? "bg-blue-500" : "bg-[#282B30]"
                } w-auto h-auto rounded-2xl hover:bg-slate-500 transition-colors duration-300 text-[13px]`}
                onClick={() => handleClick("Aventura")}
            >
                Aventura
            </button>

            <button
                className={`text-[#D2D5DA] p-2 m-1 ${
                    activeButton === "Peleas" ? "bg-blue-500" : "bg-[#282B30]"
                } w-auto h-auto rounded-2xl hover:bg-slate-500 transition-colors duration-300 text-[13px]`}
                onClick={() => handleClick("Peleas")}
            >
                Peleas
            </button>

            <button
                className={`text-[#D2D5DA] p-2 m-1 ${
                    activeButton === "Supervivencia" ? "bg-blue-500" : "bg-[#282B30]"
                } w-auto h-auto rounded-2xl hover:bg-slate-500 transition-colors duration-300 text-[13px]`}
                onClick={() => handleClick("Supervivencia")}
            >
                Supervivencia
            </button>

            <button
                className={`text-[#D2D5DA] p-2 m-1 ${
                    activeButton === "Indie" ? "bg-blue-500" : "bg-[#282B30]"
                } w-auto h-auto rounded-2xl hover:bg-slate-500 transition-colors duration-300 text-[13px]`}
                onClick={() => handleClick("Indie")}
            >
                Indie
            </button>

            <button
                className={`text-[#D2D5DA] p-2 m-1 ${
                    activeButton === "Dificil" ? "bg-blue-500" : "bg-[#282B30]"
                } w-auto h-auto rounded-2xl hover:bg-slate-500 transition-colors duration-300 text-[13px]`}
                onClick={() => handleClick("Dificil")}
            >
                Dificil
            </button>

            <button
                className={`text-[#D2D5DA] p-2 m-1 ${
                    activeButton === "Disparos" ? "bg-blue-500" : "bg-[#282B30]"
                } w-auto h-auto rounded-2xl hover:bg-slate-500 transition-colors duration-300 text-[13px]`}
                onClick={() => handleClick("Disparos")}
            >
                Disparos
            </button>
        </div>
    );
}

export default FilterButtons;
