import { __ } from '@wordpress/i18n';
import { useBlockProps } from '@wordpress/block-editor';
import { InspectorControls } from '@wordpress/block-editor';
import { PanelBody, PanelRow, TextControl } from '@wordpress/components';

import { GrantFooter } from '../../components/grant-footer/grant-footer';

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
		primaryText
	} = attributes;

	return (
		<div { ...useBlockProps() } >
			<InspectorControls>
				<PanelBody title={ __( 'Settings', 'disciplinary-homes' ) }>
					<PanelRow>
						<TextControl
							label={ __( 'Primary Text', 'disciplinary-homes' ) }
							value={ primaryText }
							onChange={ ( value ) => setAttributes( { primaryText: value } ) }
						/>
					</PanelRow>
				</PanelBody>
			</InspectorControls>
			<GrantFooter
				primaryText={ primaryText }
			/>
		</div>
	);
}
