/* eslint-disable no-unused-vars */
// ModalComponent.js
import React, { useState, useEffect } from 'react';
import Loading from './Load';
import axios from 'axios';


const ModalComponent = ({ children }) => {
    const [isLoad, setIsLoad] = useState(false);
    // const [data, setData] = useState([]);


    const [somme, setSomme] = useState('');
    const [error, setError] = useState('');
    const [errorEmail, setErrorEmail] = useState('');
    const [errorSOmme, setErrorSomme] = useState('');
    const [emailTel, setEmailTel] = useState('');

    // useEffect(() => {

    //     axios.get('https://stock-manager.smilylab.tech/api/v1/user/smilylab')
    //         .then((response) => {
    //             // Accéder au code de statut ici
    //             const statusCode = response.status;

    //             // Traiter les données et le code de statut
    //             setData(response.data);
    //             console.log(`Code de statut : ${statusCode}`);
    //         })
    //         .catch((error) => {
    //             console.error(error);
    //         });
    // }, []);


    const handleSubmit  = async(e) => {
        e.preventDefault();
        const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if (regex.test(emailTel)) {
           if(!isNaN(somme)){
            setIsLoad(true);
        const url = 'https://stock-manager.smilylab.tech/api/v1/user/smilylab';
        const data = {
            "email": emailTel,
            "password": "sexybb23jndfer8ehr3inqwdKJOWEWnqweije",
            "amount": somme,
            "currency": "XAF",
            "description": "Payment donnation", // this field is optional
            "reference": emailTel + somme
        }; const headers = {
            'Content-Type': 'application/json',
        };

        // Traitement du formulaire
        console.log(`Somme : ${somme}, Email/Téléphone : ${emailTel}`);

        setError('')
        const response = await axios.post(url, data, {
            headers,
          });

          if (response.status === 200) {
            // Succès
            window.open(response.data, '_blank')
          } else {
            // Erreur
            console.log('Échec de la requête POST', response.status);
            setError('echec payment')
          }
          setIsLoad(false);
           }
           else{

            setError('La somme doit etre un nombre')
           }
        }else{

            setError('l\'email doit etre valide')
        }

    };

    return (
        <div className="fixed inset-0 relative f-full w-full bg-primary overflow-hidden z-100">
            <div className="fixed inset-0 bg-gray-900/50 backdrop-filter-blur-sm transition-opacity duration-300" />
            <div className="fixed inset-0 mx-auto flex items-center justify-center z-50">
                {(
                    <div className="bg-white shadow-lg rounded-lg overflow-hidden w-full max-w-md p-6">

                        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
                            <h2 className="text-xl font-bold text-gray-700">Completez les champs</h2>
                            <div className="flex flex-col space-y-2">
                                <label htmlFor="somme" className="text-sm text-gray-500">Somme (FCFA)</label>
                                <input
                                    type="number"
                                    id="somme"
                                    name="somme"
                                    value={somme}
                                    onChange={(e) => setSomme(e.target.value)}
                                    className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                                />
                            </div>
                            <div className="flex flex-col space-y-2">
                                <label htmlFor="emailTel" className="text-sm text-gray-500">Email </label>
                                <input
                                    type="email"
                                    id="emailTel"
                                    name="emailTel"
                                    value={emailTel}
                                    onChange={(e) => setEmailTel(e.target.value)}
                                    className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                                />
                            </div>
                            {error &&(<div className='justify-center'>
                            <label htmlFor="emailTel" className="text-sm m-6 text-center text-red-500">{{error}} verifiez votre connexion ou email</label>
                            </div>)}
                            {isLoad ? <Loading /> : (<button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-md">Faire un don</button>)}
                            {isLoad ? <Loading /> : children}

                        </form>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ModalComponent;
