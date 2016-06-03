import React from 'react';
import Icon from '../Icon';
import { lucidClassNames } from '../../../util/style-helpers';

const cx = lucidClassNames.bind('&-TableGearIcon');

/**
 *
 * {"categories": ["visual design", "icons"], "extend": "Icon", "madeFrom": ["Icon"]}
 *
 * A table configuration Icon.
 */

const TableGearIcon = React.createClass({
	displayName: 'TableGearIcon',
	propTypes: {
		...Icon.propTypes,
	},

	render() {
		const {
			className,
			...passThroughs,
		} = this.props;

		return (
			<Icon
				{...passThroughs}
				className={cx('&', className)}
			>
				<rect className={cx('&-background')} x='1' y='4' width='13' height='8'/>
				<g opacity='0.25'>
					<rect x='3' y='4' width='1' height='8'/>
					<rect x='6' y='4' width='1' height='8'/>
					<rect x='9' y='4' width='1' height='5.5'/>
					<rect x='12' y='4' width='1' height='3.847'/>
				</g>
				<path d='M15.79,9.298l-1.191-0.219c-0.114-0.022-0.155-0.117-0.089-0.215l0.683-1.013 c0.065-0.098,0.052-0.246-0.031-0.329l-0.656-0.654c-0.083-0.085-0.23-0.099-0.329-0.031L13.164,7.52 c-0.097,0.065-0.193,0.025-0.216-0.091l-0.219-1.191c-0.021-0.114-0.137-0.21-0.252-0.21H11.55c-0.117,0-0.231,0.096-0.252,0.21 l-0.219,1.191c-0.022,0.116-0.119,0.156-0.216,0.091L9.852,6.837C9.753,6.77,9.605,6.783,9.522,6.868L8.866,7.522 C8.783,7.605,8.771,7.754,8.835,7.852l0.683,1.013c0.066,0.098,0.027,0.192-0.089,0.215L8.237,9.298 C8.121,9.32,8.027,9.435,8.027,9.55v0.929c0,0.116,0.094,0.23,0.21,0.251l1.191,0.221c0.116,0.021,0.156,0.117,0.089,0.214 l-0.683,1.014c-0.063,0.099-0.052,0.244,0.031,0.327l0.656,0.656c0.083,0.083,0.23,0.097,0.329,0.031l1.012-0.683 c0.097-0.066,0.193-0.027,0.216,0.091l0.219,1.189C11.318,13.906,11.433,14,11.55,14h0.928c0.115,0,0.231-0.094,0.252-0.21 l0.219-1.189c0.022-0.118,0.119-0.157,0.216-0.091l1.012,0.683c0.099,0.065,0.246,0.052,0.329-0.031l0.656-0.655 c0.083-0.084,0.097-0.229,0.031-0.328l-0.683-1.014c-0.066-0.097-0.027-0.193,0.089-0.214l1.191-0.221 c0.116-0.021,0.21-0.135,0.21-0.251V9.55C16,9.435,15.906,9.32,15.79,9.298z M12.014,11.814c-0.992,0-1.799-0.804-1.799-1.798 c0-0.992,0.807-1.797,1.799-1.797s1.798,0.805,1.798,1.797C13.812,11.011,13.006,11.814,12.014,11.814z'/>
				<path d='M8,12H1.25C1.112,12,1,11.888,1,11.75v-7.5C1,4.112,1.112,4,1.25,4h12.5C13.888,4,14,4.112,14,4.25V6h1V3.25 C15,2.56,14.44,2,13.75,2H1.25C0.56,2,0,2.56,0,3.25v8.5C0,12.44,0.56,13,1.25,13H8V12z'/>
			</Icon>
		);
	},
});

export default TableGearIcon;
