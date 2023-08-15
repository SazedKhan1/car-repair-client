import React from 'react';
import petrol from '../../assets/About/petrol.jpg'
import petrol2 from '../../assets/About/petrol2.jpg'
const About = () => {
    return (
        <div className='mb-20'>
            <h1 className="text-6xl  text-center text-orange-400 font-bold">About us</h1>
            <div className="hero">

                <div className="hero-content grid grid-cols-1 md:grid-cols-2 gap-7 items-center justify-center">
                    <div className='relative'>
                        <img src={petrol2} className=" rounded-xl shadow-2xl " />
                        <img src={petrol} className=" shadow-2xl absolute w-2/3 rounded-xl -bottom-10 -right-5" />
                    </div>
                    <div className=''>
                        <h1 className="text-5xl font-bold">Box Office News!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>

                {/* https://ibb.co/dmgxdnJ
https://ibb.co/cJCJJZD
https://ibb.co/WWTvyx2
https://ibb.co/kMFYDb2
https://ibb.co/Y8zNbvN
https://ibb.co/bz8T0Yc
https://ibb.co/d4LBrLc */}
            </div>
        </div>
    );
};

export default About;