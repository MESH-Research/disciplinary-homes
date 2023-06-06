import React from 'react';
import { hydrateRoot } from '@wordpress/element';
import { MetricsRow } from '../../components/metrics-row/metrics-row';

window.addEventListener( 'DOMContentLoaded', () => {
	const recentDepositLists = document.querySelectorAll( '.wp-block-disciplinary-homes-metrics-row' );
	Array.from( recentDepositLists ).forEach( recentDepositList => {
		const attribuesJSON = (recentDepositList as HTMLElement).dataset.attributes;
		const attributes = JSON.parse( attribuesJSON ? attribuesJSON : '{}' );
		hydrateRoot(
			recentDepositList,
			<MetricsRow
				showFollowerCount = { attributes.showFollowerCount }
				showDepositCount = { attributes.showDepositCount }
				showDownloadCount = { attributes.showDownloadCount }
			/>
		);
	} );
} );
