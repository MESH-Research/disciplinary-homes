import { __ } from '@wordpress/i18n';

import './style.scss';

export const DisciplineActions = ( props : any ) => {
	const {
		showFindPeople = true,
		showExplorePublications = true,
		showBrowseGroups = true,
		showBrowseSites = true
	} = props;

	return (
		<div className="discipline-actions">
			{
				showFindPeople &&
				<a className="discipline-actions__button" href="#">
					{ __( 'Find People', 'disciplinary-homes' ) }
				</a>
			}
			{
				showExplorePublications &&
				<a className="discipline-actions__button" href="#">
					{ __( 'Explore Publications', 'disciplinary-homes' ) }
				</a>
			}
			{
				showBrowseGroups &&
				<a className="discipline-actions__button" href="#">
					{ __( 'Browse Groups', 'disciplinary-homes' ) }
				</a>
			}
			{
				showBrowseSites &&
				<a className="discipline-actions__button" href="#">
					{ __( 'Browse Sites', 'disciplinary-homes' ) }
				</a>
			}
		</div>
	);
}
