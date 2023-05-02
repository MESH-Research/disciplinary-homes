import { ActivityItemData } from "../../api.d";

import './style.scss';

export const ActivityItem = ( item: ActivityItemData ) => {
	return (
		<div className="activity-item">
			<div className="activity-item__header">
				<a href={ item.child?.link } className="activity-item__header__link">
					<div className="activity-item__header__title">
						{ item.child?.title }
					</div>
				</a>
			</div>
			<div className="activity-item__content">
				{ item.child?.preview }
			</div>
		</div>
	);
}