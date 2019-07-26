import * as Constants from '../actions'
export default(store)=>(next)=>(payload)=>{
	if(payload.type===Constants.ADD){
		next({type: Constants.PLUS})
	}
	else
	if(payload.type===Constants.REMOVE){
		next({type: Constants.DECREMENT})
	}
		next(payload);
	console.log(payload.type, payload);
}