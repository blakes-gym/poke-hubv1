import "../styles.scss";
import Template from "../components/Template.js";
import {useRef, useState, useLayoutEffect} from 'react';
import { useWindowSize, useWindowWidth, useWindowHeight} from '@react-hook/window-size'
import { MdSearch } from 'react-icons/md';

import Window from '../components/page-1-home/Window.js';
import Mobile from '../components/page-1-home/Mobile.js'


export default function Home() {
  // const [width, height] = useWindowSize();

  return (
    <div>
      <Mobile />
      <Window />
    </div>
  )
}


// return (
//   <Template>
//     {(width <= 500) ? (
//       <Mobile/>
//     ) : (
//       <Window/>
//     )}
//   </Template>
// )

