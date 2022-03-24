import React, { useEffect, useState } from "react";
import Input from '../components/Input';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import BASE_URL from '../utils/baseUrl';
const GenerateToken = ({ setShowForm, token }) => {

    const [tokenData, setTokenData] = useState([]);

    const inputHandler = (e) => {
        var name = e.target.name;
        var value = e.target.value;
        setTokenData({ ...tokenData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        await axios.post(`${BASE_URL}/generate-token`, tokenData)
            .then(function (response) {
                console.log(response)
                setShowForm("report")

                toast.success("Token generated Successfully ")


            }).catch((error) => {
                toast.error(error?.response?.data?.message)
            })


    };

    return (
        <div className="login-form-container mt-24">
            <div className="text-center font-bold app-color uppercase text-xl header-reg ">
                Electricity Token Generation
            </div>

            <form onSubmit={handleSubmit} noValidate>

                <div className="schoolmanager-container w-full max-w-xs mx-auto">
                    <div className="grid grid-cols-6 grid-rows-2  gap-8">
                        <div className="col-span-6 gap-6 sm:col-span-6 sm:row-span-1 " data-testid="username">
                            <Input
                                name="username"
                                inputHandler={inputHandler}
                                type="text"
                                labelName="Enter your username"
                                placeholder="Enter your username"
                                className="login-input"
                                required
                            />
                        </div>
                        <div className="col-span-6 gap-6 sm:col-span-6 sm:row-span-1 " data-testid="amount">
                            <Input
                                name="amount"
                                inputHandler={inputHandler}
                                type="number"
                                labelName="Enter amount"
                                placeholder="Money"
                                className="login-input"
                                required
                            />
                        </div>
                        <div className="col-span-6 gap-6 sm:col-span-6 sm:row-span-1 " data-testid="meter">
                            <Input
                                name="meter"
                                inputHandler={inputHandler}
                                type="text"
                                placeholder="meter"
                                labelName="meter"
                                className="login-input"
                                required
                            />
                        </div>
                    </div>
                </div>
                <div className="mt-8 text-center">
                    <button className="bg-yellow-500 text-gray-800 font-bold  py-2 px-10 rounded inline-flex items-center submit" data-testid="submit-btn">
                        <span className="text-white">Generate</span>
                    </button>
                </div>
            </form>
            <ToastContainer />
        </div>

    )
}
export default GenerateToken;