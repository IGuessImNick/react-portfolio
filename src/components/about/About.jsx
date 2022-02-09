import './about.css'; 
import Me from '../../img/me-car.jpg';
import Award from '../../img/certification.png';

const About = () => {
    return (
        <div className="a">
            <div className='a-left'>
                <div className='a-card bg'></div>
                <div className='a-card'>
                    <img src={Me} alt="" className='a-img'/>
                </div>
            </div>
            <div className='a-right'>
                <h1 className='a-title'>About me</h1>
                <p className='a-sub'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus, hic. Beatae blanditiis magni dolorum in dolores, iusto corporis eos eligendi odit vitae voluptatem tempora repudiandae quod, provident facilis eveniet nostrum.
                </p>
                <p className='a-desc'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam culpa quae sapiente blanditiis unde facilis facere iusto aperiam id quos? Officiis, adipisci itaque. Incidunt at beatae iste reiciendis impedit atque.
                </p>
                <div className='a-award'>
                    <img src={Award} alt="Full Stack Certification Badge" className='a-award-img'/>
                    <div className='a-award-texts'>
                        <h4 className='a-award-title'>
                            Full Stack Certification
                        </h4>
                        <p className='a-award-desc'>
                            Awarded by the UC Davis Full Stack Web Design Bootcamp
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;