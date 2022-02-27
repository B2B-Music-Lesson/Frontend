import sheetnotes from '../assets/bg.png'
import Services from "../components/Services"
import { Link, withRouter } from "react-router-dom";

const Hero = () => {


    return (
        <div className='hero-bg' >
            <section className="hero-section" >
                <div className="container-hero">
                    <div className="content-hero">
                        <div className="left-side">
                            <h1>Apollo</h1>
                            <p>Flashcard for Interactive Learning of Music Theory</p>
                            <form>
                                <div className="form-group">
                                    <Link to='/login'><button>Students</button></Link>
                                    <Link to='/login'><button>Teachers</button></Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section >
            <Services />
        </div >
    )
}

export default Hero