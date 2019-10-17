import { combineReducers } from 'redux';
import { ADD_FRIEND } from './types';
const initialState = {
  current: [],
  possible: [
    {
      firstName: "Rafi",
      lastName:"Ahmed",
      Mobile:"9600616958",
      Email:"rafiahmed@gmail.com",
     
    },
    {
      firstName: "Rajesh",
      lastName:"Kumar",
      Mobile:"8608663937",
      Email:"rajeshkumar@gmail.com",
     
    },
    {
      firstName: "Ganesh",
      lastName:"R",
      Mobile:"9600616958",
      Email:"ganesh@gamil.com",
      
    },
    {
      firstName: "Vimal",
      lastName:"Dass",
      Mobile:"9600616958",
      Email:"vimaldass@gmail.com",
    
    },
    {
      firstName: "mohan",
      lastName:"R",
      Mobile:"9600616958",
      Email:"mohan@gmail.com",
      
    },
    {
      firstName: "Hari",
      lastName:"Sudan",
      Mobile:"9600616958",
      Email:"harisudan@gmail.com",
     
    },
    {
      firstName: "Vicky",
      lastName:"A",
      Mobile:"9600616958",
      Email:"vicky@gmail.com",
     
    },
    {
      firstName: "Vinay",
      lastName:"Kumar",
      Mobile:"9600616958",
      Email:"vinay@gmail.com",
     
    },
    {
      firstName: "Rakesh",
      lastName:"M",
      Mobile:"9600616958",
      Email:"Rakesh@gmail.com",
     
    },
    {
      firstName: "Sugumar",
      lastName:"A",
      Mobile:"9600616958",
      Email:"sugumar@gmail.com",
     
    },
    {
      firstName: "Ashwin",
      lastName:"Kumar",
      Mobile:"9600616958",
      Email:"ashwin@gmail.com",
     
    },
    {
      firstName: "James",
      lastName:"R",
      Mobile:"9600616958",
      Email:"james@gmail.com",
     
    },
    {
      firstName: "Bala",
      lastName:"Cahndhar",
      Mobile:"9600616958",
      Email:"bala@gmail.com",
     
    },
    {
      firstName: "Vishweswaran",
      lastName:"D",
      Mobile:"9600616958",
      Email:"vishwa@gmail.com",
     
    },
    {
      firstName: "Faizal",
      lastName:"M",
      Mobile:"9600616958",
      Email:"faisal@gmail.com",
     
    },
    
  ]
};

const FriendReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_FRIEND:
          const {
            current,
            possible,
          } = state;
    
         
          const addedFriend = possible.splice(action.payload, 1);
          current.push(addedFriend);
          const newState = { current, possible };
          return newState;
        default:
          return state;
      }
    };
    
    export default combineReducers({
        friends: FriendReducer,
    });