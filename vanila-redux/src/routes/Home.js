import React, { useState } from 'react';
import { connect } from 'react-redux';
import ToDo from '../components/ToDo';
import { actionCreators } from '../store';

function Home({ toDos, addToDo }) {
    console.log(toDos);
    const [text, setText] = useState("");
    
    function onChange(e) {
        setText(e.target.value);
    }

    function onSubmit(e) {
        e.preventDefault();
        addToDo(text)
        setText("");
    }

    return (
        <>
        <h1>To Do</h1>
        <form onSubmit={onSubmit}>
            <input type="text" value={text} onChange={onChange} />
            <button>Add</button>
        </form>
        <ul>
            {toDos.map(toDo => (<ToDo {...toDo} key={toDo.id} />))}
        </ul>
        </>
    );
}

// Redux store로부터 state를 가져옴
// Redux state로부터 컴포넌트에 prop으로써 전달
function mapStateToProps(state) {
    // console.log(state);
    return { toDos: state };
}

// 컴포넌트가 dispatch 동작을 하기 위해 사용
function mapDispatchToProps(dispatch) {
    return {
        // text argument가 필요한 function 선언
        addToDo: (text) => dispatch(actionCreators.addToDo(text))

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);