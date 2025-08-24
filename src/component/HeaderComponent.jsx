import { Link } from 'react-router-dom'


function HeaderComponent() {


    return (
       <header className="border-bottom border-light border-5 mb-5 p-2">
            <div className="container">
                <div className="row">
                    <nav className="navbar navbar-expand-lg">
                        {/* <a className="navbar-brand ms-2 fs-2 fw-bold text-black" href="/">Md. Golam Kibria</a> */}
                        <Link className="navbar-brand ms-2 fs-2 fw-bold text-black" to="/">Md. Golam Kibria</Link> 
                        <div className="collapse navbar-collapse">
                            <ul className="navbar-nav">
                                <li className="nav-item fs-5">
                                    { 
 
                                        <Link className="nav-link" to="/">About</Link> 
                                    }
                                </li>
                                <li className="nav-item fs-5">
                                    { 
                                
                                        <Link className="nav-link" to="/dropdown">Projects</Link> 
                                    }
                                </li>
                                <li className="nav-item fs-5">
                                    { 
                                
                                        <Link className="nav-link" to="/learning">Education</Link> 
                                    }
                                </li>
                            </ul>
                        </div>
                        <ul className="navbar-nav">
                            <li className="nav-item fs-5">
                                { 
                              
                                    <Link className="nav-link" to="https://github.com/kibria1010" target="_blank">GitHub</Link>
                                }
                            </li>
                            <li className="nav-item fs-5">
                                { 
                                    <Link className="nav-link" to="https://www.linkedin.com/in/golam-kibria-0741ab1ab/" target="_blank">LinkedIn</Link>
                                }
                            </li>
                            <li className="nav-item fs-5">
                                { 
                              
                                    <Link className="nav-link" to="/contact">Contact</Link>
                                }
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default HeaderComponent