import { __ } from '@wordpress/i18n';
import { useBlockProps } from '@wordpress/block-editor';
import { InspectorControls } from '@wordpress/block-editor';
import { PanelBody, PanelRow, TextControl } from '@wordpress/components';

import { RecentDeposits } from '../../components/recent-deposits/recent-deposits';

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
		maxDeposits
	} = attributes;

	return (
		<div { ...useBlockProps() } >
			<InspectorControls>
				<PanelBody title={ __( 'Settings', 'react-frontend-demo' ) }>
					<PanelRow>
						<TextControl
							label={ __( 'Max Deposits', 'react-frontend-demo' ) }
							value={ maxDeposits }
							onChange={ ( value ) => setAttributes( { maxDeposits: value } ) }
							type="number"
						/>
					</PanelRow>
				</PanelBody>
			</InspectorControls>
			<RecentDeposits
				maxDeposits={ maxDeposits }
			/>
		</div>
	);
}
