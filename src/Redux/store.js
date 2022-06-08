import { configureStore } from '@reduxjs/toolkit'
import postsReducer from './postsSlice';


export const store = configureStore({
  reducer: {
    posts: postsReducer,
  },
})

// Utility functions/variables for store.subscribe() callback function handleStoreUpdate
// function getHistory(state) {
//   return state.history.pastQueries;
// }
// function getCurrentQuery(state) {
//   return state.query.present.currentQuery;
// }

// let currentHistoryValue;
// let currentQueryValue;

// Callback that logs state changes to console through store.subscribe() 
const handleStoreUpdate = () => {
  console.log(store.getState());

  // Query History
  // let previousHistoryValue = currentHistoryValue;
  // currentHistoryValue = getHistory(store.getState());
  // if (previousHistoryValue !== currentHistoryValue
  //   && previousHistoryValue !== undefined) {
  //   console.log(
  //     'Query history has changed from ',
  //     previousHistoryValue,
  //     'to',
  //     currentHistoryValue
  //   )
  // }

  // // Current Query
  // let previousQueryValue = currentQueryValue;
  // currentQueryValue = getCurrentQuery(store.getState());
  // if (previousQueryValue !== currentQueryValue
  //   && previousQueryValue !== undefined) {
  //   console.log(
  //     'Current query has changed from ',
  //     previousQueryValue,
  //     'to',
  //     currentQueryValue
  //   )
  // }
}

store.subscribe(() =>  
  {
    handleStoreUpdate()
    // localStorage.setItem('reduxState', JSON.stringify(store.getState()))
  }
)
