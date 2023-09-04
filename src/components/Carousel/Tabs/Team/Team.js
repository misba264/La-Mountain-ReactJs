import React from 'react';
import './Team.css'
import { Schedule } from '../../../Scheduler/Schedule';
import {Footer} from "../../../Footer/Footer"

function Team() {
  return (
    <div className="team-cont">
      <section >
        <div className="team-subcont">
          <div style={{display: "flex", flexDirection: "row", }}>
            <div id="history-txt-main">
              02.
            </div>
            <div id="history-txt">
              CLIMB
            </div>
          
          </div>
          <p >
              Cras scelerisque id quam sed dignissim Pellentesque urna nunc,
              gravida quis hendrerit ac, tristique ut quam. Vivamus suscipit
              dignissim tortor nec congue.
            </p>
 
        </div>
        <div className="team-subhead">
            <ul >
              <li >
                <a href="/">MOUNTAIN 1</a>
              </li>
              <li >
                <a href="/">MOUNTAIN 2</a>
              </li>
            </ul>


          </div>
          <Schedule/>
      </section>
      <Footer/>

    </div>
  );
};
export default Team;