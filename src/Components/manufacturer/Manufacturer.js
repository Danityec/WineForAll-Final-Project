// import React, { useEffect, useState } from 'react';
// import Button from '@material-ui/core/Button';
// import PopUp from '../global/PopUp';
// import { useHistory } from "react-router-dom";
// import { useCookies } from "react-cookie";


// export default function WinePage(props) {
    

//     return (
//         <div>
//             <div className={""}>
//                 <Button variant="outlined" onClick={() => setOpen(true)} style={{ margin: '2%' }}>See More</Button>
//                 {haveWine()}
//             </div>
//             <PopUp onSubmit={() => setOpen(false)} WantWine={true} title={props.item.name} open={open} closePopup={() => setOpen(false)} showBt={true}>
//                 <WineDeatails item={props.item} />
//             </PopUp>
//         </div>
//     );
// }