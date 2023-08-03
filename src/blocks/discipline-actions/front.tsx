import React from 'react';
import { hydrateRoot } from '@wordpress/element';
import { DisciplineActions } from '../../components/discipline-actions/discipline-actions';

window.addEventListener( 'DOMContentLoaded', () => {
	const activityFeeds = document.querySelectorAll( '.wp-block-disciplinary-homes-discipline-actions' );
	Array.from( activityFeeds ).forEach( activityFeed => {
		const attribuesJSON = (activityFeed as HTMLElement).dataset.attributes;
		const attributes = JSON.parse( attribuesJSON ? attribuesJSON : '{}' );
		hydrateRoot(
			activityFeed,
			<DisciplineActions
				showFindPeople={ attributes.showFindPeople }
				showExplorePublications={ attributes.showExplorePublications }
				showBrowseGroups={ attributes.showBrowseGroups }
				showBrowseSites={ attributes.showBrowseSites }
			/>
		);
	} );
} );
