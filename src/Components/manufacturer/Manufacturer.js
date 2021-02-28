import React, { useEffect, useState } from 'react';
// import Button from '@material-ui/core/Button';
// import PopUp from '../global/PopUp';
import { useCookies } from "react-cookie";
import Header from '../global/Header'
import Menu from '../global/Menu'

import WineList from '../wine/WineList';
import {useHistory} from "react-router-dom";

const manufactureID = 3

export default function WinePage(props) {
    let history = useHistory()

    const [wineList, setwineList] = useState([]);
    const [openEditWine, setopenEditWine] = useState(false);
    const [wine, setWine] = useState(props.location.data);

    const [wineNameInput, setWineNameInput] = useState("");
    const [manufactureNameInput, setManufactureNameInput] = useState("");
    const [typeInput, setTypeInput] = useState("");
    const [colorInput, setColorInput] = useState("");
    const [yearInput, setYearInput] = useState("");
    const [suitsForInput, setSuitsForInput] = useState("");
    const [descriptionInput, setDescriptionInput] = useState("");

    useEffect(() => {
        fetch(`http://localhost:3000/api/wines/?manufactureID=${manufactureID}`, {
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json',
                'user': manufactureID
            }
        })
            .then(response => response.json())
            .then(result => {
                console.log(result)
                setwineList(result)
            }
                )
    }, [])

    const deleteWine = () => {
        fetch(`http://localhost:3000/api/wines/${wine._id}`, {
            credentials: 'include',
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                // 'user': cookies.user.googleID
            }
        })
            .then(response => history.goBack())
    }

    const editWine = () => {
        
        const body = {wineName: wineNameInput, manufacture: manufactureNameInput, type: typeInput, color: colorInput, year: yearInput, suitsFor: suitsForInput, description: descriptionInput};
        fetch(`http://localhost:3000/api/wines/${wine._id}`, {
            method: 'PUT',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json',
                // 'user': cookies.user.googleID
            },
            body: JSON.stringify(body),
        })
            .then(response => response.json())
            .then(result => {
                setopenEditWine(false)
                setWine(result)
                setWineNameInput('')
                setManufactureNameInput('')
                setTypeInput('')
                setColorInput('')
                setYearInput('')
                setSuitsForInput('')
                setDescriptionInput('')
            })
    }

    const addNewWine = () => {
        const body = {wineName: wineNameInput, manufacture: manufactureNameInput, type: typeInput, color: colorInput, year: yearInput, suitsFor: suitsForInput, description: descriptionInput};
        fetch(`http://localhost:3000/api/wines`, {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json',
                // 'user': cookies.user.googleID
            },
            body: JSON.stringify(body),
        })
            .then(response => response.json())
            .then(result => history.goBack())
    }


    return (
        <div>
            <Header />
            <Menu />
            <div className={'list-wine-manufactureID'}>
                <WineList WineList={wineList}/>
            </div>
        </div>
    );
}