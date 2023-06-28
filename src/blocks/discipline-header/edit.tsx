import { __ } from '@wordpress/i18n';
import { useBlockProps } from '@wordpress/block-editor';
import { InspectorControls, MediaUpload, MediaUploadCheck } from '@wordpress/block-editor';
import { PanelBody, PanelRow, TextControl, Button } from '@wordpress/components';

import { DisciplineHeader } from '../../components/discipline-header/discipline-header';

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
		headerText,
		descriptionText,
		sliderMediaIds
	} = attributes;

	return (
		<div { ...useBlockProps() } >
			<InspectorControls>
				<PanelBody title={ __( 'Settings', 'disciplinary-homes' ) }>
					<PanelRow>
						<TextControl
							label={ __( 'Header Text', 'disciplinary-homes' ) }
							value={ headerText }
							onChange={ ( value ) => setAttributes( { headerText: value } ) }
						/>
					</PanelRow>
					<PanelRow>
						<TextControl
							label={ __( 'Description Text', 'disciplinary-homes' ) }
							value={ descriptionText }
							onChange={ ( value ) => setAttributes( { descriptionText: value } ) }
						/>
					</PanelRow>
					<PanelRow>
						<MediaUploadCheck>
							<MediaUpload
								onSelect={ ( value ) => setAttributes( { sliderMediaIds: value } ) }
								allowedTypes={ [ 'image' ] }
								render={ ( { open } ) => (
									<Button onClick={ open } variant="secondary">
										{ __( 'Select Slider Images', 'disciplinary-homes' ) }
									</Button>
								) }
								multiple={ true }
							/>
						</MediaUploadCheck>
					</PanelRow>
				</PanelBody>
			</InspectorControls>
			<DisciplineHeader
				headerText={ headerText }
				descriptionText={ descriptionText }
				sliderMediaIds={ sliderMediaIds }
			/>
		</div>
	);
}
