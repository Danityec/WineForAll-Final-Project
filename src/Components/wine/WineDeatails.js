import AspectRatioIcon from '@material-ui/icons/AspectRatio';
import LocationCityIcon from '@material-ui/icons/LocationCity';
import StreetviewIcon from '@material-ui/icons/Streetview';
import ConfirmationNumberIcon from '@material-ui/icons/ConfirmationNumber';
import './WineDeatails.css';

export default function WinePage(props) {
    return (
        <div>
            <div className={"image"}>
                <img src={props.item.winePic} alt="Wine" />
            </div>
            <div className={"firstRow"}>
                <h3>Name: {props.item.wineName}</h3>
                <h3>Manufacture: {props.item.manufacture}</h3>
                <h3>Wine Type: {props.item.kind}</h3>
                <h3>Color: {props.item.color}</h3>
                <h3>Year: {props.item.year}</h3>
                <h3>Suits For: {props.item.foodPairing}</h3>
                <p>{props.item.description}</p>
            </div>
            <div className={"moreDeatils"}>
                <span>{props.item.winePrice}$ (exclude shipping)</span>
            </div>
        </div>
    );
}