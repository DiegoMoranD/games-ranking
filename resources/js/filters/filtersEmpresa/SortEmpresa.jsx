import React from "react";

function SortSelect({ handleSort }) {
    const handleChange = (e) => {
        handleSort(e.target.value);
    };

    return (
        <div className="p-8">
            <p className="text-[14px] font-bold">Ver por:</p>
            <select
                name=""
                id=""
                className="bg-[#1B1D1F] border border-[#6C727F] rounded-xl w-[100%] border-opacity-35 p-2 mt-3 font-[500]"
                onChange={handleChange}
            >
                <option value="">Todos</option>
                <option value="mayor">Mayor Empleados</option>
                <option value="menor">Menor Empleados</option>
                <option value="antiguas">Más Antiguas</option>
                <option value="recientes">Más Recientes</option>
                <option value="a-z">De la A-Z</option>
                <option value="z-a">De la Z-A</option>
            </select>
        </div>
    );
}

export default SortSelect;
