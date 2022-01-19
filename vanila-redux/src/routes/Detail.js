import React from 'react';
import { connect } from 'react-redux';

function Detail({toDo}) {
    console.log(toDo);
    return <h1>Detail</h1>;
}

function mapStateToProps(state, ownProps) {
    const {
        match: {
            params: {id}
        }
    } = ownProps;
    // console.log(id);
    console.log(ownProps);
    return { toDo: state.find(toDo => toDo.id === parseInt(id)) };
}

export default connect(mapStateToProps)(Detail);