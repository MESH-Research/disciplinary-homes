import { __ } from "@wordpress/i18n";
import { ActivityItemData, ActionType } from "../../api.d";

import './style.scss';

export const ActivityItem = ( item: ActivityItemData ) => {
	return (
		<div className="activity-item">
			<div className="activity-item__avatar">
				<a href={ item.member?.profile }>
					<img
						src={ item.member?.avatar }
						loading="lazy"
						alt={`Profile picture of ${item.member?.name}`}
					/>
				</a>
			</div>
			<div className="activity-item__content">
				<div className="activity-item__header">
					<a href={ item.member?.profile }>
						{item.member?.name}
					</a>
					<span>
						{ item.action == ActionType.NEW_POST ?
							__(' wrote a new post, ', 'disciplinary-homes') :
							__(' replied to the topic ', 'disciplinary-homes') }
					</span>
					<a href={ item.child?.link } className="activity-item__header__link">
						{ item.child?.title }
					</a>
					<span>
						{ item.action == ActionType.NEW_POST ?
							__(', on the site ', 'disciplinary-homes') :
							__(' in the discussion ', 'disciplinary-homes') }
					</span>
					<a href={ item.parent?.link }>
						{ item.parent?.name }
					</a>
					<span>{ __(' on ', 'disciplinary-homes')}{ item.organization } { item.time_since }</span>
				</div>
				<blockquote className="activity-item__preview">
					{ item.child?.preview }
				</blockquote>
			</div>
		</div>
	);
}
