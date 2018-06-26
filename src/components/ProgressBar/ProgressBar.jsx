import _ from 'lodash';
import React from 'react';
import PropTypes from 'react-peek/prop-types';
import { lucidClassNames } from '../../util/style-helpers.js';
import { createClass } from '../../util/component-types.js';

const cx = lucidClassNames.bind('&-ProgressBar');

const { number, string, oneOf, any, bool } = PropTypes;

const ProgressBar = createClass({
	displayName: 'Progress Bar',

	statics: {
		peek: {
			description: `
				A Progress Bar component is used to indicate progress in a procedure 
				consisting of numerous discrete steps or continuous operation.
			`,

			categories: ['communication'],
		},
	},

	propTypes: {
		className: string`
			Appended to the component-specific class names set on the root element.
		`,

		kind: oneOf(['default', 'success', 'danger', 'info', 'warning'])`
			Applies a color style for the kind of ProgressBar.
		`,

		percentComplete: number`
			Percentage ProgressBar is complete.
		`,

		children: any,

		hasTitle: bool`
			Whether or not a title is displayed above the ProgressBar.
		`,

		title: string`
			The title text that is displayed above ProgressBar.
		`,
	},

	getDefaultProps() {
		return {
			kind: 'default',
			percentComplete: 0,
			title: '',
		};
	},

	render() {
		const { kind, percentComplete, children, title } = this.props;

		return (
			<div className={cx('&')}>
				<div className={cx('&-title')}>{title}</div>
				<div className={cx('&-bar')}>
					<div
						className={cx(`&-bar-${kind}`, `&-bar-progress`, {
							[`&-bar-${kind}-is-pulsed`]: percentComplete < 100,
						})}
						style={{ width: `${percentComplete}%` }}
					>
						{children}
					</div>
				</div>
			</div>
		);
	},
});

export default ProgressBar;