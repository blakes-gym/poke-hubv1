import "../styles.scss";
import Table from 'react-bootstrap/Table'
import Template from "../components/Template.js";
import Data from '../dummyData';
import {useRef, useState, useLayoutEffect} from 'react';
import useDimensions from 'react-use-dimensions';
import { useWindowSize, useWindowWidth, useWindowHeight} from '@react-hook/window-size'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// export default function Home() {

//   const [width, height] = useWindowSize()
//   console.log(width)


//   return (
//     <Template>
//       {(width <= 500) ? (
//           <Table bordered hover>
//             <thead className="thead-dark">
//               <tr>
//                 <th>#</th>
//                 <th>Name</th>
//                 <th>Type</th>
//               </tr>
//             </thead>
//             {Data.map((pokemon, index) => (
//               <tbody>
//                 <tr key={index}>
//                   <td>{pokemon.DexNo}</td>
//                   <td>{pokemon.Name}</td>
//                   <td>{pokemon.Type.join('\n')}</td>
//                 </tr>
//                 <tr>
//                   <td></td>
//                   <td style={{textAlign: "center", verticalAlign: "middle"}}><img src={pokemon.Sprite} align='middle' style={{  width: '60%', height: 'auto', display: 'block', marginLeft: 'auto', marginRight: 'auto'}}/></td>
//                   <td></td>
//                 </tr>
//               </tbody>
//             ))}
//           </Table>
//       ) : (
//         <Container>
//             <Row style={{backgroundColor:'grey'}}>
//               <Col>#</Col>
//               <Col>Name</Col>
//               <Col>Type</Col>
//               <Col>HP</Col>
//               <Col>Attack</Col>
//               <Col>Defense</Col>
//               <Col>Sp. Atk</Col>
//               <Col>Sp. Def</Col>
//               <Col>Speed</Col>
//               <Col>Total</Col>
//             </Row>
//             {Data.map((pokemon, index) => (
//               <Row key={index}>
//                 <Col><img style={{width:'70%', height:'100%'}} src={pokemon.Sprite}></img> {pokemon.DexNo}</Col>
//                 <Col>{pokemon.Name}</Col>
//                 <Col>{pokemon.Type.join('\n')}</Col>
//                 <Col>{pokemon.Stats.HP}</Col>
//                 <Col>{pokemon.Stats.Attack}</Col>
//                 <Col>{pokemon.Stats.Defense}</Col>
//                 <Col>{pokemon.Stats['Sp. Atk']}</Col>
//                 <Col>{pokemon.Stats['Sp. Def']}</Col>
//                 <Col>{pokemon.Stats.Speed}</Col>
//                 <Col>{pokemon.Stats.Total}</Col>
//               </Row>
//             ))}
//         </Container>
//       )}
//     </Template>
//   )
// }

export default function Home() {

  const [width, height] = useWindowSize()
  console.log(width)


  return (
    <Template>
      {(width <= 500) ? (
          <Table bordered hover>
            <thead className="thead-dark">
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Type</th>
              </tr>
            </thead>
            {Data.map((pokemon, index) => (
              <tbody>
                <tr key={index}>
                  <td>{pokemon.DexNo}</td>
                  <td>{pokemon.Name}</td>
                  <td>{pokemon.Type.join('\n')}</td>
                </tr>
                <tr>
                  <td style={{borderRightStyle: 'none'}}></td>
                  <td style={{borderLeftStyle:'none', borderRightStyle: 'none', textAlign: "center", verticalAlign: "middle"}}><img src={pokemon.Sprite} align='middle' style={{  width: '60%', height: 'auto', display: 'block', marginLeft: 'auto', marginRight: 'auto'}}/></td>
                  <td style={{borderLeftStyle:'none'}}></td>
                </tr>
              </tbody>
            ))}
          </Table>
      ) : (
        <Table bordered hover>
          <thead className="thead-dark">
            <tr>
              <th style={{borderRightStyle: 'none'}}>#</th>
              <th style={{borderLeftStyle:'none', borderRightStyle: 'none'}}></th>
              <th>Name</th>
              <th>Type</th>
              <th>HP</th>
              <th>Attack</th>
              <th>Defense</th>
              <th>Sp. Atk</th>
              <th>Sp. Def</th>
              <th>Speed</th>
              <th>Total</th>
              <th>Moves</th>
            </tr>
          </thead>
          <tbody>
            {Data.map((pokemon, index) => (
              <tr key={index}>
                <td style={{width:'5%', borderRightStyle: 'none'}}><img style={{width:'40px', height:'5%'}} src={pokemon.Sprite}></img></td>
                <td style={{width:'5%', borderLeftStyle:'none', borderRightStyle: 'none'}}>{pokemon.DexNo}</td>
                <td style={{width:'10%'}}>{pokemon.Name}</td>
                <td style={{width:'10%'}}>{pokemon.Type.join('\n')}</td>
                <td style={{width:'10%'}}>{pokemon.Stats.HP}</td>
                <td style={{width:'10%'}}>{pokemon.Stats.Attack}</td>
                <td style={{width:'10%'}}>{pokemon.Stats.Defense}</td>
                <td style={{width:'10%'}}>{pokemon.Stats['Sp. Atk']}</td>
                <td style={{width:'10%'}}>{pokemon.Stats['Sp. Def']}</td>
                <td style={{width:'10%'}}>{pokemon.Stats.Speed}</td>
                <td style={{width:'10%'}}>{pokemon.Stats.Total}</td>
                <td style={{width:'5%'}}>Moves</td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </Template>
  )
}










// export default function Home() {

//   const [width, height] = useWindowSize()
//   console.log(width)


//   return (
//     <Template>
//       {(width <= 500) ? (
//         <Table bordered hover>
//           <thead className="thead-dark">
//             <tr>
//               <th>#</th>
//               <th>Name</th>
//               <th>Type</th>
//             </tr>
//           </thead>
//           <tbody>
//             {Data.map((pokemon, index) => (
//               <tr key={index}>
//                 <td>{pokemon.DexNo}</td>
//                 <td>{pokemon.Name}</td>
//                 <td>{pokemon.Type.join('\n')}</td>
//                 <img src={pokemon.Sprite} />
//               </tr>
//             ))}
//           </tbody>
//         </Table>
//       ) : (
//         <Table bordered hover>
//           <thead className="thead-dark">
//             <tr>
//               <th>#</th>
//               <th>Name</th>
//               <th>Type</th>
//               <th>HP</th>
//               <th>Attack</th>
//               <th>Defense</th>
//               <th>Sp. Atk</th>
//               <th>Sp. Def</th>
//               <th>Speed</th>
//               <th>Total</th>
//             </tr>
//           </thead>
//           <tbody>
//             {Data.map((pokemon, index) => (
//               <tr key={index}>
//                 <td>{pokemon.DexNo}</td>
//                 <td>{pokemon.Name}</td>
//                 <td>{pokemon.Type.join('\n')}</td>
//                 <td>{pokemon.Stats.HP}</td>
//                 <td>{pokemon.Stats.Attack}</td>
//                 <td>{pokemon.Stats.Defense}</td>
//                 <td>{pokemon.Stats['Sp. Atk']}</td>
//                 <td>{pokemon.Stats['Sp. Def']}</td>
//                 <td>{pokemon.Stats.Speed}</td>
//                 <td>{pokemon.Stats.Total}</td>
//               </tr>
//             ))}
//           </tbody>
//         </Table>
//       )}
//     </Template>
//   )
// }



// <Container>
// <Row>
//   <Col>#</Col>
//   <Col>Name</Col>
//   <Col>Type</Col>
//   <Col>Total</Col>
//   <Col>HP</Col>
//   <Col>Attack</Col>
//   <Col>Defense</Col>
//   <Col>Sp. Atk</Col>
//   <Col>Sp. Def</Col>
//   <Col>Speed</Col>
// </Row>
// </Container>