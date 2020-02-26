import React, {Component} from "react";
import {Card, Carousel, Button} from 'react-bootstrap';
import { connect } from "react-redux";
import { addToCart } from './CartActions.js';
import ChooseSize from "./ChooseSize.js";
import ChooseColour from "./ChooseColour.js"


 class HotDeal extends Component{
    
    handleClick = (id)=>{
        this.props.addToCart(id); 
    }

    render(){
        let itemList = this.props.items.map((item, index )=>{
            var itemIndex = 12;
            if(index > itemIndex ){
            return(


                            <Card className="dealCard" key={item.id}>
                        <div className="card-image">
					   <Carousel className="carousel">
					   <Carousel.Item className="carouselItem">
					     <img
					       className="carouselSlide"
					       src={item.img1}
					       alt={item.title}
					     />
					   </Carousel.Item>
					   <Carousel.Item className="carouselItem">
					     <img
					       className="carouselSlide"
					       src={item.img2}
					       alt={item.title}
					     />
					   </Carousel.Item>
					   <Carousel.Item className="carouselItem">
					     <img
					       className="carouselSlide"
					       src={item.img3}
					       alt={item.title}
					     />
					   </Carousel.Item>
					 </Carousel>
                            <span className="cardTitle">{item.title}</span>
                            <ChooseColour/>
                        </div>

                        <div className="cardContent">
                            <p>{item.desc}</p>
                            <p>${item.price}</p>
                        <ChooseSize/>
						<Button onClick={()=>{this.handleClick(item.id)}} to="/Cart" className="cardButton" variant="primary">Add To Cart</Button>
                        </div>
                 </Card>
            )
}
        })
        return(
            <div className="dealsDiv">
                <h2 className="hotDeals">Hot Sellers</h2>
                <h4 >Here is what's trending on Luma now!</h4>
                <div className="container">
                    {itemList}
                </div>
            
            </div>
        )
    }
}
const mapStateToProps = (state)=>{
    return {
      items: state.items
    }
  }
const mapDispatchToProps= (dispatch)=>{
    
    return{
        addToCart: (id)=>{dispatch(addToCart(id))}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HotDeal);