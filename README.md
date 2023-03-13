### Overview
A react app that is a glasses store, that uses useContext and useReducer for state.

BasketProduct.jsx:
- Component for our basket, to look at what we added and the total price

Nav.jsx:
- This navigates us either to the home page, or to the basket 

Product.jsx:
- This is each product that is on the home screen

reducer.js
- holds our reducer for each action

StoreContext.js
- Lets us dispatch our actions for the reducer 
- useContext used to access each of our arrays in adding/removing stuff

Basket.js
- Maps everything in our basket by calling basketproduct


## What I learned
- We can only export default, function
- UseContext is nice to pass information down to components