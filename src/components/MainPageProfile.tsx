import pfp from '../assets/default-pfp.png';

const MainPageProfile = () => {
    return ( 
        <div className="border-2 flex flex-col items-center w-[300px]">
            <span className="display flex h-[200px] mb-5"><img src={ pfp } alt="pfp" className="object-contain"/></span>
            <div className='bg-blue2 w-11/12 text-center text-white rounded border-4 border-blue3 font-bold'>Education</div>
            <div className="self-start flex flex-row">
                <div>te</div>
                <div>sa</div>
            </div>
            <div className='bg-blue2 w-11/12 text-center text-white rounded border-4 border-blue3 font-bold'>Courses Taken</div>
            <div className='bg-blue2 w-11/12 text-center text-white rounded border-4 border-blue3 font-bold'>Links</div>

        </div>
     );
}
 
export default MainPageProfile;