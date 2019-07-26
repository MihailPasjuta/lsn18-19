import React from 'react';
import {connect} from 'react-redux';
import * as Constants from'../../actions';
class List extends React.Component{
	
	componentDidMount(){
		this.props.getList();
	}	
	
	render(){
		const props=this.props;
		let new_name='';
		return(
		<div>
			{props.count}
			<button onClick={props.plus}>Increment</button>
			{props.list.map(student=>(
				<div 
					key={student.name}
					onClick={props.remove.bind(null, student.name)}
				>
					{student.name}
				</div>
			))}
			<button onClick={()=>props.add(new_name)}>ADD</button>
			<input type="text" onChange={(event)=>new_name=event.target.value}></input>
		</div>
		);
	}
}
	
	export default connect(
		(state)=>({
			list: state.students,
			count: state.counter.count,
			}),
		(dispatch)=>({
			remove:(name)=> dispatch({type: Constants.REMOVE, name}),
			add:(name)=> dispatch({type: Constants.ADD, name}),
			plus:()=>dispatch({type: Constants.PLUS}),
			decrement:()=>dispatch({type: Constants.DECREMENT}),
			getList:()=>dispatch({type: Constants.GET})
		}),
	)(List);