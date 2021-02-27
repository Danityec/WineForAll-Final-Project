import { Button } from '@material-ui/core';
import { useState } from 'react';
import WineList from '../wine/WineList';
import TextField from '@material-ui/core/TextField';
// import PopUp from '../All/PopUp';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import './search.css';
import Header from '../global/Header'
export default function Search(props) {
    const [wineName, setWineName] = useState("");
    const [year, setYear] = useState("");
    const [kind, setKind] = useState("");
    const [color, setColor] = useState("");
    const [winePrice, setWinePrice] = useState("");
    const [foodPairing, setFoodPairing] = useState("");
    const [manufacturID, setManufacturID] = useState("");
    const [wineList, setWineList] = useState([]);
    // const [openEdit, setOpenEdit] = useState(false);

    const onSubmit = () => {
        fetch(`http://localhost:3000/api/wines?wineName=${wineName}&year=${year}&kind=${kind}&color=${color}&winePrice=${winePrice}&foodPairing=${foodPairing}&manufacturID=${manufacturID}`)
            .then(response => response.json())
            .then(result => {
                console.log(result)
                setWineList(result)
                // setOpenEdit(false)
                setWineName("")
                setYear("")
                setKind("")
                setColor("")
                setWinePrice("")
                setFoodPairing("")
                setManufacturID("")
            }
            )
    }
    return (
        <div className={'Search'}>
            <Header/>
            <form noValidate autoComplete="off">
                <div><TextField className="input" label="wineName" onChange={(event) => setWineName(event.target.value)} value={wineName} /></div>
                <div><TextField className="input" label="manufacturID" onChange={(event) => setManufacturID(event.target.value)} value={manufacturID} /></div>
                <div className={"selectOption"}>
                    <FormControl >
                        <InputLabel htmlFor="age-native-simple">Food Pairing</InputLabel>
                        <Select native value={foodPairing} onChange={e => setFoodPairing(e.target.value)}>
                            <option aria-label="None" value="foodPairing" />
                            <option>Fish</option>
                            <option>Sushi</option>
                            <option>Steak</option>
                            <option>Italian</option>
                            <option>Desserts</option>
                        </Select>
                    </FormControl>
                </div>
                <div className={"selectOption"}>
                    <FormControl >
                        <InputLabel htmlFor="age-native-simple">Wine Kind</InputLabel>
                        <Select native value={kind} onChange={e => setKind(e.target.value)}>
                            <option aria-label="None" value="kind" />
                            <option>Cabernet Sauvignon</option>
                            <option>Syrah</option>
                            <option>Pinot Noir</option>
                            <option>Chardonnay</option>
                            <option>Sauvignon Blanc</option>
                        </Select>
                    </FormControl>
                </div>
                <div><TextField className="input" label="year" onChange={(event) => setYear(event.target.value)} value={year} /></div>
                <div className={"checkboxs"}>
                    <FormControlLabel control={<Checkbox onChange={e => setColor(e.target.value)}  value={"red"} />} label="Red" />
                    <FormControlLabel control={<Checkbox onChange={e => setColor(e.target.value)}  value={"white"} />} label="White" />
                    <FormControlLabel control={<Checkbox onChange={e => setColor(e.target.value)}   value={"rose"} />} label="Rose" />
                </div>
                <div><Button variant="contained"  onClick={onSubmit} value="search" >search</Button> </div>
            </form> 
            <WineList WineList={wineList} />
        </div>
    )
}

