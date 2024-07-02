// import './App.css';
import ModalComponent from "./ModalComponent";
import React, { useRef, useEffect, useState } from "react";
import AOS from "aos";
import { useForm } from "@inertiajs/react";
import Modal from "@/Components/Modal";
import "aos/dist/aos.css"; // Import AOS styles
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import SecondaryButton from "./SecondaryButton";
import TextInput from "./TextInput";

function ButtonDon() {
    useEffect(() => {
        AOS.init();
    }, []);
    const [showModal, setShowModal] = useState(false);
    const openModal = () => setShowModal(true);
    const closeModal = () => setShowModal(false);
    const passwordInput = useRef();

    const {
        data,
        setData,
        delete: destroy,
        processing,
        reset,
        errors,
    } = useForm({
        password: "",
    });

    const donnation = (e) => {
        // e.preventDefault();
        // destroy(route("profile.destroy"), {
        //     preserveScroll: true,
        //     onSuccess: () => closeModal(),
        //     onError: () => passwordInput.current.focus(),
        //     onFinish: () => reset(),
        // });
    };
    return (
        <>
            <div data-aos="fade-up" data-aos-delay="650">
                <button
                    onClick={openModal}
                    className="mt-4 px-4 py-2 bg-green-600 text-white text-sm uppercase font-medium rounded hover:bg-green-500 focus:outline-none focus:bg-green-500"
                >
                    Faire un don
                </button>

                <Modal show={showModal} onClose={closeModal}>
                    <form onSubmit={donnation} className="p-6">
                        <h2 className="text-lg font-medium text-gray-900">
                            Are you sure you want to delete your account?
                        </h2>

                        <p className="mt-1 text-sm text-gray-600">
                            Once your account is deleted, all of its resources
                            and data will be permanently deleted. Please enter
                            your password to confirm you would like to
                            permanently delete your account.
                        </p>

                        <div className="mt-6">
                            <InputLabel
                                htmlFor="password"
                                value="Password"
                                className="sr-only"
                            />

                            <TextInput
                                id="password"
                                type="password"
                                name="password"
                                ref={passwordInput}
                                value={data.password}
                                onChange={(e) =>
                                    setData("password", e.target.value)
                                }
                                className="mt-1 block w-3/4"
                                isFocused
                                placeholder="Password"
                            />

                            <TextInput
                                id="password"
                                type="password"
                                name="password"
                                ref={passwordInput}
                                value={data.password}
                                onChange={(e) =>
                                    setData("password", e.target.value)
                                }
                                className="mt-1 block w-3/4"
                                isFocused
                                placeholder="Password"
                            />

                            <InputError
                                message={errors.password}
                                className="mt-2"
                            />
                        </div>

                        <div className="mt-6 flex justify-end">
                            <SecondaryButton onClick={closeModal}>
                                Cancel
                            </SecondaryButton>

                            <button
                                onClick={openModal}
                                className="mt-4 px-4 py-2 bg-green-600 text-white text-sm uppercase font-medium rounded hover:bg-green-500 focus:outline-none focus:bg-green-500"
                            >
                                Faire un don
                            </button>
                        </div>
                    </form>
                </Modal>
                {/* <ModalComponent>
                            <button
                                onClick={closeModal}
                                className="px-4 py-2 bg-red-500 text-white rounded-md"
                            >
                                Annuler
                            </button>
                        </ModalComponent> */}
            </div>
        </>
    );
}

export default ButtonDon;


// const handleSubmit  = async(e) => {
//     e.preventDefault();
//     const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

//     if (regex.test(emailTel)) {
//        if(!isNaN(somme)){
//         setIsLoad(true);
//     const url = 'https://stock-manager.smilylab.tech/api/v1/user/smilylab';
//     const data = {
//         "email": emailTel,
//         "password": "sexybb23jndfer8ehr3inqwdKJOWEWnqweije",
//         "amount": somme,
//         "currency": "XAF",
//         "description": "Payment donnation", // this field is optional
//         "reference": emailTel + somme
//     }; const headers = {
//         'Content-Type': 'application/json',
//     };

//     // Traitement du formulaire
//     console.log(`Somme : ${somme}, Email/Téléphone : ${emailTel}`);

//     setError('')
//     const response = await axios.post(url, data, {
//         headers,
//       });

//       if (response.status === 200) {
//         // Succès
//         window.open(response.data, '_blank')
//       } else {
//         // Erreur
//         console.log('Échec de la requête POST', response.status);
//         setError('echec payment')
//       }
//       setIsLoad(false);
//        }
//        else{

//         setError('La somme doit etre un nombre')
//        }
//     }else{

//         setError('l\'email doit etre valide')
//     }

// };

// return (
//     <div className="fixed inset-0 overflow-hidden z-50">
//         <div className="fixed inset-0 bg-gray-900/50 backdrop-filter-blur-sm transition-opacity duration-300" />
//         <div className="fixed inset-0 mx-auto flex items-center justify-center z-50">
//             {(
//                 <div className="bg-white shadow-lg rounded-lg overflow-hidden w-full max-w-md p-6">

//                     <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
//                         <h2 className="text-xl font-bold text-gray-700">Completez les champs</h2>
//                         <div className="flex flex-col space-y-2">
//                             <label htmlFor="somme" className="text-sm text-gray-500">Somme (FCFA)</label>
//                             <input
//                                 type="number"
//                                 id="somme"
//                                 name="somme"
//                                 value={somme}
//                                 onChange={(e) => setSomme(e.target.value)}
//                                 className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
//                             />
//                         </div>
//                         <div className="flex flex-col space-y-2">
//                             <label htmlFor="emailTel" className="text-sm text-gray-500">Email </label>
//                             <input
//                                 type="email"
//                                 id="emailTel"
//                                 name="emailTel"
//                                 value={emailTel}
//                                 onChange={(e) => setEmailTel(e.target.value)}
//                                 className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
//                             />
//                         </div>
//                         {error &&(<div class='justify-center'>
//                         <label htmlFor="emailTel" className="text-sm m-6 text-center text-red-500">{{error}} verifiez votre connexion ou email</label>
//                         </div>)}
//                         {isLoad ? <Loading /> : (<button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-md">Faire un don</button>)}
//                         {isLoad ? <Loading /> : children}

//                     </form>
//                 </div>
//             )}
//         </div>
//     </div>
// );
