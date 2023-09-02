import Card from "react-bootstrap/Card";
import Boton from './Boton';

const MyCard = ({imagen,title,colorButton,textButton}) => {
    return (
        <>
        <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={imagen}/>
        <Card.Body>
        <Card.Title>{title}</Card.Title>
        </Card.Body>
        <Boton colorButton={colorButton} textButton={textButton}/>
        </Card>
        </>
        );
        
};

export default MyCard;