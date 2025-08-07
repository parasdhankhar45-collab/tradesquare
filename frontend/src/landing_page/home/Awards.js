import React from 'react';
function  Awards() {
    return (  
        <div className='container'>
            <div className='row'>
                <div className='col-6'>
                    <img src ="media/largestBroker.svg"/>

                </div>
                <div className='col-6'>
                     <h1> Path To Portfolio </h1>
                     <h6>our smart hub for trading, investing, 
                      and tracking your portfolio—where markets meet mastery.</h6>
                      <ul>
                        <li>
                            <p>mutual funds</p>
                        </li>
                        <li>
                            <p>future and options</p>
                        </li>
                        <li>
                            <p>govt bonds</p>
                        </li>
                      </ul>
                      <img src = "media/pressLogos.png" style ={{width:"80%"}}/>
                      </div>

            </div>
        </div>
    );
}

export default  Awards;