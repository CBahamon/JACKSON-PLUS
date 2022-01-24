import React from 'react'

const Footer = () => {
    return (
        <>
            <hr className="mt-5" style={{ borderTop: '1px solid #5a606b' }}></hr>

            <div className="row mt-3">
                <div className="col-md-8 col-sm-6" style={{ color: '#5a606b' }}>
                    <h3>ABOUT ME</h3>
                    
                        
                            <a href="/" style={{ color: '#f4c10f' }} >
                                <i className="fab fa-facebook"></i>
                            </a>
                       
                    

                  
                       
                            <a href="/" style={{ color: '#f4c10f' }} className="ml-5">
                                <i className="fab fa-youtube"></i>
                            </a>
                       
                    

                   
                            <a href="/" style={{ color: '#f4c10f' }}  className="ml-5">
                                <i className="fab fa-twitter"></i>
                            </a>
                      
                
                            <a href="/" style={{ color: '#f4c10f' }}  className="ml-5">
                                <i className="fab fa-instagram"></i>
                            </a>
                     
                </div>
                <div className="col-md-4 col-sm-6" style={{ color: "#5a606b" }}>
                    <h3>KEEP IN TOUCH</h3>
                    <ul className="list-unstyled">
                        <li>
                            <p>
                                <strong>
                                    <i className="fas fa-map-marker-alt"></i>Address:
                </strong>{" "}
                  Neiva, Huila, Colombia
              </p>
                        </li>
                        <li>
                            <p>
                                <strong>
                                    <i className="fas fa-map-marker-alt"></i>Phone:
                </strong> {" "}
                +57 314 480 3345
              </p>
                        </li>
                        <li>
                            <p>
                                <strong>
                                    <i className="fas fa-envelope"></i>Email:
                </strong> {" "}
                bahamon2803@gmail.com
              </p>
                        </li>
                    </ul>
                </div>
            </div>


        </>
    )
}

export default Footer
