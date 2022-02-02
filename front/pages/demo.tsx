import type { NextPage } from "next";

import wrapper, { SagaStore } from "../store";
import { END } from "@redux-saga/core";
import { useSelector } from "react-redux";
import { RootState } from "../store/rootReducer";
import { demoSetNumberAction } from "../store/demo/action";

const Demo: NextPage = () => {
  const { count } = useSelector((store: RootState) => store.demo);
  return <div>{count}</div>;
};

export default Demo;

export const getServerSideProps = wrapper.getServerSideProps((store) => async (ctx) => {
  store.dispatch(demoSetNumberAction(10));
  store.dispatch(END);
  await (store as SagaStore).sagaTask.toPromise();

  return {
    props: {},
  };
});
