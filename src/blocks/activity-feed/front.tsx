import React from 'react';
import { hydrateRoot } from '@wordpress/element';
import { ActivityFeed } from '../../components/activity-feed/activity-feed';

window.addEventListener( 'DOMContentLoaded', () => {
	const activityFeeds = document.querySelectorAll( '.wp-block-disciplinary-homes-activity-feed' );
	Array.from( activityFeeds ).forEach( activityFeed => {
		const attribuesJSON = (activityFeed as HTMLElement).dataset.attributes;
		const attributes = JSON.parse( attribuesJSON ? attribuesJSON : '{}' );
		hydrateRoot(
			activityFeed,
			<ActivityFeed
				maxItems = { attributes.maxItems }
			/>
		);
	} );
} );
