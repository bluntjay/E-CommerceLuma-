import React, {Component} from "react";
import {NavLink} from "react-router-dom";
import {Row, Col} from 'react-bootstrap';
import WomanBeach from "../Images/WomanBeach.jpg";
import ManBeach from "../Images/ManBeach.jpg";
import ColourTshirt from "../Images/ColourTshirtStock.jpg";
import YogaMat from "../Images/YogaMat1.jpg";
import FemaleFitness from "../Images/FemaleFitness.jpg";
import WomenNature from "../Images/WomanNature1.jpg";
import HotDeal from "./HotDeals.js";

const ImageBlock = props => 
				<div className="imageBlocks" id={props.blockId}>
        	<img src={props.image} id={props.imageId} alt={props.image} className="blockImg"/>
        	<div className="descripDiv" id={props.descripId}>
        		<h2 className="classHead">{props.title}</h2>
        		<h4 className={props.body}>{props.descrip}</h4>
        		<h4>{props.descrip2}</h4>
        		<button className={props.buttonClass}><NavLink className={props.navProp} to={props.toPage}>{props.button}</NavLink></button>
        	</div>
        </div>

// Exports & returns my class component to be rendered 
export default class Home extends Component{
  render(){
    return(
      
    		<div className="homeBlocks">
          <div className="homeDiv">
    		<Row>
      	<Col className="columnDiv" md={12}>
      	<ImageBlock
      		image={WomanBeach}
      		blockId="womanBlock"
      		imageId="WomanBeach"
      		title="New Luma Yoga Collection"
      		descrip="Get fit & look fab in "
      		descrip2="new seasonal styles"
      		body="block1Body"
      		buttonClass="yogaButton"
      		button="Shop New Yoga"
          navProp="yogaButton"
          toPage="/Training"
      		
      	/>
      </Col>
      	</Row>
     <Row>
      <Col className="columnDiv" md={4}>
      <ImageBlock
      		image={ManBeach}
      		blockId="manBlock"
      		imageId="ManBeach"
      		title="20% OFF"
      		descrip="Luma pants when you "
      		descrip2="shop today*"
      		button="Shop Pants   >"
      		buttonClass="shopButton"
          navProp="navLink"
          toPage="/Sale"
      	/>
      	</Col>
      	<Col className="columnDiv" md={8}>
      	<ImageBlock
      		image={ColourTshirt}
      		blockId="teeBlock"
      		imageId="ColourTshirt"
      		title="Even more ways"
      		descrip="Buy 3 Luna tees get a 4th free"
      		descrip2="to mix & match"
      		button="Shop Tees   >"
      		buttonClass="shopButton"
          navProp="navLink"
          toPage="/Men"
      	/>
      	</Col>
      	<Col className="columnDiv" md={4}>
      	<Row>
      <ImageBlock
      		image={YogaMat}
      		blockId="matBlock"
      		imageId="YogaMat"
      		title="Take it from Erin"
      		descrip="Luma founder Erin Rehny"
      		descrip2="shares her favourites!"
      		button="Shop Erin Recommends   >"
      		buttonClass="shopButton"
          navProp="navLink"
          toPage="/Training"
      	/>
      	</Row>
      	</Col>		
      </Row>
    
      	<Row>
		<Col className="columnDiv" md={8}>
		<ImageBlock
      		image={WomenNature}
      		blockId="natureBlock"
      		imageId="WomenNature"
      		title="Twice around, twice as nice"
      		descrip="Find conscietious, comfy clothing "
      		descrip2="in our Eco-Friendly Collection"
      		button="Shop Eco-Friendly   >"
      		buttonClass="shopButton"
          navProp="navLink"
          toPage="/Women"
      	/>
      	</Col>
      <Col className="columnDiv" md={4}>
      <ImageBlock
      		image={FemaleFitness}
      		blockId="femaleBlock"
      		imageId="FemaleFitness"
      		title="Science meets performance"
      		descrip="Wicking to raingear,"
      		descrip2="Luma covers you"
      		button="Shop Performance   >"
      		buttonClass="shopButton"
          navProp="navLink"
          toPage="/Gear"
      	/>
      	</Col>
      </Row>
    </div>
      <HotDeal/>
 
 		</div>
		
 
      )
  }
}
