import mainLogo from'./kibria.jpg';

function WelcomeComponent() {
    return (
        <div className="WelcomeComponent">
            <div>
                <p>
                    Welcome to my portfolio!. I’m a <strong>Java Spring Boot Developer</strong>. <br/>
                    Passionate about building modern, scalable, and user-friendly applications.
                    Here, you’ll find my projects, skills, and experiences that showcase my journey in tech.
                </p>

               <nav class="mt-5">
                <figure>
                    <img  
                    style={{
                    height: 400,
                    width: 400,
                    }}
                    src={mainLogo} alt="fireSpot"/>

                    <figcaption>Fig.1 - Md. Golam Kibria.</figcaption>
                    </figure>
                </nav>
                

            </div>
            <div>
                
            </div>
        </div>
    )
}

export default WelcomeComponent