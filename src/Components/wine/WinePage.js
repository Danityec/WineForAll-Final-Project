import React, {useEffect, useState} from 'react';
import Button from '@material-ui/core/Button';
import WineDeatails from '../wine/WineDeatails';
import PopUp from '../global/PopUp';
import {useHistory} from "react-router-dom";
import {useCookies} from "react-cookie";

export default function WinePage(props) {
  let history = useHistory();
  const [open, setOpen] = useState(false);
  const [wine, setWine] = useState("");
  const [cookies] = useCookies(['user']);

  useEffect(() => {
    fetch(`https://localhost:3000/api/client?favorite=${wine._id}`, { withCredentials: true, credentials: 'include' })
      .then(response => response.json())
      .then(result =>  {
        setWine(result)
      })    
  },[wine])
  const wantIt = () => {
    const body={googleID: cookies.user.id}
    fetch(`https://localhost:3000/api/wines?wineName=${wine._id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body),
        })
        .then(response => response.json())
        .then(result => { 
          let path = '/wines'
          alert("Wine added to Favorite")
          history.push({
            pathname: path,
            user: result
          })
        })
    };
    const haveWine = () => {
      if(wine.length < 0) {
        return (
          <Button variant="outlined"  style={{margin:'2%'}} onClick={() => wantIt()} disabled>Add to Favorite</Button>
        )
      }
      else {
        return (
          <Button variant="outlined"  style={{margin:'2%'}} onClick={() => wantIt()}>Add to Favorite</Button>
        )
      }
    }
  return (
    <div>
      <div className={"buttonsAssets"}>
        <Button variant="outlined"  onClick={() => setOpen(true)} style={{margin:'2%'}}>See More</Button>
        {haveWine()}
      </div>
        <PopUp onSubmit={() => setOpen(false)} WantWine={true} title={props.item.name} open={open} closePopup={() => setOpen(false)} showBt={true}>
            <WineDeatails item={props.item} />
        </PopUp>
    </div>
  );
}