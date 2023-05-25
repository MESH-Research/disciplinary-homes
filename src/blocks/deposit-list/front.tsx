import React from 'react';
import { hydrateRoot } from '@wordpress/element';
import { DepositList } from '../../components/deposit-list/deposit-list';

window.addEventListener( 'DOMContentLoaded', () => {
	const recentDepositLists = document.querySelectorAll( '.wp-block-disciplinary-homes-deposit-list' );
	Array.from( recentDepositLists ).forEach( recentDepositList => {
		const attribuesJSON = (recentDepositList as HTMLElement).dataset.attributes;
		const attributes = JSON.parse( attribuesJSON ? attribuesJSON : '{}' );
		hydrateRoot(
			recentDepositList,
			<DepositList
				queryMode = { attributes.queryMode }
				maxDeposits = { attributes.maxDeposits }
			/>
		);
	} );
} );
