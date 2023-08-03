import logoImage from './kress-logo.jpg';

import './style.scss';

export const GrantFooter = ( props : any ) => {
	const {
		primaryText
	} = props;

	return (
		<div className="grant-footer">
			<p className="grant-footer__primary-text">{ primaryText }</p>
			<img
				className="grant-footer__logo"
				src={ logoImage }
				alt="Kress Foundation logo"
			/>
		</div>
	);
}
