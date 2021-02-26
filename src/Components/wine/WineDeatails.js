import AspectRatioIcon from '@material-ui/icons/AspectRatio';
import LocationCityIcon from '@material-ui/icons/LocationCity';
import StreetviewIcon from '@material-ui/icons/Streetview';
import ConfirmationNumberIcon from '@material-ui/icons/ConfirmationNumber';
import './WineDeatails.css';

export default function WinePage(props) {
    return (
        <div>
            <div className={"firstRow"}>
                <h3>{props.item.wineName},{props.item.City}</h3>
                <p>{props.item.Description}</p>
            </div>
            <div className={"image"}>
                <img src={props.item.UrlPicture} alt="Asset" />
            </div>
            {/* <div className={"rowDetlails"}>
                <div>
                    <StreetviewIcon />
                    <p>{props.item.Street}</p>
                </div>
                <div>
                    <ConfirmationNumberIcon />
                    <p>{props.item.Zip}</p>
                </div>
                <div>
                    <LocationCityIcon />
                    <p>{props.item.Neighborhood}</p>
                </div>
                <div>
                    <AspectRatioIcon />
                    <p>{props.item.SquareFeet} m^2</p>
                </div>
            </div> */}
            <div className={"moreDeatils"}>
                <span>${props.item.winePrice}$<br />(exclude shipping)</span>
            </div>
        </div>
    );
}