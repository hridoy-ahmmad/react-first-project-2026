import React, { use } from 'react';
import Container from './Container';
import IssuCard from './IssuCard';

const IssuesSection = ({ data, active }) => {
    const initialData = use(data)

    const filteredData = active === 'All' ? initialData : initialData.filter(el => el.status == active)
    console.log(filteredData);

    return (
        <Container>
            <div className='grid grid-cols-3 gap-3'>
                {
                    filteredData.map((d, ind) => {
                        return <IssuCard key={ind} d={d} data={data} ></IssuCard>
                    })
                }
            </div>
        </Container>
    );
};

export default IssuesSection;