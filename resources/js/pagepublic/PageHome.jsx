import React from "react";

function PageHome() {
    return (
        <section className="z-10 -mt-40 justify-center flex ">
            <main className=" rounded-xl h-auto w-[1200px] mb-24 border-opacity-35">
                <div className=" text-[#6C727F] font-semibold py-8 flex-col justify-between">
                    <div className="w-full flex p-12">
                        <div className="w-[50%] bg-profile-3 bg-cover justify-center flex p-10">
                            <div>
                                <img
                                    src="/storage/imgs/material/perfil.jpg"
                                    className="w-[140px] rounded-full pb-2"
                                    alt="2"
                                    srcset=""
                                />
                                <p className="text-[12px] text-white pb-2">
                                  Desarrollado por:
                                </p>
                                <p className=" text-white text-[28px] pb-2">
                                    Diego Armando Moran Díaz
                                </p>
                                <p className=" text-[16px] text-white">
                                    Desarrollador de Software
                                </p>
                            </div>
                        </div>
                        <div className=" bg-Games bg-cover w-[50%] p-12">
                            <div>
                                <h1 className=" text-[28px] text-white text-center">Bienvenido a Game Ranking</h1>
                                <p className=" text-white pt-10 text-justify">Un proyecto Backend y FrontEnt desarrollado con los Frameworks de laravel + Vite junto con React JS </p>
                                <div className="flex justify-around pt-12">
                                  <img src="/storage/imgs/material/laravel.png" alt="s" className="w-[80px] " srcset=""/>
                                  <img src="/storage/imgs/material/react.png" alt="s" className="w-[80px]" srcset=""/>
                                  <img src="/storage/imgs/material/xampp.png" alt="s" className="w-[80px]" srcset=""/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </section>
    );
}

export default PageHome;
