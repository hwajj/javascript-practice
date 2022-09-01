import { configureStore, createAction, createReducer } from '@reduxjs/toolkit';
const counterHead = document.querySelector('h1');
const btnIncrease = document.querySelector('#increase');
const btnDecrease = document.querySelector('#decrease');

const increase = createAction('INCREASE');
const decrease = createAction('DECREASE');

//액션 생성함수
const counter = createReducer(0, {
  INCREASE: (state) => state + 1,
  DECREASE: (state) => state - 1,
});

const store = configureStore({
  reducer: counter,
});

const render = () => {
  counterHead.innerText = store.getState().toString();
};

render();
store.subscribe(render);

btnIncrease.addEventListener('click', function () {
  console.log(store);
  store.dispatch(increase());
});
btnDecrease.addEventListener('click', function () {
  store.dispatch(decrease());
});
