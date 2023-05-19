import { __ } from "@wordpress/i18n";

import { DepositData } from "../../api.d";

import './style.scss';

export const DepositSingle = ( deposit: DepositData ) => {
	return (
		<article className="deposit-single">
			<h3 className="deposit-single__title">
				<a href={ deposit.link }>{ deposit.title }</a>
			</h3>
			<dl>
				<dt>{ __( 'Author(s):', 'disciplinary-homes' ) }</dt>
				<dd>{ deposit.authors.join(', ') }</dd>
				<dt>{ __( 'Editor(s):', 'disciplinary-homes' ) }</dt>
				<dd>{ deposit.editors.join(', ') }</dd>
				<dt>{ __( 'Date:', 'disciplinary-homes' ) }</dt>
				<dd>{ deposit.date }</dd>
			</dl>
		</article>
	);
}
