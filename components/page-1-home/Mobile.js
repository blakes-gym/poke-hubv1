import Table from 'react-bootstrap/Table';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Data from '../../data/dummyData.js';
import hexData from '../../hexData';
import Stats from './MStatsTable.js';
// import { AiOutlineSearch } from 'react-icons/ai';

export default function Mobile () {
  return (
    <div className="d-sm-none">
      {Data.map((pokemon, index) => (
        <Card key={index} style={{width: '50%'}}>
          <Card.Img src={pokemon.Sprite} align='left' style={{  width: '80%', height: 'auto', display: 'inline', marginRight: 'auto'}} />
          <Card.Body>
            <Card.Title>{pokemon.Name}</Card.Title>
            <Button style={{margin: 5}} size="small" variant="outline-primary">Moves</Button>
            <Button style={{margin: 5}} size="small" variant="outline-primary">Summary</Button>
            <div>{pokemon.Type.map((type, index) => (<div key={index} style={{margin: 5, width: '20%', backgroundColor: hexData[type], color:'white', textAlign: 'center'}}>{type}</div>))}</div>
          </Card.Body>
        </Card>
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