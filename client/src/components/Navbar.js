import React from 'react';
const Navbar = ({ children }) => {

    return (
        <div>
            <div className="flex justify-between app-background text-white p-4 bg-yellow-500">
                <div>
                    BILLING
                </div>

            </div>
            {children}
        </div >

    )
}

export default Navbar