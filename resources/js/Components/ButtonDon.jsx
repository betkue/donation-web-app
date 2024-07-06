// import './App.css';
import ModalComponent from "./ModalComponent";
import React, { useRef, useEffect, useState } from "react";
import { useFlutterwave, closePaymentModal } from "flutterwave-react-v3";

import AOS from "aos";
import { useForm } from "@inertiajs/react";
import Modal from "@/Components/Modal";
import "aos/dist/aos.css"; // Import AOS styles
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import SecondaryButton from "@/Components/SecondaryButton";
import TextInput from "@/Components/TextInput";
import Loading from "./Load";

function ButtonDon() {
    useEffect(() => {
        AOS.init();
    }, []);
    const [showModal, setShowModal] = useState(false);
    const [showLoad, setShowLoad] = useState(false);
    const openModal = () => setShowModal(true);
    const closeModal = () => setShowModal(false);
    const load = () => setShowLoad(true);

    const [amount, setAmount] = useState(0);
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");

    const amountInput = useRef();
    const emailInput = useRef();
    const nameInput = useRef();
    const phoneInput = useRef();

    const {
        data,
        setData,
        delete: destroy,
        processing,
        reset,
        errors,
    } = useForm({
        amount: "",
        email: "",
        name: "",
        phone: "",
    });
    const config = {
        public_key: "FLWPUBK_TEST-5f04043717fd4dc3fa002a8190925250-X",
        tx_ref: Date.now(),
        amount: amount,
        currency: "NGN",
        payment_options: "card,mobilemoney,ussd",
        customer: {
            email: email,
            phone_number: phone,
            name: name,
        },
        customizations: {
            title: "my Payment Title",
            description: "Payment for items in cart",
            logo: "https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg",
        },
    };

    const handleFlutterPayment = useFlutterwave(config);

    const donnation = (e) => {
        e.preventDefault();
        handleFlutterPayment({
            callback: (response) => {
                console.log(response);
                closePaymentModal();
                closeModal();
            },
            onClose: () => {},
        });

        // destroy(route('profile.destroy'), {
        //     preserveScroll: true,
        //     onSuccess: () => closeModal(),
        //     // onError: () => passwordInput.current.focus(),
        //     onFinish: () => reset(),
        // });
    };

    // alert(showLoad)
    return (
        <>
            <div data-aos="fade-up" data-aos-delay="650">
                <button
                    onClick={openModal}
                    className="px-4 py-2 mt-4 text-sm font-medium text-white uppercase bg-green-600 rounded hover:bg-green-500 focus:outline-none focus:bg-green-500"
                >
                    Faire un don
                </button>

                <Modal show={showModal} onClose={closeModal}>
                    {/* <form  action="" method="get" onSubmit={donnation} className="p-6 m-auto"> */}
                    <form action="/payment" method="get" className="p-6 m-auto">
                        <p className="mt-1 text-sm text-gray-600"></p>

                        <div className="mt-6">
                            <TextInput
                                id="amount"
                                type="number"
                                name="amount"
                                min={500}
                                ref={amountInput}
                                value={data.amount || 500}
                                onChange={(e) => {
                                    const newValue = Math.max(
                                        500,
                                        e.target.value
                                    );
                                    setData("amount", newValue);
                                    setAmount(newValue);
                                }}
                                className="block w-3/4 mt-1"
                                placeholder="Amount FCFA"
                            />

                            <TextInput
                                id="email"
                                type="email"
                                name="email"
                                ref={emailInput}
                                value={data.email}
                                onChange={(e) => {
                                    setData("email", e.target.value),
                                        setEmail(e.target.value);
                                }}
                                className="block w-3/4 mt-1"
                                placeholder="Email"
                            />

                            <TextInput
                                id="name"
                                type="text"
                                name="name"
                                ref={nameInput}
                                value={data.name}
                                onChange={(e) => {
                                    setData("name", e.target.value),
                                        setName(e.target.value);
                                }}
                                className="block w-3/4 mt-1"
                                placeholder="Name"
                            />

                            <TextInput
                                id="phone"
                                type="text"
                                name="phone"
                                ref={phoneInput}
                                value={data.phone}
                                onChange={(e) => {
                                    setData("phone", e.target.value),
                                        setPhone(e.target.value);
                                }}
                                className="block w-3/4 mt-1"
                                placeholder="Phone "
                            />

                            {/* <InputError
                                        message={errors.password}
                                        className="mt-2"
                                    /> */}
                        </div>

                        <div className="flex justify-end mt-6">
                            {!showLoad && (
                                <button
                                    onClick={closeModal}
                                    className="px-4 py-2 mt-4 mr-4 text-sm font-medium text-white uppercase bg-red-600 rounded hover:bg-red-500 focus:outline-none focus:bg-red-500"
                                >
                                    Annuler
                                </button>
                            )}

                            {!showLoad && (
                                <button
                                    // onClick={load}
                                    type="submit"
                                    className="px-4 py-2 mt-4 text-sm font-medium text-white uppercase bg-green-600 rounded hover:bg-green-500 focus:outline-none focus:bg-green-500"
                                >
                                    Faire un don
                                </button>
                            )}

                            {showLoad && <Loading />}
                        </div>
                    </form>
                </Modal>
                {/* <ModalComponent>
                            <button
                                onClick={closeModal}
                                className="px-4 py-2 text-white bg-red-500 rounded-md"
                            >
                                Annuler
                            </button>
                        </ModalComponent> */}
            </div>
        </>
    );
}

export default ButtonDon;
