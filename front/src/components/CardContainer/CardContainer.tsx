import { useEffect, useState } from "react";
import Card from "../Card/Card";
import './CardContainer.css';

type currency = "EUR" | "USD";
interface cardProps{
    name: string;
    price: number;
    currency: currency;
    image?: string;
}

const CardContainer = () => {
    const [tripsInformation, setTripsInformation] = useState([]);

    useEffect(() => {
            fetch(`http://${process.env.REACT_APP_API_URL}/trips`)
                .then(response => response.json())
                .then(response => setTripsInformation(response.data));


    },[]);

    return (
        <>
            <h3 id="cards-container-title">Available trips </h3>
            <div id="cards-container">
                {tripsInformation.map((trip:cardProps) => <Card key={ trip.name} price={trip.price} name={trip.name} currency={trip.currency} image = { trip.image} ></Card>)}
            </div>
        </>
    );
}

export default CardContainer;