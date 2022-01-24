import React, { useEffect, useState } from 'react'
import { fetchPersons } from '../../../service';

const TrendingPerson = () => {

    const [persons, setPersons] = useState([]);

    useEffect(() => {
        const fetchAPI = async () => {

            setPersons(await fetchPersons());

        };

        fetchAPI();
    }, []);

    const trendingPerson = persons.slice(0, 4).map((p, i) => {
        return (
            <div className="col-md-3 text-center" key={i}>
                <img
                    className="img-fluid rounded-circle mx-auto d-block"
                    src={p.profileImg}
                    alt={p.name}
                />
                <p className="font-weight-bold text-center">{p.name}</p>
                <p
                    className="font-weight-light text-center"
                    style={{ color: "#5a606b" }}
                >
                    Trending fot {p.known}
                </p>
            </div>
        );
    });

    return (
        <>
            <div className="row mt-3">
                <div className="col">
                <hr className="mt-5" style={{ borderTop: '1px solid #5a606b' }}></hr>
                    <p className="font-weight-bold" style={{ color: "#5a606b" }}>
                        TRENDING PERSON ON THIS WEEK
                    </p>
                </div>
            </div>

            
            <div className="row mt-3">
                {trendingPerson}
            </div>
        </>
    )
}

export default TrendingPerson
