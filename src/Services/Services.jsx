import './Services.css'
import Card from './Card';
import deliveryicon from '../pic/delivery.png'
import designicon from'../pic/design.png'
import crediticon from '../pic/creditcard.png'
import assembly from '../pic/assembly.png'
import planning from '../pic/planning.png'

function Services(){
    return(
        <div className="Service">
            <h3 className='service-header'> Service </h3>
            <Card
                imgsrc={deliveryicon}
                name = "Delivery"
                detail="Free delivery"/> 
            <Card
                imgsrc={designicon}
                name="Design"
                detail="Help u design"/>
            <Card
                imgsrc={crediticon}
                name="pay by installments"
                detail=" Fee 0% 12 month"/>
            <Card
                imgsrc={assembly}
                name="Assembly Sevice"
                detail="Assembly furniture"/>
            <Card
            imgsrc={planning}
                name="Planning support"
                detail="Planning your delivery"/>
        </div>
    );
}

export default Services