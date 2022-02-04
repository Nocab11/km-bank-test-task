import React, {useState, useEffect} from 'react';
import "./Users.css";
import spinner from "../../spinner.gif";

const Users = () => {

    const [passengers, setPassengers] = useState([])
    const [currentPage, setCurrentPage] = useState(0)
    const [fetching, setFetching] = useState(true)

    useEffect(() => {
        if (fetching) {
            fetchPassengers()
        }
        //eslint-disable-next-line
    }, [fetching])

    useEffect(() => {
        document.addEventListener('scroll', scrollHandler)
        return () => {
            document.removeEventListener('scroll', scrollHandler)
        }
        //eslint-disable-next-line
    }, [currentPage])

    const fetchPassengers = async () => {
        try {
            const response = await fetch(`https://api.instantwebtools.net/v1/passenger?page=${currentPage}&size=10`)
            const {data} = await response.json()
            setPassengers([...passengers, ...data])
            setCurrentPage(prev => prev + 1)
            setFetching(false)
        } catch (e) {
            alert(e)
        }

    }

    const scrollHandler = e => {
        if (e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop + window.innerHeight) < 100 && currentPage < 10) {
            setFetching(true)
        }
    }

    return (
        <>
            {
                passengers.length === 0
                ?
                <img className="loader" src={spinner} alt="loader"/>
                :
                <div className="users">
                    {passengers.map(({_id, name, airline}) =>
                        <div key={_id} className="users__wrap">
                            <span className="users__name">{name}</span>
                            {airline.map(({id, name, logo}) =>
                                <div key={id} className="users__logo">
                                    <img src={logo} alt={name} className="users__logo_picture"/>
                                </div>
                            )}
                        </div>
                    )}
                </div>
            }
        </>
    );
};

export default Users;