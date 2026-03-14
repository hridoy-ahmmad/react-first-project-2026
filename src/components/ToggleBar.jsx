
import Container from './Container';

const ToggleBar = ({ active, setActive }) => {

    const btns = ['All', 'Pending', 'Submitted', 'Reviewed']

    return (
        <Container>
            <div className='text-right my-8'>
                {
                    btns.map((btn, index) => {
                        return (
                            <button className={`${index === 0 && 'rounded-l-md'} ${index ===btns.length-1 && 'rounded-r-md'} btn-status  mr-[2px] ${active === btn && 'bg-green-600! text-white'
                                }`}
                                onClick={() => setActive(btn)}
                            >{btn}</button>
                        )
                    })
                }
            </div>
        </Container>
    );
};

export default ToggleBar;