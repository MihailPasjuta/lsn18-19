import * as Constants from'../actions';
export default function reducer(state, payload){
	switch(payload.type){
		case Constants.PLUS:
			return {count: state.count+1}
		case Constants.DECREMENT:
			return {count: state.count-1}
	}
	if(state){
		return state;
	}
	
	return {count:0};
}