import React from 'react';
import axios from 'axios';
import BASE_URL from '../utils/baseUrl';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Report = ({ setShowForm, showForm }) => {
    const [reportData, setReportData] = React.useState([]);

    React.useEffect(async () => {
        await axios.get(`${BASE_URL}/report`)
            .then(function (response) {
                setReportData(response?.data?.data)

            }).catch((error) => {
                toast.error(error?.response?.data?.message)
            })
    }, [showForm])

    return (
        <div className="login-form-container mt-24">
            <div className="text-center font-bold app-color uppercase text-xl header-reg ">
                User report
            </div>
            <div className=" ml-36 mt-6 ">
                <table className="w-full divide-y divide-gray-300 ">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="px-6 py-2 text-xs text-gray-500">User name</th>
                            <th className="px-6 py-2 text-xs text-gray-500">Meter</th>
                            <th className="px-6 py-2 text-xs text-gray-500">Amount</th>
                            <th className="px-6 py-2 text-xs text-gray-500 text-center">Days of validity</th>
                            <th className="px-6 py-2 text-xs text-gray-500">Created At</th>
                            <th className="px-6 py-2 text-xs text-gray-500">Status</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-300">
                        {reportData.map((report, index) => {
                            return (
                                <>
                                    <tr className="whitespace-nowrap">
                                        <td className="px-6 py-4 text-sm text-gray-500">{report?.username}</td>
                                        <td className="px-6 py-4 text-sm text-gray-500">{report?.meter}</td>
                                        <td className="px-6 py-4 text-sm text-gray-500">{report?.amount}</td>
                                        <td className="px-6 py-4 text-sm text-gray-500">{report?.numberOfDays}</td>
                                        <td className="px-6 py-4 text-sm text-gray-500">{(report?.createdAt).toString()}</td>
                                        <td className="px-6 py-4 text-sm text-gray-500">{report?.status}</td>
                                    </tr>


                                </>
                            )
                        })}

                    </tbody>

                </table>

            </div>

            <ToastContainer />
        </div>
    )
}

export default Report;