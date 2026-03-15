import React, { use } from 'react';
import Container from './Container';

const StatusBar = ({ data }) => {
    const initialData = use(data)
    // console.log(initialData);
    const submittedData = initialData.filter(el => el.status == 'Submitted')
    const pendingData = initialData.filter(el => el.status == 'Pending')
    const reviewedData = initialData.filter(el => el.status == 'Reviewed')
    


    return (
        <Container>
            <div className=" py-10">
                <div className=" px-4">
                    <div className="grid md:grid-cols-3 gap-6">

                        {/* Pending */}
                        <div className="bg-slate-600 text-white rounded-lg p-10 text-center">
                            <h2 className="text-3xl font-semibold">Pending</h2>
                            <p className="text-xl mt-2">{pendingData.length}</p>
                        </div>

                        {/* Submitted */}
                        <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg p-10 text-center">
                            <h2 className="text-3xl font-semibold">Submitted</h2>
                            <p className="text-xl mt-2">{submittedData.length}</p>
                        </div>

                        {/* Reviewed */}
                        <div className="bg-teal-500 text-white rounded-lg p-10 text-center">
                            <h2 className="text-3xl font-semibold">Reviewed</h2>
                            <p className="text-xl mt-2">{reviewedData.length}</p>
                        </div>

                    </div>
                </div>
            </div>
        </Container>
    );
};

export default StatusBar;