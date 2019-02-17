import React, { Component } from 'react';
import './PaginationBar.css';

const RESULTS_PER_PAGE = 39;

const PaginationButton = ({ active, children, isDisabled, onClick }) => (
	<div
		className={[
			isDisabled ? 'PaginationButton disabled' : 'PaginationButton',
			active ? 'active' : null,
		].join(' ')}
		onClick={isDisabled ? null : onClick}
	>
		{children}
	</div>
);

const PageNum = ({ active, num }) => (
	<div className={['PageNum', active ? 'active' : null ].join(' ')} key={num}>{num}</div>
);

class PaginationBar extends Component {
	render() {
		console.log('render PaginationBar');
		const { totalCount, activePage, paginate } = this.props;
		const numPages = Math.ceil(totalCount / RESULTS_PER_PAGE);
		const pageNums = [];
		const lastPageNum = numPages - 1;
		for (let i = 1; i <= numPages; i++) {
			pageNums.push(i);
		}
		if (pageNums <= 1) {
			return null;
		}
		return (
			<div className="PaginationBar">
				<div className="btn-group">
					<PaginationButton
						active={activePage === 0}
						onClick={() => paginate(0)}>
						First
					</PaginationButton>
					<PaginationButton isDisabled={activePage <= 0}
						onClick={() => paginate(activePage - 1)}>
						Prev
					</PaginationButton>
				</div>
				<div className="page-nums">
					{
						pageNums.map(num =>
							<PageNum key={num} active={num - 1 === activePage}>{num}</PageNum>
						)
					}
				</div>
				<div className="btn-group">
					<PaginationButton isDisabled={activePage >= totalCount}
						onClick={() => paginate(activePage + 1)}>
						Next
					</PaginationButton>
					<PaginationButton
						active={activePage === lastPageNum}
						onClick={() => paginate(lastPageNum)}>
						Last
					</PaginationButton>
				</div>
			</div>
		);
	}
}

export default PaginationBar;