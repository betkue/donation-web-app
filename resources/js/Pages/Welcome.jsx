import { Link, Head } from "@inertiajs/react";
import React, { useEffect } from "react";
import hero from "../../assets/hero.jpg";
import obj1 from "../../assets/obj-1.jpg";
import obj2 from "../../assets/obj-2.jpg";
import ButtonDon from "@/Components/ButtonDon";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

export default function Welcome({ auth, laravelVersion, phpVersion,totalDonations }) {
    useEffect(() => {
        AOS.init();
    }, []);
    const imgObjectif1 = obj1;
    const imgObjectif2 = obj2;
    const imgObjectif3 = hero;
    const whyus = obj2;

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
                    <div className="flex items-center justify-center w-full h-full bg-gray-900 bg-opacity-50">
                        <div className="p-5 text-center">
                            <h1
                                className="text-2xl font-semibold text-white uppercase md:text-3xl"
                                data-aos="fade-up"
                                data-aos-delay="150"
                            >
                                la rentrée scolaire{" "}
                                <span className="text-green-400 ">
                                    pour tous
                                </span>
                            </h1>
                            <p
                                className="text-xl font-semibold text-white md:text-2xl"
                                data-aos="fade-up"
                                data-aos-delay="300"
                            >
                                Grande campagne de don du 10 Juillet au 31 Août.
                                <br /> Participe toi aussi et fais un don pour
                                aider ceux dans le besoin, les petits gestes du
                                quotidien peuvent changer la vie des plus
                                demunis
                            </p>

                            <h3
                                className="mt-3 text-xl font-semibold text-white uppercase "
                                data-aos="fade-up"
                                data-aos-delay="150"
                            >
                                Deja{" "}
                                <span className="text-green-400 ">
                                   { totalDonations } FCFA
                                </span>
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
                                            faites du vide chez vous
                                        </h3>
                                        <h4 className="mb-3">
                                            Débarassez vous de tout ce qui vous
                                            encombre.
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
                    <div className="container" data-aos="fade-up">
                        <div className="w-screen text-center section-header ">
                            <h2>Nos Etapes</h2>
                        </div>

                        <div className="grid w-screen grid-cols-1 gap-2 p-10 md:grid-cols-2 xl:grid-cols-3 place-items-center">
                            <div
                                className="relative flex flex-col mt-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-96"
                                data-aos="fade-up"
                                data-aos-delay="100"
                            >
                                <div className="p-6">
                                    <svg
                                        width="64px"
                                        height="64px"
                                        viewBox="-0.5 0 25 25"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <g
                                            id="SVGRepo_bgCarrier"
                                            stroke-width="0"
                                        ></g>
                                        <g
                                            id="SVGRepo_tracerCarrier"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        ></g>
                                        <g id="SVGRepo_iconCarrier">
                                            {" "}
                                            <path
                                                d="M12.8702 16.97V18.0701C12.8702 18.2478 12.7995 18.4181 12.6739 18.5437C12.5482 18.6694 12.3778 18.74 12.2001 18.74C12.0224 18.74 11.852 18.6694 11.7264 18.5437C11.6007 18.4181 11.5302 18.2478 11.5302 18.0701V16.9399C11.0867 16.8668 10.6625 16.7051 10.2828 16.4646C9.90316 16.2241 9.57575 15.9097 9.32013 15.54C9.21763 15.428 9.16061 15.2817 9.16016 15.1299C9.16006 15.0433 9.17753 14.9576 9.21155 14.8779C9.24557 14.7983 9.29545 14.7263 9.35809 14.6665C9.42074 14.6067 9.49484 14.5601 9.57599 14.5298C9.65713 14.4994 9.7436 14.4859 9.83014 14.49C9.91602 14.4895 10.0009 14.5081 10.0787 14.5444C10.1566 14.5807 10.2254 14.6338 10.2802 14.7C10.6 15.1178 11.0342 15.4338 11.5302 15.6099V13.0701C10.2002 12.5401 9.53015 11.77 9.53015 10.76C9.55019 10.2193 9.7627 9.70353 10.1294 9.30566C10.4961 8.9078 10.9929 8.65407 11.5302 8.59009V7.47998C11.5302 7.30229 11.6007 7.13175 11.7264 7.0061C11.852 6.88045 12.0224 6.81006 12.2001 6.81006C12.3778 6.81006 12.5482 6.88045 12.6739 7.0061C12.7995 7.13175 12.8702 7.30229 12.8702 7.47998V8.58008C13.2439 8.63767 13.6021 8.76992 13.9234 8.96924C14.2447 9.16856 14.5226 9.43077 14.7402 9.73999C14.8284 9.85568 14.8805 9.99471 14.8901 10.1399C14.8928 10.2256 14.8783 10.3111 14.8473 10.3911C14.8163 10.4711 14.7696 10.5439 14.7099 10.6055C14.6502 10.667 14.5787 10.7161 14.4998 10.7495C14.4208 10.7829 14.3359 10.8001 14.2501 10.8C14.1607 10.7989 14.0725 10.7787 13.9915 10.7407C13.9104 10.7028 13.8384 10.648 13.7802 10.5801C13.5417 10.2822 13.2274 10.054 12.8702 9.91992V12.1699L13.1202 12.27C14.3902 12.76 15.1802 13.4799 15.1802 14.6299C15.163 15.2399 14.9149 15.8208 14.4862 16.2551C14.0575 16.6894 13.4799 16.9449 12.8702 16.97ZM11.5302 11.5901V9.96997C11.3688 10.0285 11.2298 10.1363 11.1329 10.2781C11.0361 10.4198 10.9862 10.5884 10.9902 10.76C10.9984 10.93 11.053 11.0945 11.1483 11.2356C11.2435 11.3767 11.3756 11.4889 11.5302 11.5601V11.5901ZM13.7302 14.6599C13.7302 14.1699 13.3902 13.8799 12.8702 13.6599V15.6599C13.1157 15.6254 13.3396 15.5009 13.4985 15.3105C13.6574 15.1202 13.74 14.8776 13.7302 14.6299V14.6599Z"
                                                fill="#ff9300"
                                            ></path>{" "}
                                            <path
                                                d="M12.58 3.96997H6C4.93913 3.96997 3.92178 4.39146 3.17163 5.1416C2.42149 5.89175 2 6.9091 2 7.96997V17.97C2 19.0308 2.42149 20.0482 3.17163 20.7983C3.92178 21.5485 4.93913 21.97 6 21.97H18C19.0609 21.97 20.0783 21.5485 20.8284 20.7983C21.5786 20.0482 22 19.0308 22 17.97V11.8999"
                                                stroke="#ff9300"
                                                stroke-width="1.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            ></path>{" "}
                                            <path
                                                d="M16.3398 8.57992L21.9998 2.91992"
                                                stroke="#ff9300"
                                                stroke-width="1.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            ></path>{" "}
                                            <path
                                                d="M17.4805 2.91992H22.0005V7.44992"
                                                stroke="#ff9300"
                                                stroke-width="1.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            ></path>{" "}
                                        </g>
                                    </svg>
                                    <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                                        Donation via mobile
                                    </h5>
                                    <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
                                        Faites des dons via vos comptes Oranges
                                        money et MTN money
                                    </p>
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
                                <div className="p-6">
                                    <svg
                                        width="64px"
                                        height="64px"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <g
                                            id="SVGRepo_bgCarrier"
                                            stroke-width="0"
                                        ></g>
                                        <g
                                            id="SVGRepo_tracerCarrier"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        ></g>
                                        <g id="SVGRepo_iconCarrier">
                                            {" "}
                                            <path
                                                d="M8.42229 20.6181C10.1779 21.5395 11.0557 22.0001 12 22.0001V12.0001L2.63802 7.07275C2.62423 7.09491 2.6107 7.11727 2.5974 7.13986C2 8.15436 2 9.41678 2 11.9416V12.0586C2 14.5834 2 15.8459 2.5974 16.8604C3.19479 17.8749 4.27063 18.4395 6.42229 19.5686L8.42229 20.6181Z"
                                                fill="#1C274C"
                                            ></path>{" "}
                                            <path
                                                opacity="0.7"
                                                d="M17.5774 4.43152L15.5774 3.38197C13.8218 2.46066 12.944 2 11.9997 2C11.0554 2 10.1776 2.46066 8.42197 3.38197L6.42197 4.43152C4.31821 5.53552 3.24291 6.09982 2.6377 7.07264L11.9997 12L21.3617 7.07264C20.7564 6.09982 19.6811 5.53552 17.5774 4.43152Z"
                                                fill="#1C274C"
                                            ></path>{" "}
                                            <path
                                                opacity="0.5"
                                                d="M21.4026 7.13986C21.3893 7.11727 21.3758 7.09491 21.362 7.07275L12 12.0001V22.0001C12.9443 22.0001 13.8221 21.5395 15.5777 20.6181L17.5777 19.5686C19.7294 18.4395 20.8052 17.8749 21.4026 16.8604C22 15.8459 22 14.5834 22 12.0586V11.9416C22 9.41678 22 8.15436 21.4026 7.13986Z"
                                                fill="#1C274C"
                                            ></path>{" "}
                                            <path
                                                d="M6.32334 4.48382C6.35617 4.46658 6.38926 4.44922 6.42261 4.43172L7.91614 3.64795L17.0169 8.65338L21.0406 6.64152C21.1783 6.79745 21.298 6.96175 21.4029 7.13994C21.5525 7.39396 21.6646 7.66352 21.7487 7.96455L17.7503 9.96373V13.0002C17.7503 13.4144 17.4145 13.7502 17.0003 13.7502C16.5861 13.7502 16.2503 13.4144 16.2503 13.0002V10.7137L12.7503 12.4637V21.9042C12.4934 21.9682 12.2492 22.0002 12.0003 22.0002C11.7515 22.0002 11.5072 21.9682 11.2503 21.9042V12.4637L2.25195 7.96455C2.33601 7.66352 2.44813 7.39396 2.59771 7.13994C2.70264 6.96175 2.82232 6.79745 2.96001 6.64152L12.0003 11.1617L15.3865 9.46857L6.32334 4.48382Z"
                                                fill="#1C274C"
                                            ></path>{" "}
                                        </g>
                                    </svg>
                                    <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                                        Recuperation de vos objets a domicile
                                    </h5>
                                    <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
                                        Nous recuperons vos Dons ( Objets en
                                        état ou réparable ) à domicile pour les
                                        stockquer dans nos divers locaux
                                    </p>
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
                                <div className="p-6">
                                    <svg
                                        width="64px"
                                        height="64px"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <g
                                            id="SVGRepo_bgCarrier"
                                            stroke-width="0"
                                        ></g>
                                        <g
                                            id="SVGRepo_tracerCarrier"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        ></g>
                                        <g id="SVGRepo_iconCarrier">
                                            {" "}
                                            <path
                                                d="M12 3C10.3431 3 9 4.34315 9 6C9 7.65685 10.3431 9 12 9C13.6569 9 15 7.65685 15 6"
                                                stroke="#00f900"
                                                stroke-width="1.5"
                                                strokeLinecap="round"
                                            ></path>{" "}
                                            <path
                                                d="M5.5 15C3.84315 15 2.5 16.3431 2.5 18C2.5 19.6569 3.84315 21 5.5 21C7.15685 21 8.5 19.6569 8.5 18"
                                                stroke="#00f900"
                                                stroke-width="1.5"
                                                strokeLinecap="round"
                                            ></path>{" "}
                                            <path
                                                d="M18.5 21C16.8431 21 15.5 19.6569 15.5 18C15.5 16.3431 16.8431 15 18.5 15C20.1569 15 21.5 16.3431 21.5 18"
                                                stroke="#00f900"
                                                stroke-width="1.5"
                                                strokeLinecap="round"
                                            ></path>{" "}
                                            <path
                                                d="M20 13C20 10.6106 18.9525 8.46589 17.2916 7M4 13C4 10.6106 5.04752 8.46589 6.70838 7M10 20.748C10.6392 20.9125 11.3094 21 12 21C12.6906 21 13.3608 20.9125 14 20.748"
                                                stroke="#00f900"
                                                stroke-width="1.5"
                                                strokeLinecap="round"
                                            ></path>{" "}
                                        </g>
                                    </svg>
                                    <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                                        Distribution des dons aux divers
                                        organismes et orphelinats
                                    </h5>
                                    <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
                                        Une fois les objets mis à jour, nous
                                        repartissons les differents lots de
                                        fassons à satisfaire le plus de
                                        personnes possibles
                                    </p>
                                </div>
                                <div className="p-6 pt-0">
                                    <ButtonDon />
                                </div>
                            </div>
                        </div>
                    </div>
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
                                href="https://wa.me/237650510166"
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
                                    <p>
                                        faites des heureux via vos objets que
                                        vous n'utilisez plus!
                                    </p>
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
                                    <li className="mb-4">+237 6 55 20 31 46</li>
                                    <li>+237 6 50 51 01 62</li>
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
                                    <li className="mb-4">pk 17</li>
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
