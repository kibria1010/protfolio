import mainLogo from'./kibria.jpg';
import resume from './Md_Golam_Kibria_Resume.pdf'

function WelcomeComponent() {

    return (
        <div className="WelcomeComponent">
            
            <div class="segment"></div>

            <div class="segment">
                <p style={{ color: 'black', fontSize: '16px' }}>
                    Hi! I’m a <strong>Java Spring Boot Developer</strong>. <br/>
                    Passionate about building modern, scalable, and user-friendly applications. <br/>
                    Here, you’ll find my projects, skills, and experiences that showcase my journey in tech.
                </p>

               <nav class="mt-3">
                    <figure>
                        <img  
                        style={{
                        height: 400,
                        width: 400,
                        }}
                        src={mainLogo} alt="fireSpot"/>

                        <figcaption>Fig.1 - Md. Golam Kibria.</figcaption>
                    </figure>

                    <a class="mt-3" href={require("./Md_Golam_Kibria_Resume.pdf")} download="Md_Golam_Kibria_Resume">Download Resume</a>
                </nav>

            </div>

            <div class="segment"></div>

        </div>
    )
}

export default WelcomeComponent