import React, { useEffect, useState } from 'react'
import { fetchCasts } from '../../../service';

const CastList = ({ match }) => {

    let params = match.params;



    const [casts, setCasts] = useState([]);


    useEffect(() => {
        const fetchAPI = async () => {

            setCasts(await fetchCasts(params.id));

        };

        fetchAPI();
    }, [params.id]);

    const castList = casts.slice(0, 4).map((c, i) => {
        return (
            <div className="col-md-3 text-center" key={i}>
                <img
                    className="img-fluid rounded-circle mx-auto d-block"
                    src={c.img}
                    alt={c.name}
                />
                <p className="font-weight-bold text-center">{c.name}</p>
                <p
                    className="font-weight-light text-center"
                    style={{ color: "#5a606b" }}
                >
                    {c.character}
                </p>
            </div>
        )
    })

    return (
        <>
            <div className="row mt-3">
                <div className="col">
                    <p style={{ color: "#5a606b", fontWeight: "bolder" }}>CAST</p>
                </div>
            </div>
            <div className="row mt-3">
                {castList}
            </div>
        </>
    )
}

export default CastList
