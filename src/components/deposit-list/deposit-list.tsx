import { useState, useEffect } from '@wordpress/element';
import apiStore from '../../hooks/api-store';
import { resolveSelect } from '@wordpress/data';
import { DepositSingle } from '../deposit-single/deposit-single';

import { DepositData } from '../../api.d';

import './style.scss';

export const DepositList = ( props : any ) => {
	const {
		queryMode = 'recent',
		maxDeposits = 3,
	} = props;

	const [ deposits, setDeposits ] = useState( [] );

	useEffect(() => {
		resolveSelect( apiStore ).getAPIData().then((data : any) => {
			setDeposits(data[queryMode + '_deposits'].slice(0, maxDeposits));
		});
	}, [ queryMode, maxDeposits ]);

	const depositList = deposits.map( ( deposit : DepositData, index ) => {
		return (
			<DepositSingle
				key={ index }
				{ ...deposit }
			/>
		);
	} );

	return (
		<div className="deposit-list">
			{ depositList }
		</div>
	);
}
