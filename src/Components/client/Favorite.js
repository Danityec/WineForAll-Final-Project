// import { useState, useEffect } from 'react';
// import WineList from '../wine/WineList';
// import './Favorite.css';
// import Header from '../global/Header'


// export default function Search(props) {
//     const [googleID, setGoogleID] = useState("1");
//     const [favorite, setFavorite] = useState([]);
//     const [wineList, setWineList] = useState([]);


//     useEffect(() => {
//         fetch(`http://localhost:3000/api/client?googleID=${googleID}`)
//             .then(response => response.json())
//             .then(result => {
//                 setFavorite(result)
//             })
//     })
//     useEffect(() => {
//         fetch(`http://localhost:3000/api/wines?_id=${favorite.favorite}`)
//             .then(response => response.json())
//             .then(result => {
//                 setWineList(result)
//             })
//     })
//     return (
//         <div>
//             <Header />
//             <div className={'wrapper'}>
//                 <WineList WineList={wineList} />
//             </div>
//         </div>
//     )
// }

