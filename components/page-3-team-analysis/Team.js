import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import HexByType from '../../hexData.js';
import TeamMemberData from './TeamMemberData.js';
import TeamMemberGraph from './TeamMemberGraph.js';
import { useState, useEffect } from 'react';

export default function Team ({ data }) {
  return (
    <div>


    <Accordion>
    {data.map((pokemon, idx) => {
      return (
  <Card key={idx}>
    <Accordion.Toggle as={Card.Header} eventKey={`${idx}`}>
    <div className="accordianList">
    <div style={{backgroundImage: `url(${pokemon.Sprite})`, backgroundSize: 'cover', zIndex: '1'}} className="miniPokemonSprite"></div>
    <div className="pokemonTeamBackground"></div>
    <div>{pokemon.Name}</div>
    {
      pokemon.Type.map((type, idx) => {
        return (
          <Badge style={{ background: HexByType[type], marginLeft: '2px', margin: '2px' }} key={idx}>{type}</Badge>
          )
        })
    }
    </div>
    </Accordion.Toggle>
    <Accordion.Collapse eventKey={`${idx}`}>
      <Card.Body>
        <div className="dataContainer">
        <TeamMemberData pokemon={pokemon}></TeamMemberData>
        <TeamMemberGraph stats={pokemon.Stats}></TeamMemberGraph>
        </div>
      </Card.Body>
    </Accordion.Collapse>
  </Card>
      )
    })}
</Accordion>
</div>
  )
}