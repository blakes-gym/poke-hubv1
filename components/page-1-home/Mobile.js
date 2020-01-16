// import Table from 'react-bootstrap/Table';
// import Card from 'react-bootstrap/Card';
// import Button from 'react-bootstrap/Button';
import Data from '../../data/dummyData.js';
// import hexData from '../../hexData';
// import Stats from './Stats.js';
// import {FaPlus} from 'react-icons/fa';
// import { useSpring, animated, interpolate } from 'react-spring';
// import { useGesure } from 'react-with-gesture';
import Card from './Card';
// import { AiOutlineSearch } from 'react-icons/ai';

// http://poke-hub-backend.herokuapp.com/api/pokemon
// THIS IS TO GET ALL

export default function Mobile () {
  return (
    <div className="d-sm-none">
      {Data.map((pokemon, index) => (
        <Card key={pokemon.DexNo} pokemon={pokemon} />
      ))}
    </div>
  )
}


        {/* <AiOutlineSearch style={{position: 'fixed', height:'15%', width:'15%', bottom: -20, right: 10}}/> */}

              {/* //   <img src={pokemon.Sprite} align='center' style={{  width: '70%', height: 'auto', display: 'block', marginLeft: 'auto', marginRight: 'auto'}}/> */}


// export default function Mobile () {
//     return (
//       <div className="d-sm-none">
//         <Table bordered hover>
//           <thead className="thead-dark">
//             <tr>
//               <th>#</th>
//               <th>Name</th>
//               <th>Type</th>
//             </tr>
//           </thead>
//           {Data.map((pokemon, index) => (
//             <tbody>
//               <tr key={index}>
//                 <td>{pokemon.DexNo}</td>
//                 <td style={{width: "10%"}}>{pokemon.Name}</td>
//                 <td>{pokemon.Type.map((type, index) => (<div key={index} style={{backgroundColor: hexData[type], color:'white', textAlign: 'center'}}>{type}</div>))}</td>
//               </tr>
//               <tr>
//                 <td colspan="2" style={{borderRightStyle: 'none'}}>
//                     <Card>
//                       <Card.Img src={pokemon.Sprite} align='center' style={{  width: '70%', height: 'auto', display: 'block', marginLeft: 'auto', marginRight: 'auto'}} />
//                       <Card.Body>
//                         <Button style={{margin: 5}} size="small" variant="outline-primary">Moves</Button>
//                         <Button style={{margin: 5}} size="small" variant="outline-primary">Summary</Button>
//                       </Card.Body>
//                     </Card>
//                   {/* //   <img src={pokemon.Sprite} align='center' style={{  width: '70%', height: 'auto', display: 'block', marginLeft: 'auto', marginRight: 'auto'}}/> */}
//                 </td>
//                 <Stats stats={pokemon.Stats}/>
//               </tr>
//             </tbody>
//           ))}
//         </Table>
//           {/* <AiOutlineSearch style={{position: 'fixed', height:'15%', width:'15%', bottom: -20, right: 10}}/> */}
//       </div>
//     )
//   }