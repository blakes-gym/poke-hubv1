import "./page-3-styles.scss";
import Template from '../components/Template.js';
import Team from '../components/page-3-team-analysis/Team.js';
import Card from 'react-bootstrap/Card';
import TeamAggStatGraph from '../components/page-3-team-analysis/TeamAggStatGraph.js';
import data from '../data/dummyData.js';

export default function TeamAnalysis () {
  return (
      <div className="page3Container">
        <h1>
          Team Summary
        </h1>
        <Team data={data}></Team>
      <Card><TeamAggStatGraph data={data}/></Card>
      </div>
  )
}