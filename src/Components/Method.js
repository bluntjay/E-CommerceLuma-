import React, { Component } from 'react'
import { connect } from 'react-redux'
// import { addShipping } from './CartActions'
import {Button, Container, Form} from "react-bootstrap";
class Method extends Component{
    
    componentWillUnmount() {
         if(this.refs.shipping.checked)
              this.props.substractShipping()
    }

    handleChecked = (e)=>{
        if(e.target.checked){
            this.props.addShipping();
        }
        else{
            this.props.substractShipping();
        }
    }
    handleCheckOut= (e) =>{
        alert("Thank you for shopping with Luma! \n\n Your total is $"+JSON.stringify(this.props.total)+" \n\n Your order will be processed \n\n Enjoy your day!")
    }

    render(){
  
        return(
            <Container >
                <div className="collection">
                    <li className="collection-item">
                            <label>
                                <input type="checkbox" ref="shipping" onChange= {this.handleChecked} />
                                <span>Shipping(+$6)</span>
                            </label>
                        </li>
                        <li className="collectionTotal"><b>Total:</b> ${this.props.total}</li>
                    </div>
                    <Form className="checkForm">
                      <Form.Group controlId="formBasicEmail" >
                        <Form.Label>Postal Address</Form.Label>
                        <Form.Control type="text" placeholder="Street Name" />
                        <Form.Control type="text" placeholder="Suburb" />
                        <Form.Control type="text" placeholder="City" />
                        <Form.Control type="text" placeholder="Postal Code" />
                      </Form.Group>
                      <Form.Group controlId="formBasicPassword">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Email Address" />
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                      </Form.Group>
                         <Button className="checkoutButt" onClick={e => this.handleCheckOut()}>Checkout<i className="fas fa-shopping-cart"></i></Button>
                    </Form>
                 </Container>
        )
    }
}

const mapStateToProps = (state)=>{
    return{
        addedItems: state.addedItems,
        total: state.total
    }
}

const mapDispatchToProps = (dispatch)=>{
    return{
        addShipping: ()=>{dispatch({type: 'ADD_SHIPPING'})},
        substractShipping: ()=>{dispatch({type: 'SUB_SHIPPING'})}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Method)