import { __ } from "@wordpress/i18n";

import { DepositData } from "../../api.d";

import './style.scss';

export const DepositSingle = ( deposit: DepositData ) => {
	type AnchorProps = React.DetailedHTMLProps<React.HTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>;
	const createSearchByFacetLink = (query : string, facet : string, props? : AnchorProps) => {
		const url = `/deposits/?facets[${facet}][]=${encodeURIComponent(query)}`;
		return <a href={ url } { ...props }>{ query }</a>;
	};

	const renderCommaSeparatedElems = (elems : Array<JSX.Element>) => {
		return elems.map((elem, index) => {
			if (index == elems.length - 1) { return elem; }
			else { return [ elem, ', ' ]; }
		}).flat();
	};

	const authorLinks = deposit.authors.map((author, index) => {
		return createSearchByFacetLink(author, 'author_facet', { key: index });
	});

	const dateLink = createSearchByFacetLink(deposit.date, 'pub_date_facet');

	return (
		<article className="deposit-single">
			<h3 className="deposit-single__title">
				<a href={ deposit.link }>{ deposit.title }</a>
			</h3>
			<dl>
				<dt>{ __( 'Author(s):', 'disciplinary-homes' ) }</dt>
				<dd>{ renderCommaSeparatedElems(authorLinks) }</dd>
				<dt>{ __( 'Date:', 'disciplinary-homes' ) }</dt>
				<dd>{ dateLink }</dd>
			</dl>
		</article>
	);
}
