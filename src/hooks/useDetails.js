import { useEffect, useState } from 'react';

const useDetails = () => {

    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('/fakedata.json')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])

    return services;


};

export default useDetails;