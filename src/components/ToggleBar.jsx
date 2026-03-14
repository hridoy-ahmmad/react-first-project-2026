import React, { useState } from 'react';
import Container from './Container';

const ToggleBar = () => {

    const [active, setActive] = useState('All')

    return (
        <Container>
            <div className='text-right my-8'>
                <button className={`rounded-l-md btn-status  mr-[2px] ${active === 'All' && 'bg-green-600! text-white'
                    }`}
                    onClick={()=>setActive('All')}
                    >All</button>
                <button className={`btn-status  mr-[2px] border-gray-300
                    ${active === 'Pending' && 'bg-green-600! text-white'}
                    `} onClick={() => setActive('Pending')} >Pending</button>
                <button className={`btn-status  mr-[2px] border-gray-300
                ${active === 'Submitted' && 'bg-green-600! text-white'}
                `}

                onClick={()=>setActive('Submitted')}
                >Submitted</button>
                <button className={`rounded-r-md btn-status r
                ${active === 'Reviewed' && 'bg-green-600! text-white'}
                `}
                onClick={()=>setActive('Reviewed')}
                >Reviewed</button>
            </div>
        </Container>
    );
};

export default ToggleBar;