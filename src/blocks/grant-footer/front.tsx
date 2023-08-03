import React from 'react';
import { hydrateRoot } from '@wordpress/element';
import { GrantFooter } from '../../components/grant-footer/grant-footer';

window.addEventListener( 'DOMContentLoaded', () => {
	const recentDepositLists = document.querySelectorAll( '.wp-block-disciplinary-homes-grant-footer' );
	Array.from( recentDepositLists ).forEach( recentDepositList => {
		const attribuesJSON = (recentDepositList as HTMLElement).dataset.attributes;
		const attributes = JSON.parse( attribuesJSON ? attribuesJSON : '{}' );
		hydrateRoot(
			recentDepositList,
			<GrantFooter
				primaryText = { attributes.primaryText }
			/>
		);
	} );
} );
