import { HYDRATE } from "next-redux-wrapper";
import { AnyAction, combineReducers } from "redux";

import demo, { DemoState } from "./demo/reducer";
import sidebar, { SidebarState } from "./global/sidebar/reducer";

export type State = {
  demo: DemoState;
  sidebar: SidebarState;
};

const rootReducer = (state: State | undefined, action: AnyAction): State => {
  switch (action.type) {
    case HYDRATE:
      console.log("HYDRATE", action);
      return action.payload;
    default: {
      const combinedReducer = combineReducers({
        demo,
        sidebar,
      });
      return combinedReducer(state, action);
    }
  }
};
export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
