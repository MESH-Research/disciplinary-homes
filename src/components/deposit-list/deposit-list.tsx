import { DepositSingle } from '../deposit-single/deposit-single';

import { DepositData } from '../../api.d';

import './style.scss';

export const DepositList = ( props : any ) => {
	const {
		deposits
	} : {
		deposits: DepositData[]
	} = props;

	const depositList = deposits.map( ( deposit, index ) => {
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
