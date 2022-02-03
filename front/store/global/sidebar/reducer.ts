import produce from "immer";
import { SIDE_BAR_TOGGLE, sidebarToggleAction } from "./action";

export type SidebarAction = ReturnType<typeof sidebarToggleAction>;
export interface SidebarState {
  toggle: boolean;
}

const initialState: SidebarState = {
  toggle: false,
};

const reducer = (state: SidebarState = initialState, action: SidebarAction) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case SIDE_BAR_TOGGLE:
        draft.toggle = !draft.toggle;
        break;
      default:
        return state;
    }
  });
};

export default reducer;
