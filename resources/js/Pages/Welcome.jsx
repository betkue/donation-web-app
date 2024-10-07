import { Link, Head } from "@inertiajs/react";
import React, { useEffect } from "react";
import hero from "../../assets/hero.jpg";
import obj1 from "../../assets/obj-1.jpg";
import obj2 from "../../assets/obj-2.jpg";
import obj4 from "../../assets/obj-4.jpg";
import obj5 from "../../assets/obj-5.jpg";
import obj6 from "../../assets/obj-6.jpg";
import ButtonDon from "@/Components/ButtonDon";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

export default function Welcome({
    auth,
    laravelVersion,
    phpVersion,
    totalDonations,
    donateurs,
    Fakedonateurs,
}) {
    useEffect(() => {
        AOS.init();
    }, []);
    const imgObjectif1 = obj1;
    const imgObjectif2 = obj2;
    const imgObjectif3 = hero;
    const imgObjectif4 = obj4;
    const imgObjectif5 = obj5;
    const imgObjectif6 = obj6;
    const whyus = obj2;
    const combinedDonateurs = [...donateurs, ...Fakedonateurs];
    return (
        <>
            <Head title="Faites un don" />
            <header>
                <div
                    className="w-screen h-screen fade-in-container"
                    style={{
                        background: `url(${hero})`,
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                        backdropFilter: "brightness(80%)",
                    }}
                    data-aos="fade-in"
                >
                    <div className="flex items-center justify-center w-full h-full bg-gray-900 text-withe bg-opacity-50">
                        <div className="p-5 text-center">
                            <h1
                                className="text-2xl font-semibold text-white uppercase md:text-3xl"
                                data-aos="fade-up"
                                data-aos-delay="150"
                            >
                                un cadeau{" "}
                                <span className="text-green-400 ">
                                    un sourire
                                </span>
                            </h1>
                            <p
                                className="text-xl font-semibold text-white md:text-2xl"
                                data-aos="fade-up"
                                data-aos-delay="300"
                            >
                                Grande campagne de don pour decembre 2024.
                                <br /> Participe toi aussi et fais un don pour
                                aider ceux dans le besoin, les petits gestes du
                                quotidien pour donner un peux de sourire aux
                                plus démunis
                            </p>

                            <h3
                                className="mt-3 text-xl font-semibold text-white uppercase "
                                data-aos="fade-up"
                                data-aos-delay="150"
                            >
                                Deja{" "}
                                <span className="text-green-400 ">
                                    {totalDonations} FCFA
                                </span>{" "}
                                de dons
                            </h3>

                            <span data-aos="fade-up" data-aos-delay="650">
                                {" "}
                                <ButtonDon />
                            </span>
                        </div>
                    </div>
                </div>
            </header>

            <main id="main">
                <section id="why-us" className="why-us">
                    <div
                        className="container justify-center text-center"
                        data-aos="fade-up"
                    >
                        <div className="w-screen text-center section-header ">
                            <h2>Pourquoi faire un don ?</h2>
                        </div>

                        <div className="grid w-screen grid-cols-1 gap-2 p-10 xl:grid-cols-2">
                            <div
                                className="img-bg"
                                style={{
                                    backgroundImage: `url(${whyus})`,
                                    backgroundSize: "cover",
                                    backgroundPosition: "center",
                                }}
                                data-aos="fade-up"
                                data-aos-delay="50"
                            ></div>

                            <div className="p-4 text-center swiper-wrapper">
                                <div
                                    className="swiper-slide"
                                    data-aos="fade-up"
                                    data-aos-delay="100"
                                >
                                    <div className="item">
                                        <h3 className="mb-3">
                                            Une nouvelle année avec le sourire
                                        </h3>
                                        <h4 className="mb-3">
                                            Offrez un peux de sourire à ceux qui
                                            sont dans le besoin
                                        </h4>
                                    </div>
                                </div>

                                <div
                                    className="swiper-slide"
                                    data-aos="fade-up"
                                    data-aos-delay="250"
                                >
                                    <div className="item">
                                        <h3 className="mb-3">
                                            Faites plaisir a partir de rien
                                        </h3>
                                        <h4 className="mb-3">
                                            Un simple geste peux changer la vie
                                            de plusieurs.
                                        </h4>
                                    </div>
                                </div>

                                <div
                                    className="swiper-slide"
                                    data-aos="fade-up"
                                    data-aos-delay="400"
                                >
                                    <div className="item">
                                        <h3 className="mb-3">
                                            Aidez ceux qui en ont besoin
                                        </h3>
                                        <h4 className="mb-3">
                                            Aucun geste n'est à négliger.
                                        </h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="step-list" className="step-list">
                    <div
                        className="container w-full overflow-hidden"
                        data-aos="fade-up"
                    >
                        <div className="w-screen text-center section-header ">
                            <h2>Nos Donateurs</h2>
                        </div>

                        <div
                            className="flex items-center space-x-6 w-full"
                            style={{
                                animation: `scroll-horizontal 20s linear infinite`,
                            }}
                        >
                            {combinedDonateurs.map((donation, index) => (
                                <div
                                    key={index}
                                    className="relative flex flex-col min-w-[250px] mt-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl"
                                    data-aos="fade-up"
                                    data-aos-delay="100"
                                >
                                    <div className="p-3">
                                        <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                                            {donation.name}
                                        </h5>
                                        <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
                                            {donation.amount}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Styles pour le défilement infini */}
                    <style jsx>{`
                        @keyframes scroll-horizontal {
                            0% {
                                transform: translateX(0);
                            }
                            100% {
                                transform: translateX(-100%);
                            }
                        }
                    `}</style>
                </section>

                <section
                    id="call-to-action"
                    className="call-to-action"
                    data-aos="fade-up"
                >
                    <div className="row justify-content-center">
                        <div className="text-center col-lg-6">
                            <h3>Disponible pour toutes informations</h3>
                            <p>Contactez nous par whatsapp.</p>
                            <a
                                className="cta-btn"
                                href="https://wa.me/+237657907407"
                                rel="noreferrer"
                                target="_blank"
                            >
                                Contactez nous
                            </a>
                        </div>
                    </div>
                </section>

                <section id="services-list" className="services-list">
                    <div className="container" data-aos="fade-up">
                        <div className="w-screen text-center section-header ">
                            <h2>Nos Objectifs</h2>
                        </div>

                        <div className="grid w-screen grid-cols-1 gap-10 text-center md:grid-cols-2 xl:grid-cols-3 place-items-center">
                            {/* <div
                                className="relative flex flex-col mt-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-96"
                                data-aos="fade-up"
                                data-aos-delay="300"
                            >
                                <div className="relative h-56 mx-4 -mt-6 overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40">
                                    <img src={imgObjectif4} alt="" />
                                </div>
                                <div className="p-6">
                                    <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                                        Formation aux métiers de la technique
                                    </h5>
                                    <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit"></p>
                                </div>
                                <div className="p-6 pt-0">
                                    <ButtonDon />
                                </div>
                            </div>

                            <div
                                className="relative flex flex-col mt-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-96"
                                data-aos="fade-up"
                                data-aos-delay="300"
                            >
                                <div className="relative h-56 mx-4 -mt-6 overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40">
                                    <img src={imgObjectif5} alt="" />
                                </div>
                                <div className="p-6">
                                    <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                                        Mise a disposition des enseignants pour
                                        les classes d'examens
                                    </h5>
                                    <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit"></p>
                                </div>
                                <div className="p-6 pt-0">
                                    <ButtonDon />
                                </div>
                            </div>

                            <div
                                className="relative flex flex-col mt-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-96"
                                data-aos="fade-up"
                                data-aos-delay="300"
                            >
                                <div className="relative h-56 mx-4 -mt-6 overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40">
                                    <img src={imgObjectif6} alt="" />
                                </div>
                                <div className="p-6">
                                    <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                                        Mise a disposition des fournitures
                                        scolaires
                                    </h5>
                                    <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit"></p>
                                </div>
                                <div className="p-6 pt-0">
                                    <ButtonDon />
                                </div>
                            </div> */}

                            <div
                                className="relative flex flex-col mt-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-96"
                                data-aos="fade-up"
                                data-aos-delay="200"
                            >
                                <div className="relative h-56 mx-4 -mt-6 overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40">
                                    <img src={imgObjectif1} alt="" />
                                </div>
                                <div className="p-6">
                                    <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                                        Depistage des maladies
                                    </h5>
                                    <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit"></p>
                                </div>
                                <div className="p-6 pt-0">
                                    <ButtonDon />
                                </div>
                            </div>

                            <div
                                className="relative flex flex-col mt-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-96"
                                data-aos="fade-up"
                                data-aos-delay="200"
                            >
                                <div className="relative h-56 mx-4 -mt-6 overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40">
                                    <img src={imgObjectif2} alt="" />
                                </div>
                                <div className="p-6">
                                    <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                                        Ravitaillement des centres
                                    </h5>
                                    <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit"></p>
                                </div>
                                <div className="p-6 pt-0">
                                    <ButtonDon />
                                </div>
                            </div>

                            <div
                                className="relative flex flex-col mt-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-96"
                                data-aos="fade-up"
                                data-aos-delay="300"
                            >
                                <div className="relative h-56 mx-4 -mt-6 overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40">
                                    <img src={imgObjectif3} alt="" />
                                </div>
                                <div className="p-6">
                                    <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                                        Aide à l'éducation
                                    </h5>
                                    <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit"></p>
                                </div>
                                <div className="p-6 pt-0">
                                    <ButtonDon />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="features" className="features">
                    <div className="details">
                        <div
                            className="container"
                            data-aos="fade-up"
                            data-aos-delay="300"
                        >
                            <div className="row">
                                <div className="col-md-6">
                                    <h4>
                                        N'attendez plus
                                        <br />
                                    </h4>
                                    <p>faites des heureux !</p>
                                    <ButtonDon />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <footer className="bg-white dark:bg-gray-900">
                <div className="w-full max-w-screen-xl p-4 py-6 mx-auto lg:py-8">
                    <div className="md:flex md:justify-between">
                        <div className="mb-6 md:mb-0">
                            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                                Faites un don
                            </span>
                        </div>
                        <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                            <div>
                                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                                    Nous contacter
                                </h2>
                                <ul className="font-medium text-gray-500 dark:text-gray-400">
                                    <li className="mb-4">+237 698 82 44 41</li>
                                    <li>+237 6 57 90 74 07</li>
                                </ul>
                            </div>
                            <div>
                                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                                    Nos Options
                                </h2>
                                <ul className="font-medium text-gray-500 dark:text-gray-400">
                                    <li className="mb-4">
                                        Donation via mobile
                                    </li>
                                    <li>
                                        Recuperation de vos objets a domicile
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                                    Contact Us
                                </h2>
                                <ul className="font-medium text-gray-500 dark:text-gray-400">
                                    <li>Douala Cameroun</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                    <div className="sm:flex sm:items-center sm:justify-between">
                        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
                            © 2024{" "}
                            <a
                                href="https://smilylab.tech/"
                                className="hover:underline"
                            >
                                Smilylab
                            </a>
                            . All Rights Reserved.
                        </span>
                        <div className="flex mt-4 sm:justify-center sm:mt-0"></div>
                    </div>
                </div>
            </footer>
        </>
    );
}
