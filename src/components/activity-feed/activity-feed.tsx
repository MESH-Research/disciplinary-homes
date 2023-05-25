import { useState, useEffect } from '@wordpress/element';
import apiStore from '../../hooks/api-store';
import { resolveSelect } from '@wordpress/data';

import { ActivityItem } from '../activity-item/activity-item';

import { ActivityItemData } from '../../api.d';

import './style.scss';

export const ActivityFeed = ( props : any ) => {
	const {
		maxItems = 5,
	} = props;

	const [ items, setItems ] = useState( [] );

	useEffect(() => {
		resolveSelect( apiStore ).getAPIData().then((data : any) => {
			setItems(data.activity_feed.slice(0, maxItems));
		});
	}, [ maxItems ]);

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
