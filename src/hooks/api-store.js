import apiFetch from '@wordpress/api-fetch';
import { createReduxStore, register } from '@wordpress/data';

const DEFAULT_STATE = {
	apiData: {}
};

const actions = {
	setAPIData( data ) {
		return {
			type: 'SET_API_DATA',
			data,
		};
	},

	fetchFromAPI( path ) {
		return {
			type: 'FETCH_FROM_API',
			path,
		};
	},
};

const store = createReduxStore( 'api-store', {
	reducer( state = DEFAULT_STATE, action ) {
		switch ( action.type ) {
			case 'SET_API_DATA':
				return {
					...state,
					apiData: {
						...action.data
					},
				};
		}

		return state;
	},

	actions,

	selectors: {
		getAPIData( state ) {
			return state.apiData;
		},
	},

	controls: {
		FETCH_FROM_API( action ) {
			return apiFetch( { path: action.path } );
		},
	},

	resolvers: {
		*getAPIData() {
			const path = '/disciplinary-homes/v1/feed';
			const data = yield actions.fetchFromAPI( path );
			return actions.setAPIData( data );
		},
	},
} );

register( store );

export default store.name;
