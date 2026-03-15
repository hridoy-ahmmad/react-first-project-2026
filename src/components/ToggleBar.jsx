
import Container from './Container';

const ToggleBar = ({ active, setActive }) => {

    const btns = ['All', 'Pending', 'Submitted', 'Reviewed']

    return (
        <Container>
            <div className='flex flex-wrap md:justify-end my-8 space-y-2'>
                {
                    btns.map((btn, index) => {
                        return (
                            <button key={btn}
                                type='button'
                                className={`${index === 0 && 'rounded-l-md'} ${index === btns.length - 1 && 'rounded-r-md'} btn-status  mr-[2px] ${active === btn && 'bg-green-600! text-white'
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