import { __ } from '@wordpress/i18n';
import { useBlockProps } from '@wordpress/block-editor';
import { InspectorControls } from '@wordpress/block-editor';
import { PanelBody, PanelRow, ToggleControl } from '@wordpress/components';

import { DisciplineActions } from '../../components/discipline-actions/discipline-actions';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */
export default function Edit( { attributes, setAttributes } : any ) {
	const {
		showFindPeople,
		showExplorePublications,
		showBrowseGroups,
		showBrowseSites
	} = attributes;

	return (
		<div { ...useBlockProps() } >
			<InspectorControls>
				<PanelBody title={ __( 'Settings', 'disciplinary-homes' ) }>
					<PanelRow>
						<ToggleControl
							label={ __( 'Show \'Find People\' Button', 'disciplinary-homes' ) }
							checked={ showFindPeople }
							onChange={ ( value ) => setAttributes( { showFindPeople: value } ) }
						/>
					</PanelRow>
					<PanelRow>
						<ToggleControl
							label={ __( 'Show \'Explore Publications\' Button', 'disciplinary-homes' ) }
							checked={ showExplorePublications }
							onChange={ ( value ) => setAttributes( { showExplorePublications: value } ) }
						/>
					</PanelRow>
					<PanelRow>
						<ToggleControl
							label={ __( 'Show \'Browse Groups\' Button', 'disciplinary-homes' ) }
							checked={ showBrowseGroups }
							onChange={ ( value ) => setAttributes( { showBrowseGroups: value } ) }
						/>
					</PanelRow>
					<PanelRow>
						<ToggleControl
							label={ __( 'Show \'Browse Sites\' Button', 'disciplinary-homes' ) }
							checked={ showBrowseSites }
							onChange={ ( value ) => setAttributes( { showBrowseSites: value } ) }
						/>
					</PanelRow>
				</PanelBody>
			</InspectorControls>
			<DisciplineActions
				showFindPeople={ showFindPeople }
				showExplorePublications={ showExplorePublications }
				showBrowseGroups={ showBrowseGroups }
				showBrowseSites={ showBrowseSites }
			/>
		</div>
	);
}
