import React from 'react';

function Display(props) {
    return (
        <div className="display-container">
            <h1>{props.country}</h1>
            <div className="display-data">
                <div className="block confirmed">
                    <h2>Confirmed</h2>
                    <p>{props.confirmed}</p>
                </div>
                <div className="block deaths">
                    <h2>Deaths</h2>
                    <p>{props.deaths}</p>
                </div>
                <div className="block recovered">
                    <h2>Recovered</h2>
                    <p>{props.recovered}</p>
                </div>
            </div>
        </div>
    );
}

export default Display;