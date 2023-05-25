import { useState, useEffect } from '@wordpress/element';
import apiStore from '../../hooks/api-store';
import { resolveSelect } from '@wordpress/data';

import { DepositList } from '../deposit-list/deposit-list';

export const RecentDeposits = ( props : any ) => {
	const {
		maxDeposits = 3,
	} = props;

	const [ deposits, setDeposits ] = useState( [] );

	useEffect(() => {
		resolveSelect( apiStore ).getAPIData().then((data : any) => {
			setDeposits(data.recent_deposits.slice(0, maxDeposits));
		});
	}, [ maxDeposits ]);

	return (
		<DepositList
			deposits={ deposits }
		/>
	);
}
