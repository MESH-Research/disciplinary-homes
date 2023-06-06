import { __ } from '@wordpress/i18n';
import { useState, useEffect } from '@wordpress/element';
import apiStore from '../../hooks/api-store';
import { resolveSelect } from '@wordpress/data';
import { MetricsSingle } from '../metrics-single/metrics-single';

import { MetricsData } from '../../api.d';

import './style.scss';

export const MetricsRow = ( props : any ) => {
	const {
		showFollowerCount = true,
		showDepositCount = true,
		showDownloadCount = true
	} = props;

	const [ metrics, setMetrics ] = useState<MetricsData>();

	useEffect(() => {
		resolveSelect( apiStore ).getAPIData().then((data : any) => {
			setMetrics(data.metrics);
		});
	}, []);

	if (!metrics) { return null; }

	return (
		<div className="metrics-row">
			{ showFollowerCount &&
				<MetricsSingle
					value={ metrics.followers }
					label={ __( 'Followers', 'disciplinary-homes' ) }
				/>
			}
			{ showDepositCount &&
				<MetricsSingle
					value={ metrics.deposits }
					label={ __( 'Deposits', 'disciplinary-homes' ) }
				/>
			}
			{ showDownloadCount &&
				<MetricsSingle
					value={ metrics.downloads }
					label={ __( 'Downloads', 'disciplinary-homes' ) }
				/>
			}
		</div>
	);
}
