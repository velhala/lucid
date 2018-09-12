import React from 'react';
import createClass from 'create-react-class';
import _ from 'lodash';
import { DataTable, SuccessIcon } from '../../../index';

export default createClass({
	getInitialState() {
		return {
			activeIndex: 1,
			currentlySortedField: 'id',
			currentlySortedFieldDirection: 'up',
			data: [
				{
					id: 1,
					first_name: 'Isaac',
					last_name: 'Newton',
					email: 'inewton@example.com',
					occupation: 'Physicist',
					salary: '$100.01',
					status: <SuccessIcon />,
				},
				{
					id: 2,
					first_name: 'Albert',
					last_name: 'Einstein',
					email: 'aeinstein@example.com',
					occupation: 'Physicist',
					salary: '$100.02',
					status: <SuccessIcon />,
				},
				{
					id: 3,
					first_name: 'Leonardo',
					last_name: 'da Vinci',
					email: 'ldvinci@example.com',
					occupation: 'Engineer',
					salary: '$100.03',
					status: <SuccessIcon />,
				},
				{
					id: 4,
					first_name: 'Aristotle',
					last_name: null,
					email: 'aristotle@example.com',
					occupation: 'Tutor',
					salary: '$100.04',
					status: <SuccessIcon />,
				},
				{
					id: 5,
					first_name: 'Galileo',
					email: 'ggalilei@example.com',
					occupation: 'Physicist',
					salary: '$100.05',
					status: <SuccessIcon />,
				},
				{
					id: 6,
					first_name: 'Charles',
					last_name: 'Darwin',
					email: 'cdarwin@example.com',
					occupation: 'Biologist',
					salary: '$100.06',
					status: <SuccessIcon />,
				},
				{
					id: 7,
					first_name: 'Alexander',
					last_name: 'Macedon',
					email: 'amacedon@example.com',
					occupation: 'Head of State',
					salary: '$100.07',
					status: <SuccessIcon />,
				},
				{
					id: 8,
					first_name: 'Plato',
					last_name: 'Plato',
					email: 'plato@example.com',
					occupation: 'Philosopher',
					salary: '$100.08',
					status: <SuccessIcon />,
				},
				{
					id: 9,
					first_name: 'Mahatma',
					last_name: 'Gandhi',
					email: 'mgandhi@example.com',
					occupation: 'Politician',
					salary: '$100.09',
					status: <SuccessIcon />,
				},
				{
					id: 10,
					first_name: 'William',
					last_name: 'Shakespeare',
					email: 'wshakespear@example.com',
					occupation: 'Playwright really long name',
					salary: '$100.10',
					status: <SuccessIcon />,
				},
				{
					id: 11,
					first_name: 'Hippocrat',
					last_name: '',
					email: 'hip@example.com',
					occupation: 'greatest philosopher',
					salary: '$12345567890123456789.01',
					status: <SuccessIcon />,
				},
				{
					id: 12,
					first_name: 'Confucius',
					last_name: '',
					email: 'confused@example.com',
					occupation: 'Physicist',
					salary: '$100.02',
					status: <SuccessIcon />,
				},
				{
					id: 13,
					first_name: 'Immanuel',
					last_name: 'Kant',
					email: 'ikant@example.com',
					occupation: 'German philosopher',
					salary: '$1000000.00',
					status: <SuccessIcon />,
				},
				{
					id: 14,
					first_name: 'Socrates',
					last_name: null,
					email: 'aristotle@example.com',
					occupation: 'Tutor',
					salary: '$100.04',
					status: <SuccessIcon />,
				},
				{
					id: 15,
					first_name: 'Vincent',
					last_name: 'Gough',
					email: 'vangugh@example.com',
					occupation: 'painter',
					salary: '$100.05',
					status: <SuccessIcon />,
				},
				{
					id: 16,
					first_name: 'Rembrandt',
					last_name: '',
					email: 'ams@example.com',
					occupation: 'painter',
					salary: '$100.06',
					status: <SuccessIcon />,
				},
				{
					id: 17,
					first_name: 'Micheal',
					last_name: 'Angelo',
					email: 'ma@example.com',
					occupation: 'painter',
					salary: '$100.07',
					status: <SuccessIcon />,
				},
				{
					id: 18,
					first_name: 'Leonardo',
					last_name: 'da vinci',
					email: 'leo@example.com',
					occupation: 'painter',
					salary: '$100.06',
					status: <SuccessIcon />,
				},
				{
					id: 19,
					first_name: 'Andy',
					last_name: 'warhol',
					email: 'aw@example.com',
					occupation: 'painter',
					salary: '$100.07',
					status: <SuccessIcon />,
				},
				{
					id: 20,
					first_name: '',
					last_name: '',
					email: '@example.com',
					occupation: 'Artist',
					salary: '$100.07',
					status: <SuccessIcon />,
				},
				{
					id: 21,
					first_name: 'Elvis',
					last_name: 'Presley',
					email: 'elvis@example.com',
					occupation: 'Artist',
					salary: '$100.06',
					status: <SuccessIcon />,
				},
				{
					id: 22,
					first_name: 'Michael',
					last_name: 'Jordan',
					email: 'aw@example.com',
					occupation: 'Player',
					salary: '$250000000.07',
					status: <SuccessIcon />,
				},
				{
					id: 23,
					first_name: 'Frida',
					last_name: 'Kahlo',
					email: 'frieda@example.com',
					occupation: 'painter',
					salary: '$100.06',
					status: <SuccessIcon />,
				},
				{
					id: 24,
					first_name: 'Adele',
					last_name: '',
					email: 'adele@example.com',
					occupation: 'artist',
					salary: '$100.07',
					status: <SuccessIcon />,
				},
				{
					id: 1,
					first_name: 'Isaac',
					last_name: 'Newton',
					email: 'inewton@example.com',
					occupation: 'Physicist',
					salary: '$100.01',
					status: <SuccessIcon />,
				},
				{
					id: 2,
					first_name: 'Albert',
					last_name: 'Einstein',
					email: 'aeinstein@example.com',
					occupation: 'Physicist',
					salary: '$100.02',
					status: <SuccessIcon />,
				},
				{
					id: 3,
					first_name: 'Leonardo',
					last_name: 'da Vinci',
					email: 'ldvinci@example.com',
					occupation: 'Engineer',
					salary: '$100.03',
					status: <SuccessIcon />,
				},
				{
					id: 4,
					first_name: 'Aristotle',
					last_name: null,
					email: 'aristotle@example.com',
					occupation: 'Tutor',
					salary: '$100.04',
					status: <SuccessIcon />,
				},
				{
					id: 5,
					first_name: 'Galileo',
					email: 'ggalilei@example.com',
					occupation: 'Physicist',
					salary: '$100.05',
					status: <SuccessIcon />,
				},
				{
					id: 6,
					first_name: 'Charles',
					last_name: 'Darwin',
					email: 'cdarwin@example.com',
					occupation: 'Biologist',
					salary: '$100.06',
					status: <SuccessIcon />,
				},
				{
					id: 7,
					first_name: 'Alexander',
					last_name: 'Macedon',
					email: 'amacedon@example.com',
					occupation: 'Head of State',
					salary: '$100.07',
					status: <SuccessIcon />,
				},
				{
					id: 8,
					first_name: 'Plato',
					last_name: 'Plato',
					email: 'plato@example.com',
					occupation: 'Philosopher',
					salary: '$100.08',
					status: <SuccessIcon />,
				},
				{
					id: 9,
					first_name: 'Mahatma',
					last_name: 'Gandhi',
					email: 'mgandhi@example.com',
					occupation: 'Politician',
					salary: '$100.09',
					status: <SuccessIcon />,
				},
				{
					id: 10,
					first_name: 'William',
					last_name: 'Shakespeare',
					email: 'wshakespear@example.com',
					occupation: 'Playwright really long name',
					salary: '$100.10',
					status: <SuccessIcon />,
				},
				{
					id: 11,
					first_name: 'Hippocrat',
					last_name: '',
					email: 'hip@example.com',
					occupation: 'greatest philosopher',
					salary: '$12345567890123456789.01',
					status: <SuccessIcon />,
				},
				{
					id: 12,
					first_name: 'Confucius',
					last_name: '',
					email: 'confused@example.com',
					occupation: 'Physicist',
					salary: '$100.02',
					status: <SuccessIcon />,
				},
				{
					id: 13,
					first_name: 'Immanuel',
					last_name: 'Kant',
					email: 'ikant@example.com',
					occupation: 'German philosopher',
					salary: '$1000000.00',
					status: <SuccessIcon />,
				},
				{
					id: 14,
					first_name: 'Socrates',
					last_name: null,
					email: 'aristotle@example.com',
					occupation: 'Tutor',
					salary: '$100.04',
					status: <SuccessIcon />,
				},
				{
					id: 15,
					first_name: 'Vincent',
					last_name: 'Gough',
					email: 'vangugh@example.com',
					occupation: 'painter',
					salary: '$100.05',
					status: <SuccessIcon />,
				},
				{
					id: 16,
					first_name: 'Rembrandt',
					last_name: '',
					email: 'ams@example.com',
					occupation: 'painter',
					salary: '$100.06',
					status: <SuccessIcon />,
				},
				{
					id: 17,
					first_name: 'Micheal',
					last_name: 'Angelo',
					email: 'ma@example.com',
					occupation: 'painter',
					salary: '$100.07',
					status: <SuccessIcon />,
				},
				{
					id: 18,
					first_name: 'Leonardo',
					last_name: 'da vinci',
					email: 'leo@example.com',
					occupation: 'painter',
					salary: '$100.06',
					status: <SuccessIcon />,
				},
				{
					id: 19,
					first_name: 'Andy',
					last_name: 'warhol',
					email: 'aw@example.com',
					occupation: 'painter',
					salary: '$100.07',
					status: <SuccessIcon />,
				},
				{
					id: 20,
					first_name: '',
					last_name: '',
					email: '@example.com',
					occupation: 'Artist',
					salary: '$100.07',
					status: <SuccessIcon />,
				},
				{
					id: 21,
					first_name: 'Elvis',
					last_name: 'Presley',
					email: 'elvis@example.com',
					occupation: 'Artist',
					salary: '$100.06',
					status: <SuccessIcon />,
				},
				{
					id: 22,
					first_name: 'Michael',
					last_name: 'Jordan',
					email: 'aw@example.com',
					occupation: 'Player',
					salary: '$250000000.07',
					status: <SuccessIcon />,
				},
				{
					id: 23,
					first_name: 'Frida',
					last_name: 'Kahlo',
					email: 'frieda@example.com',
					occupation: 'painter',
					salary: '$100.06',
					status: <SuccessIcon />,
				},
				{
					id: 24,
					first_name: 'Adele',
					last_name: '',
					email: 'adele@example.com',
					occupation: 'artist',
					salary: '$100.07',
					status: <SuccessIcon />,
				},
			],
		};
	},

	handleSelect(item, selectedIndex) {
		const { data } = this.state;

		this.setState({
			data: _.map(data, (row, rowIndex) => {
				if (rowIndex === selectedIndex) {
					return {
						...row,
						isSelected: !row.isSelected,
					};
				} else {
					return row;
				}
			}),
		});
	},

	handleSelectAll() {
		const { data } = this.state;

		const allSelected = _.every(data, 'isSelected');

		this.setState({
			data: _.map(data, row => {
				return {
					...row,
					isSelected: !allSelected,
				};
			}),
		});
	},

	handleRowClick(item, rowIndex) {
		this.setState({
			activeIndex: rowIndex,
		});
	},

	handleSort(field) {
		const {
			currentlySortedField,
			currentlySortedFieldDirection,
			data,
		} = this.state;

		const nextCurrentlySortedFieldDirection =
			currentlySortedField === field && currentlySortedFieldDirection === 'up'
				? 'down'
				: 'up';
		const nextData = _.sortBy(data, field);

		this.setState({
			currentlySortedField: field,
			currentlySortedFieldDirection: nextCurrentlySortedFieldDirection,
			data:
				nextCurrentlySortedFieldDirection === 'up'
					? nextData
					: _.reverse(nextData),
			activeIndex: null,
		});
	},

	render() {
		const {
			activeIndex,
			data,
			currentlySortedField,
			currentlySortedFieldDirection,
		} = this.state;

		return (
			<DataTable
				isFixedHeader
				data={_.map(
					data,
					(row, index) =>
						index === activeIndex ? { ...row, isActive: true } : row
				)}
				density="extended"
				isSelectable
				isActionable
				onRowClick={this.handleRowClick}
				onSelect={this.handleSelect}
				onSelectAll={this.handleSelectAll}
				onSort={this.handleSort}
			>
				<DataTable.Column
					field="id"
					width="5%"
					align="left"
					hasBorderLeft
					isSortable
					isSorted={currentlySortedField === 'id'}
					sortDirection={currentlySortedFieldDirection}
				>
					ID
				</DataTable.Column>

				<DataTable.Column
					field="first_name"
					width="10%"
					hasBorderLeft
					hasBorderRight
					isResizable
					isSortable
					isSorted={currentlySortedField === 'first_name'}
					sortDirection={currentlySortedFieldDirection}
				>
					First
				</DataTable.Column>

				<DataTable.Column
					field="last_name"
					align="left"
					width="10%"
					hasBorderRight
					isResizable
					isSortable
					isSorted={currentlySortedField === 'last_name'}
					sortDirection={currentlySortedFieldDirection}
				>
					Last
				</DataTable.Column>

				<DataTable.Column
					field="email"
					align="left"
					width="35%"
					isSortable
					isSorted={currentlySortedField === 'email'}
					sortDirection={currentlySortedFieldDirection}
				>
					E-Mail
				</DataTable.Column>

				<DataTable.Column
					field="occupation"
					align="left"
					width="20%"
					hasBorderLeft
					isSortable
					isSorted={currentlySortedField === 'occupation'}
					sortDirection={currentlySortedFieldDirection}
				>
					Occupation
				</DataTable.Column>

				<DataTable.Column
					field="salary"
					align="right"
					width="10%"
					hasBorderLeft
					isSortable
					isSorted={currentlySortedField === 'salary'}
					sortDirection={currentlySortedFieldDirection}
				>
					Salary
				</DataTable.Column>

				<DataTable.Column
					field="status"
					align="center"
					width="10%"
					hasBorderLeft
				>
					Status
				</DataTable.Column>
			</DataTable>
		);
	},
});
