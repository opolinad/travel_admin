import defaultTravelPhoto from '../img/default_travel_photo.jpg'
import './Card.css'

type currency = "EUR" | "USD";
interface cardProps{
    name: string;
    price: number;
    currency: currency;
    image?: string;
}

const Card = ({name, price, currency, image}: cardProps) => {
    const currencySignOf = (currency: currency):string => {
        switch (currency) {
            case 'EUR':
                return '€';
            case 'USD':
                return '$';
        }
    }

    return (
        <div id="card">
            <div id="header">{ name }</div>
            <div id="content"><img src={image || defaultTravelPhoto} alt="travel" /></div>
            <div id="footer">{ `${currency} ${currencySignOf(currency)} ${price}`}</div>
        </div>
    );
}

export default Card;