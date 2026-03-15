import React, { use } from 'react';
import Container from './Container';
import IssuCard from './IssuCard';

const IssuesSection = ({ data, active, setData }) => {
    const initialData = use(data)

    const filteredData = active === 'All' ? initialData : initialData.filter(el => el.status == active)
    console.log(filteredData);

    return (
        <Container>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                {filteredData.map((d, ind) => (
                    <IssuCard key={ind} d={d} initialData={initialData} setData={setData} />
                ))}
            </div>
        </Container>
    );
};

export default IssuesSection;