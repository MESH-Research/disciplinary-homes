import './style.scss';

export const MetricsSingle = ( props: any ) => {
	const {
		label,
		value
	} = props;

	return (
		<div className="metrics-single">
			<span className="metrics-single__value">{ value.toLocaleString() }</span>
			<span className="metrics-single__label">{ label }</span>
		</div>
	);
}
