
import React, {useState} from 'react';
import "./History.css"
import Carousel from "../../Carousel/Carousel" 

function History() {

  return (
    <div className="history-cont">
<section >
  
   <div className="history-subcont">
    <div style={{display: "flex", flexDirection: "row", }}>
          <div id="history-txt-main">
            01.
          </div>
          <div id="history-txt">
            HISTORY
          </div>
          </div>
          <p >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin in
            ante viverra, rutrum erat rutrum, consectetur mi. Proin at maximus
            est. Nullam purus ex, iaculis sed erat sed, blandit tincidunt quam.
            Cras scelerisque id quam sed dignissim Pellentesque urna nunc,
            gravida quis hendrerit ac, tristique ut quam. Vivamus suscipit
            dignissim tortor nec congue.
          </p>
        </div>
    
      
    </section>
    <Carousel/>

</div>
  
  )}

export default History;
