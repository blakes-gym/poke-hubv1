import "../styles.scss";
import Template from '../components/Template.js';
import CurrentTeam from '../components/page-3-team-analysis/CurrentTeam.js';

export default function TeamAnalysis () {
  return (
    <Template>
      <CurrentTeam />
      {/* <TeamStats />
      <OtherTeams /> */}
    </Template>
  )
}