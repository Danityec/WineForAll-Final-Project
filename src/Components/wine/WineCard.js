import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import WinePage from '../wine/WinePage';

const useStyles = makeStyles({
    card: {
        maxWidth: 300,
        margin: '2%',
    },
    
});

export default function WineCard (props) {
    const classes = useStyles();
    return (
        <Card className={classes.card}>
            <CardMedia component="img" height="400" image={props.item.winePic} title="Referrals"/>
            <CardContent>
                <Typography component="h5" style={{fontFamily: 'Lato',overflow: 'hidden',webkitLineClamp: '2',textOverflow: 'ellipsis'}}>
                    {props.item.Description}
                </Typography>
                <Typography color="textSecondary" component="subtitle2" style={{fontFamily: 'Lato',fontWeight: 'bold'}}>
                    {props.item.wineName}
                </Typography>
                <Typography variant="h6" component="h6" style={{fontFamily: 'Lato',fontWeight: 'bold'}}>
                Manufacture: {props.item.manufacture} 
                </Typography>
                <Typography variant="h5" component="h5" style={{fontFamily: 'Lato',fontWeight: 'bold'}}>
                Year {props.item.year} 
                </Typography>
            </CardContent>
            <WinePage item={props.item}/>
        </Card> 
    );
}

