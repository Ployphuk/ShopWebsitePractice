import interiorpic from '../pic/interiorpic.jpeg'
import './Services.css'

function Card({ imgsrc, name, detail}){
    return(
        <div className="card">
           <div className='servicepicture'>
            <img src={imgsrc} alt="service" className="service-picture"/>
           </div>
           <div className='servicedetail'>
            <h3 className='service-name'>{name}</h3>
            <p className='service-detail'>{detail}</p>
           </div>
        </div>
    );
}

export default Card