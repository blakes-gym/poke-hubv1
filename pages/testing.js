import {
    BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
  } from 'recharts';

const data = [{name: 'HP', a: 45}, {name: 'Attack', a: 50}, {name: 'Defense', a: 45}, {name: 'SpAtk', a: 115}, {name: 'SpDef', a: 55}, {name: 'Speed', a: 95}, {name: 'Total', a: 405}]
const data1 = [{name: 'HP', a: 45, id: 0}, {name: 'Attack', b: 50, id: 1}, {name: 'Defense', c: 45, id: 2}, {name: 'SpAtk', d: 115, id: 3}, {name: 'SpDef', e: 55, id: 4}, {name: 'Speed', f: 95, id: 5}, {name: 'Total', g: 405, id: 6}]

export default function TeamMemberGraph () {

  return (
    // <BarChart layout='vertical' width={730} height={1000} data={data} >
    //   <XAxis type="number"/>
    //   <YAxis style={{fontSize: 10}} dataKey="name" type="category"/>
    //   <CartesianGrid strokeDasharray="2 2" />
    //   <Tooltip />
    //   <Legend />
    //   <Bar dataKey="a" fill="#8884d8"/>
    // </BarChart>
    <BarChart  barCategoryGap="50" layout='vertical' width={730} height={1000} data={data1} >
      <XAxis type="number"/>
      <YAxis style={{fontSize: 10}} dataKey="name" type="category" yAxisId="id"/>
      <CartesianGrid strokeDasharray="3 3" />
      <Tooltip />
      <Legend />
      <Bar dataKey="a" fill="red" yAxisId='id'/>
      <Bar dataKey="b" fill="blue" yAxisId='id'/>
      <Bar dataKey="c" fill="green" yAxisId='id'/>
      <Bar dataKey="d" fill="orange" yAxisId='id'/>
      <Bar dataKey="e" fill="pink" yAxisId='id'/>
      <Bar dataKey="f" fill="purple" yAxisId='id'/>
      <Bar dataKey="g" fill="grey" yAxisId='id'/>

    </BarChart>
  );
}



