
function FooterComponent() {
    return (
        <footer className="footer">
            <div className='container'>
               <p>&copy; {new Date().getFullYear()} Protfolio. All rights reserved.</p>
                {/* Add more footer content here like links, social media icons, etc. */}
            </div>
        </footer>
    )
}

export default FooterComponent