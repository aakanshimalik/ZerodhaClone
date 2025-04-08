import React from "react";

function Universe() {
    return ( 
        <div className="container mt-5">
            <div className="row text-center ">
                <h1>The Zerodha Universe</h1>
                <p>Extend your trading and investment experience even further with our partner platforms</p>
                
                
                <div className="col-4 p-3 mt-5">
                    <img src="media/images/smallcaseLogo.png"/>
                    <p className="text-small text-muted">Thematic investment platform</p>
                </div>

                <div className="col-4 p-3 mt-5">
                    <img src="media/images/streakLogo.png" style={{height:"50px",width:"40%"}}/>
                    <p className="text-small text-muted">Algo & strategy platform</p>
                </div>

                <div className="col-4 p-3 mt-5">
                    <img src="media/images/sensibullLogo.svg"style={{height:"50px",width:"40%"}}/>
                    <p className="text-small text-muted">Options trading platform</p>
                </div>

                <div className="col-4 p-3 mt-5">
                    <img src="media/images/ZerodhaFundHouse.png" style={{height:"50px",width:"40%"}}/>
                    <p className="text-small text-muted">Asset management</p>
                </div>

                <div className="col-4 p-3 mt-5">
                    <img src="media/images/goldenpiLogo.png"/>
                    <p className="text-small text-muted">Bonds trading platform</p>
                </div>

                <div className="col-4 p-3 mt-5">
                    <img src="media/images/dittoLogo.png" style={{height:"50px",width:"40%"}}/>
                    <p className="text-smalltext-muted">Insurance</p>
                </div>

                <button style={{width:"20%",margin:" 0 auto",background: "blue",color:"white",borderRadius:"5%"}} className='p-2 fs-5 mb-5' >Signup now</button>

                

            </div>
        </div>
     );
}

export default Universe;