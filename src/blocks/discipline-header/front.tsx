import React from 'react';
import { hydrateRoot } from '@wordpress/element';
import { DisciplineHeader } from '../../components/discipline-header/discipline-header';

window.addEventListener( 'DOMContentLoaded', () => {
	const disciplineHeaders = document.querySelectorAll( '.wp-block-disciplinary-homes-discipline-header' );
	Array.from( disciplineHeaders ).forEach( disciplineHeader => {
		const attribuesJSON = (disciplineHeader as HTMLElement).dataset.attributes;
		const attributes = JSON.parse( attribuesJSON ? attribuesJSON : '{}' );
		hydrateRoot(
			disciplineHeader,
			<DisciplineHeader
				headerText = { attributes.headerText }
				descriptionText = { attributes.descriptionText }
				sliderMediaIds = { attributes.sliderMediaIds }
			/>
		);
	} );
} );
