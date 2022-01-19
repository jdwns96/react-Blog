export const DEMO_SET_NUMBER = "DEMO_SET_NUMBER" as const;

export const DEMO_REQUEST = "DEMO_REQUEST" as const;
export const DEMO_SUCCESS = "DEMO_SUCCESS" as const;
export const DEMO_FAIL = "DEMO_FAIL" as const;

export const demoSetNumberAction = (number: number) => ({ type: DEMO_SET_NUMBER, number });

export const demoRequestAction = () => ({ type: DEMO_REQUEST });
export const demoSuccessAction = () => ({ type: DEMO_SUCCESS });
export const demoFailAction = () => ({ type: DEMO_FAIL });
