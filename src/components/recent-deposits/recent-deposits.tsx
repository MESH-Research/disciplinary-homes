import { useState, useEffect } from '@wordpress/element';
import apiFetch from '@wordpress/api-fetch';

import { DepositList } from '../deposit-list/deposit-list';

export const RecentDeposits = ( props : any ) => {
	const {
		maxDeposits = 3,
	} = props;

	const [ deposits, setDeposits ] = useState( [] );

	useEffect( () => {
		apiFetch( { path: '/disciplinary-homes/v1/feed' } )
			.then( ( data : any ) => {
				if ( data.recent_deposits ) {
					setDeposits( data.recent_deposits.slice(0, maxDeposits) );
				}
			}
		);
	}, [] );

	return (
		<DepositList
			deposits={ deposits }
		/>
	);
}
