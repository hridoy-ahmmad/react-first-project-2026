import React, { use } from 'react';
import Container from './Container';
import IssuCard from './IssuCard';

const IssuesSection = ({ loadData }) => {
    const data = use(loadData)
    console.log(data);


    return (
        <Container>
            <div className='grid grid-cols-3 gap-3'>
                {
                    data.map(d => {
                        return <IssuCard d={d}></IssuCard>
                    })
                }
            </div>
        </Container>
    );
};

export default IssuesSection;