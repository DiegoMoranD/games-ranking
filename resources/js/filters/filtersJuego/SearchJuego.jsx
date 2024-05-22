import React from 'react'

function SearchJuego({ handleSearch }) {
    const handleChange = (e) => {
        handleSearch(e.target.value.toLowerCase());
    };

    return (
        <div className="mr-10">
            <input
                type="search"
                name=""
                placeholder="Buscar Juego"
                id=""
                className="rounded-xl bg-[#282B30] w-[250px] h-[40px] indent-6 content-center"
                onChange={handleChange}
            />
        </div>
    );
}

export default SearchJuego