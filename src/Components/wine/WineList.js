import WineCard from './WineCard';
import Grid from '@material-ui/core/Grid';

export default function WineList(props) {
    const wineWanted = (item) => {
        if (item.RenterId === -1) {
            return (
                <WineCard key={item.id} id={item.id} item={item} renterId={props.renterId}>
                    {props.children}
                </WineCard>
            )
        }
    }
    const eachItem = (item) => {
        return (
            <>
                {wineWanted(item)}
            </>
        )
    }
    return (
        <Grid container direction="row" justify="center" alignItems="center" style={{ marginBottom: "2%" }}>
            { props.WineList.map(eachItem)}
        </Grid>
    )
}