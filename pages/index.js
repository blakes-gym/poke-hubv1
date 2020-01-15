import Template from '../components/Template.js';
import Window from '../components/page-1-home/Window.js';
import Mobile from '../components/page-1-home/Mobile.js'


export default function Index() {
  // const [width, height] = useWindowSize();

  return (
    <div>
      <Mobile />
      <Window />
    </div>
  )
}