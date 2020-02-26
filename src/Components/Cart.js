import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import {Button} from "react-bootstrap";
import { removeItem, addQuantity, subQuantity} from './CartActions.js'
import Method from './Method';

 class Cart extends Component{

    //to remove the item completely
    handleRemoveItem = (id) =>{
        this.props.removeItem(id);
    }
    //to add the quantity
    handleaddQuantity = (id) =>{
        this.props.addQuantity(id);
    }
    //to substruct from the quantity
    handlesubQuantity = (id) =>{
        this.props.subQuantity(id);
    }
    render(){
              
        let addedItems = this.props.items.length ?
            (  
                this.props.items.map(item=>{
                    return(
                       
                        <li className="collectionItem" key={item.id}>
                                    <div className="itemImg"> 
                                        <img src={item.img1} alt={item.img1} className="carouselSlide"/>
                                    </div>
                                
                                    <div className="itemDesc">
                                        <span className="titleCart"><b>{item.title}</b></span>
                                        <p>{item.desc}</p>
                                        <p><b>Price:</b> ${item.price}</p> 
                                        <p><b>Quantity:</b> {item.quantity}</p>
                                        <div className="addRemove">
                                            <Link to="/Cart"><i className="quantityIcon"onClick={()=>{this.handleaddQuantity(item.id)}}>+</i></Link>
                                            <Link to="/Cart"><i className="quantityIcon" onClick={()=>{this.handlesubQuantity(item.id)}}>-</i></Link>
                                        </div>
                                        <Button className="removeButt" onClick={()=>{this.handleRemoveItem(item.id)}}>Remove</Button>
                                    </div>
                                    
                                </li>
                         
                    )
                })
            ):

             (
                <p>Nothing</p>
             )
       return(
            <div className="container">
                <div className="cart">
                    <h5><u>Items In Your Cart:</u></h5>
                    <div className="container cartCon">
                    <ul className="collection">
                        {addedItems}
                    </ul>
                </div>
                </div> 
                <Method />          
            </div>
       )
    }
}


const mapStateToProps = (state) =>{
    return{
        items: state.addedItems,
        addedItems: state.addedItems
    }
}
const mapDispatchToProps = (dispatch) =>{
    return{
        removeItem: (id)=>{dispatch(removeItem(id))},
        addQuantity: (id)=>{dispatch(addQuantity(id))},
        subQuantity: (id)=>{dispatch(subQuantity(id))}
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Cart)