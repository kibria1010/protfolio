import { Link } from 'react-router-dom'

function FooterComponent() {
    return (
        <footer className="footer">
            <div className='container'>
               <p>&copy; {new Date().getFullYear()} Protfolio.
                    {<Link className="nav-link" to="/contact">Contact</Link>}
               </p>
                {/* Add more footer content here like links, social media icons, etc. */}
            </div>
        </footer>
    )
}

export default FooterComponent