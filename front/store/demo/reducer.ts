import produce from "immer";
import { DEMO_FAIL, DEMO_REQUEST, DEMO_SET_NUMBER, DEMO_SUCCESS, demoFailAction, demoRequestAction, demoSetNumberAction, demoSuccessAction } from "./action";

export type DemoAction = ReturnType<typeof demoSetNumberAction> | ReturnType<typeof demoRequestAction> | ReturnType<typeof demoSuccessAction> | ReturnType<typeof demoFailAction>;
export type DemoState = {
  count: number;
};

const initialState = {
  count: 0,
};

const reducer = (state: DemoState = initialState, action: DemoAction) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case DEMO_SET_NUMBER:
        draft.count = action.number;
        break;

      case DEMO_REQUEST:
        break;
      case DEMO_SUCCESS:
        break;
      case DEMO_FAIL:
        break;

      default:
        return state;
    }
  });
};

export default reducer;
