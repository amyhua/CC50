import * as types from '../actionTypes';

const initialState = {
	data: [],
	mediaByCsid: [],
	isLoading: false,
	error: null
};

const programsReducer = (state=initialState, action) => {
	switch (action.type) {
		case types.FETCH_PROGRAMS:
				return {
					isLoading: true,
					error: null
				};
		case types.RECEIVED_PROGRAMS:
			return {
				isLoading: false,
				error: null,
				data: action.data
			};
		case types.RECEIVED_PROGRAM_MEDIA:
			// TODO
			const newStateData = state.data.slice();
			return Object.assign(state, {
				data: newStateData
			})
		case types.FAILED_PROGRAMS:
			return {
				isLoading: false,
				error: action.error,
				data: []
			};
		default:
			return state;
	}
};

export default programsReducer;