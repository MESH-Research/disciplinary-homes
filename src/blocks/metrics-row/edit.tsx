import { __ } from '@wordpress/i18n';
import { useBlockProps } from '@wordpress/block-editor';
import { InspectorControls } from '@wordpress/block-editor';
import { PanelBody, PanelRow, ToggleControl } from '@wordpress/components';

import { MetricsRow } from '../../components/metrics-row/metrics-row';

import './editor.scss';

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
		showFollowerCount,
		showDepositCount,
		showDownloadCount
	} = attributes;

	return (
		<div { ...useBlockProps() } >
			<InspectorControls>
				<PanelBody title={ __( 'Settings', 'disciplinary-homes' ) }>
					<PanelRow>
						<ToggleControl
							label={ __( 'Show Follower Count', 'disciplinary-homes' ) }
							checked={ showFollowerCount }
							onChange={ ( value ) => setAttributes( { showFollowerCount: value } ) }
						/>
					</PanelRow>
					<PanelRow>
						<ToggleControl
							label={ __( 'Show Deposit Count', 'disciplinary-homes' ) }
							checked={ showDepositCount }
							onChange={ ( value ) => setAttributes( { showDepositCount: value } ) }
						/>
					</PanelRow>
					<PanelRow>
						<ToggleControl
							label={ __( 'Show Download Count', 'disciplinary-homes' ) }
							checked={ showDownloadCount }
							onChange={ ( value ) => setAttributes( { showDownloadCount: value } ) }
						/>
					</PanelRow>
				</PanelBody>
			</InspectorControls>
			<MetricsRow
				showFollowerCount={ showFollowerCount }
				showDepositCount={ showDepositCount }
				showDownloadCount={ showDownloadCount }
			/>
		</div>
	);
}
