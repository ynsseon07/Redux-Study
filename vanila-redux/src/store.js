import { createStore } from 'redux';
import { configureStore, createAction, createReducer } from '@reduxjs/toolkit';

// const ADD = "ADD";
// const DELETE = "DELETE";

const addToDo = createAction("ADD");
const deleteToDo = createAction("DELETE");
// console.log(addToDo(), deleteToDo())

// action creator
// const addToDo = (text) => {
//     return {
//         type: ADD,
//         text
//     };
// };
// const deleteToDo = (id) => {
//     return {
//         type: DELETE,
//         id: parseInt(id)
//     };
// };

// const reducer = (state = [], action) => {
//     switch (action.type) {
//         case addToDo.type:
//             // console.log(action);
//             return [{ text: action.payload, id: Date.now() }, ...state];
//         case deleteToDo.type:
//             return state.filter(toDo => toDo.id !== action.payload);
//         default:
//             return state;
//     }
// }

// createReducer()에서 작업할 때 두 가지 선택지
const reducer = createReducer([], {
    // -> state를 mutate (리턴값 X) 
    // -- 기존 reducer에서는 state를 mutate 하는 것이 불가능했음
    [addToDo]: (state, action) => {
        state.push({ text: action.payload, id: Date.now() });
    },
    // -> 새로운 state를 리턴
    [deleteToDo]: (state, action) => state.filter(toDo => toDo.id !== action.payload)
})

const store = configureStore({reducer});

export const actionCreators = {
    addToDo,
    deleteToDo
};

export default store;