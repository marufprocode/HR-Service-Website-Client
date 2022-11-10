import React, { useContext, useEffect, useState } from 'react';
import ServiceCard from "../components/shared/ServiceCard";
import serviceTopImg from "../../assets/images/servicetop.jpg";
import { ColorRing } from  'react-loader-spinner';
import { sharedContext } from '../../context/UserContext';
import useTitleHelmet from '../../hooks/TitleHelmet';

const Services = () => {
    const [services, setServices] = useState([]);
    const {loading} = useContext(sharedContext); 
    useTitleHelmet('services')
    
    const serviceTop = {
        background: `linear-gradient(rgba(0, 0, 0, 0.30), rgba(0, 0, 0, 0.30)), url(${serviceTopImg})`,
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed',
    }
    useEffect(()=> {
        fetch('https://assignment-11-server-c6xnqjpx1-marufprocode.vercel.app/services')
        .then(res => res.json())
        .then(data => setServices(data));
    }, []);

    if(loading) return (
        <div className='flex justify-center min-h-screen items-center'>
            <ColorRing
            visible={true}
            height="80"
            width="80"
            ariaLabel="blocks-loading"
            wrapperStyle={{}}
            wrapperClass="blocks-wrapper"
            />
        </div>
    )


    return (
        <div>
            <div className="h-[150px] relative" style={serviceTop}>
                <div className="absolute bottom-0 left-[50%] transform translate-y-1/2 translate-x-[-50%]"><p className="bg-sky-700 py-3 px-5 inline font-bold text-white">My All Services</p></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center my-10 gap-5 px-5">
                {
                    services?.map((service)=> <ServiceCard key={service._id} service={service}/>)
                }
            </div>
        </div>
    );
};

export default Services;