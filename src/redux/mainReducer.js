import { combineReducers } from "redux";

/**
 * You can import more reducers here
 */


//@BlueprintReduxImportInsertion
import CalendarView3122115Reducer from '../features/CalendarView3122115/redux/reducers';
import Dashboard21122114Reducer from '../features/Dashboard21122114/redux/reducers'

export const combinedReducers = combineReducers({
  blank: (state, action) => {
    if (state == null) state = [];
    return state;
  },


  //@BlueprintReduxCombineInsertion
CalendarView3122115: CalendarView3122115Reducer,
Dashboard21122114: Dashboard21122114Reducer,

});