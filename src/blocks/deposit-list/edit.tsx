import { __ } from '@wordpress/i18n';
import { useBlockProps } from '@wordpress/block-editor';
import { InspectorControls } from '@wordpress/block-editor';
import { PanelBody, PanelRow, TextControl, RadioControl } from '@wordpress/components';

import { DepositList } from '../../components/deposit-list/deposit-list';

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
		queryMode,
		maxDeposits
	} = attributes;

	return (
		<div { ...useBlockProps() } >
			<InspectorControls>
				<PanelBody title={ __( 'Settings', 'disciplinary-homes' ) }>
					<PanelRow>
						<RadioControl
							label={ __( 'Query Mode', 'disciplinary-homes' ) }
							selected={ queryMode }
							options={ [
								{ label: 'Most recent', value: 'recent' },
								{ label: 'Most popular', value: 'popular' },
							] }
							onChange={ ( value ) => setAttributes( { queryMode: value } ) }
						/>
					</PanelRow>
					<PanelRow>
						<TextControl
							label={ __( 'Max Deposits', 'disciplinary-homes' ) }
							value={ maxDeposits }
							onChange={ ( value ) => setAttributes( { maxDeposits: value } ) }
							type="number"
						/>
					</PanelRow>
				</PanelBody>
			</InspectorControls>
			<DepositList
				queryMode={ queryMode }
				maxDeposits={ maxDeposits }
			/>
		</div>
	);
}
