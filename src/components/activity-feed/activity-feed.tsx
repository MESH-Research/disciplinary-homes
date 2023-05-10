import { useState, useEffect } from '@wordpress/element';
import apiFetch from '@wordpress/api-fetch';

import { ActivityItem } from '../activity-item/activity-item';

import { ActivityItemData } from '../../api.d';

import './style.scss';

export const ActivityFeed = ( props : any ) => {
	const {
		maxItems = 5,
	} = props;

	const [ items, setItems ] = useState( [] );

	useEffect( () => {
		apiFetch( { path: '/disciplinary-homes/v1/feed' } )
			.then( ( data : any ) => {
				if ( data.activity_feed ) {
					setItems( data.activity_feed.slice(0, maxItems) );
				}
			}
		);
	}, [] );

	const activityItems = items.map( ( item : ActivityItemData, index ) => {
		return (
			<ActivityItem
				key={ index }
				{ ...item }
			/>
		);
	} );

	return (
		<div className="activity-feed">
			{ activityItems }
		</div>
	);
}
