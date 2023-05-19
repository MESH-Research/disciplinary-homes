import React from 'react';
import { hydrateRoot } from '@wordpress/element';
import { RecentDeposits } from '../../components/recent-deposits/recent-deposits';

window.addEventListener( 'DOMContentLoaded', () => {
	const recentDepositLists = document.querySelectorAll( '.wp-block-disciplinary-homes-recent-deposits' );
	Array.from( recentDepositLists ).forEach( recentDepositList => {
		const attribuesJSON = (recentDepositList as HTMLElement).dataset.attributes;
		const attributes = JSON.parse( attribuesJSON ? attribuesJSON : '{}' );
		hydrateRoot(
			recentDepositList,
			<RecentDeposits
				maxDeposits = { attributes.maxDeposits }
			/>
		);
	} );
} );
