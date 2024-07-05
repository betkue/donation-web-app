import { Link } from "@inertiajs/react";
import React from "react";

export default function ErrorPayement() {
    return (
        <>
            <section className="items-start justify-center w-screen h-screen text-center p-[10px] py-[120px] bg-red-600">
                <div className="container my-auto">
                    <div className="flex -mx-4">
                        <div className="w-full px-4">
                            <div className="mx-auto max-w-[400px] text-center">
                                <h2 className="mb-2 text-[30px] font-bold leading-none text-white sm:text-[80px] md:text-[100px] text-center">
                                    Echec
                                </h2>
                                <h4 className="mb-3 text-[22px] font-semibold leading-tight text-white">
                                    Merci d'avoir essaye de participer a cette initiative
                                </h4>
                                <p className="mb-8 text-lg text-white">
                                    le bonnheur n'attend pas
                                </p>
                                <Link
                                    href={route("home")}
                                    className="inline-block px-4 py-3 m-auto text-base font-semibold text-center text-white transition border border-white rounded-lg hover:bg-white hover:text-red-600"
                                >
                                    Aller a la page d'acceuil
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
