import Leggings1 from '../Images/Leggings1.jpg';
import Leggings2 from '../Images/Leggings2.jpg';
import Leggings3 from '../Images/Leggings3.jpg';
import FemaleTrain1 from '../Images/FemaleTrain1.jpg';
import FemaleTrain2 from '../Images/FemaleTrain2.jpg';
import FemaleTrain3 from '../Images/FemaleTrain3.jpg';
import SportJack1 from '../Images/SportJack1.jpg';
import SportJack2 from '../Images/SportJack2.jpg';
import SportJack3 from '../Images/SportJack3.jpg';
import FemaleTank1 from '../Images/FemaleTank1.jpg';
import FemaleTank2 from '../Images/FemaleTank2.jpg';
import FemaleTank3 from '../Images/FemaleTank3.jpg';
import Shorts1 from '../Images/Shorts1.jpg';
import Shorts2 from '../Images/Shorts2.jpg';
import Shorts3 from '../Images/Shorts3.jpg';
import SportBra1 from '../Images/SportBra1.jpg';
import SportBra2 from '../Images/SportBra2.jpg';
import SportBra3 from '../Images/SportBra3.jpg';
import GymShorts1 from '../Images/GymShorts1.jpg';
import GymShorts2 from '../Images/GymShorts2.jpg';
import GymShorts3 from '../Images/GymShorts3.jpg';
import MaleTrain1 from '../Images/MaleTrain1.jpg';
import MaleTrain2 from '../Images/MaleTrain2.jpg';
import MaleTrain3 from '../Images/MaleTrain3.jpg';
import Sweatpants1 from '../Images/Sweatpants1.jpg';
import Sweatpants2 from '../Images/Sweatpants2.jpg';
import Sweatpants3 from '../Images/Sweatpants3.jpg';
import Fitbit1 from '../Images/Fitbit1.jpg';
import Fitbit2 from '../Images/Fitbit2.jpg';
import Fitbit3 from '../Images/Fitbit3.jpg';
import WaterBottle1 from '../Images/WaterBottle1.jpg';
import WaterBottle2 from '../Images/WaterBottle2.jpg';
import WaterBottle3 from '../Images/WaterBottle3.jpg';
import YogaMat1 from '../Images/Yoga1.jpg';
import YogaMat2 from '../Images/Yoga2.jpg';
import YogaMat3 from '../Images/Yoga3.jpg';
import Weights1 from '../Images/Weights1.jpg';
import Weights2 from '../Images/Weights2.jpg';
import Weights3 from '../Images/Weights3.jpg';
import Bench1 from '../Images/Bench1.jpg';
import Bench2 from '../Images/Bench2.jpg';
import Bench3 from '../Images/Bench3.jpg';
import BoxKit1 from '../Images/BoxKit1.jpg';
import BoxKit2 from '../Images/BoxKit2.jpg';
import BoxKit3 from '../Images/BoxKit3.jpg';
import Bike1 from '../Images/Bike1.jpg';
import Bike2 from '../Images/Bike2.jpg';
import Bike3 from '../Images/Bike3.jpg';
import Ball1 from '../Images/Ball1.jpg';
import Ball2 from '../Images/Ball2.jpeg';
import Ball3 from '../Images/Ball3.jpg';
import Treadmill1 from '../Images/Treadmill1.jpg';
import Treadmill2 from '../Images/Treadmill2.jpg';
import Treadmill3 from '../Images/Treadmill3.jpg';
import GymBag1 from '../Images/GymBag1.jpg';
import GymBag2 from '../Images/GymBag2.jpg';
import GymBag3 from '../Images/GymBag3.jpg';
import { ADD_TO_CART,REMOVE_ITEM,SUB_QUANTITY,ADD_QUANTITY,ADD_SHIPPING} from './cart-Actions.js'



const initState = {
    items: [
        {id:1,title:'Womans Leggings', desc: "These are comfortable & resistant leggings ", price:90, img1: Leggings1, img2: Leggings2, img3: Leggings3
    },
        {id:2,title:'Womans Trainers', desc: "Trainers made for any type of sport or terrain", price:180, img1: FemaleTrain1, img2: FemaleTrain2, img3: FemaleTrain3
    },
        {id:3,title:'Womans Jacket', desc: "Stylish jacket made for durablity & keep you warm", price:150, img1: SportJack1, img2: SportJack2, img3: SportJack3
    },
        {id:4,title:'Womans Tank', desc: "Sleek, second skin design", price:60, img1: FemaleTank1, img2: FemaleTank2, img3: FemaleTank3
    },
        {id:5,title:'Womens Shorts', desc: "Breathable bikers shorts ", price:40, img1: Shorts1, img2: Shorts2, img3: Shorts3
    },
        {id:6,title:'Sports Bra', desc: "Elasticised for comfortabilty", price:75, img1: SportBra1, img2: SportBra2, img3: SportBra3
    },
        {id:7,title:'Mens Shorts', desc: "Long-lasting & sweat resistant", price:40, img1: GymShorts1, img2: GymShorts2, img3: GymShorts3
    },
        {id:8,title:'Mens Trainers', desc: "Trainers that support heavy terrain", price:165, img1: MaleTrain1, img2: MaleTrain2, img3: MaleTrain3
    },
        {id:9,title:'Mens Sweatpants', desc: "Cozy sweats ", price:110, img1: Sweatpants1, img2: Sweatpants2, img3: Sweatpants3
    },
        {id:10,title:'Fitbit', desc: "Keep track of all aspects of your fitness", price:250, img1: Fitbit1, img2: Fitbit2, img3: Fitbit3
    },
        {id:11,title:'Water Bottle', desc: "Inline cooling keeps this steel bottle cold", price:30, img1: WaterBottle1, img2: WaterBottle2, img3: WaterBottle3
    },
        {id:12,title:'Yoga Mat', desc: "Anti-bacterial Yoga Mat thats easy to travel with", price:45, img1: YogaMat1, img2: YogaMat2, img3: YogaMat3
    },
        {id:13,title:'Weights', desc: "From light to heavy weight lifting, this set of weights has it all", price:230, img1: Weights1, img2: Weights2, img3: Weights3
    },
        {id:14,title:'Bench', desc: "Compact multi-purpose bench & a addition to your home gym", price:280, img1: Bench1, img2: Bench2, img3: Bench3
    },
        {id:15,title:'Boxing Kit', desc: "Starter kit for those who are not faint of heart ", price:160, img1: BoxKit1, img2: BoxKit2, img3: BoxKit3
    },
        {id:16,title:'Bike', desc: "Compact exercise bike with heart-rate monitor", price:390, img1: Bike1, img2: Bike2, img3: Bike3
    },
        {id:17,title:'Exercise Ball', desc: "Multi-purpose & durable inflatable exercise ball ", price:55, img1: Ball1, img2: Ball2, img3: Ball3
    },
        {id:18,title:'Treadmill', desc: "High tech fitness at your disposal", price:480, img1: Treadmill1, img2: Treadmill2, img3: Treadmill3
    },
        {id:19,title:'Gymbag', desc: "Spacious yet compact Gymbag with additional pockets ", price:140, img1: GymBag1, img2: GymBag2, img3: GymBag3
    },
    ],
    addedItems:[],
    total: 0

}




const cartReducer = (state = initState ,action)=>{
    
    if(action.type === ADD_TO_CART){
          let addedItem = state.items.find(item=> item.id === action.id)
          //Checks if the action id exists is in the added items
         let existedItem= state.addedItems.find(item=> action.id === item.id)
         if(existedItem)
         {
            addedItem.quantity += 1 
             return{
                ...state,
                 total: state.total + addedItem.price 
                  }
        }
         else{
            addedItem.quantity = 1;
            //calculating the total
            let newTotal = state.total + addedItem.price 
            
            return{
                ...state,
                addedItems: [...state.addedItems, addedItem],
                total : newTotal
            }
            
        }
    }
    if(action.type === REMOVE_ITEM){
        let itemToRemove= state.addedItems.find(item=> action.id === item.id)
        let newItems = state.addedItems.filter(item=> action.id !== item.id)
        
        //calculating the total
        let newTotal = state.total - (itemToRemove.price * itemToRemove.quantity )
        console.log(itemToRemove)
        return{
            ...state,
            addedItems: newItems,
            total: newTotal
        }
    };
    if(action.type=== ADD_QUANTITY){  
        let addedItem = state.items.find(item=> item.id === action.id) 
        //if the qt == 0 then it should be removed
        if(addedItem.quantity === 1){
            let newItems = state.addedItems.filter(item=>item.id !== action.id)
            let newTotal = state.total + addedItem.price
            return{
                ...state,
                addedItems: newItems,
                total: newTotal
            }
        }
        else {
            addedItem.quantity += 1;
            let newTotal = state.total += addedItem.price
            return{
                ...state,
                total: newTotal
            }
        }
        
    };
    if(action.type=== SUB_QUANTITY){  
        let addedItem = state.items.find(item=> item.id === action.id) 
        //if the qt == 0 then it should be removed
        if(addedItem.quantity === 1){
            let newItems = state.addedItems.filter(item=>item.id !== action.id)
            let newTotal = state.total - addedItem.price
            return{
                ...state,
                addedItems: newItems,
                total: newTotal
            }
        }
        else {
            addedItem.quantity -= 1
            let newTotal = state.total - addedItem.price
            return{
                ...state,
                total: newTotal
            }
        }
        
    };

    if(action.type=== ADD_SHIPPING){
          return{
              ...state,
              total: state.total + 6
          }
    }

    if(action.type=== 'SUB_SHIPPING'){
        return{
            ...state,
            total: state.total - 6
        }
  }else{
    return state;
    }
    
};

export default cartReducer