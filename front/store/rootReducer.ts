import { HYDRATE } from "next-redux-wrapper";
import { AnyAction, combineReducers } from "redux";

import demo, { DemoState } from "./demo/reducer";

export type State = {
  demo: DemoState;
};

const rootReducer = (state: State | undefined, action: AnyAction): State => {
  switch (action.type) {
    case HYDRATE:
      console.log("HYDRATE", action);
      return action.payload;
    default: {
      const combinedReducer = combineReducers({
        demo,
      });
      return combinedReducer(state, action);
    }
  }
};
export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
