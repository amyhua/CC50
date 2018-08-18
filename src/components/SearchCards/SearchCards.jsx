import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import PropTypes from 'prop-types';
import SearchCard from '../SearchCard/SearchCard';
import { getShortIdentifierFromRefName } from '../../utils/parse-data';
import './SearchCards.css';

class SearchCards extends Component {
	render() {
		const { itemType, mediaIsByCsid, data, customColWidth, viewMode,
			onFilmmakerPage, isItemPageFilmCard } = this.props;
		let customColSize = this.props.customColSize;
		// SPEC: list view is ALWAYS 12-cols wide, no matter what
		if (viewMode === 'list') customColSize = 12;
		if (customColSize && customColWidth) {
			return data && data.length ?
			<Row className="SearchCards">
				{
					data.map((d, i) =>
						<div key={i} className={'col-'+
						(customColWidth === 'xs' ? '' : customColWidth + '-') +
						customColSize}>
							<SearchCard
								mediaIsByCsid={mediaIsByCsid}
								key={i}
								itemType={itemType || d.itemType}
								onFilmmakerPage={onFilmmakerPage}
								isItemPageFilmCard={isItemPageFilmCard}
								viewMode={viewMode}
								data={d}
								{...d} />
						</div>
					)
				}
			</Row>
			: null;
		}

		if (customColSize) {
			return data && data.length ?
			<Row className="SearchCards">
				{
					data.map((d, i) =>
						<Col key={i} xl={customColSize}>
							<SearchCard
								key={i}
								itemType={itemType}
								onFilmmakerPage={onFilmmakerPage}
								isItemPageFilmCard={isItemPageFilmCard}
								viewMode={viewMode}
								data={d}
								{...d} />
						</Col>
					)
				}
			</Row>
			: null;
		}
		return data && data.length ?
			<div className="SearchCards">
			{
				data.map((d, i) =>
					<SearchCard
						mediaIsByCsid={mediaIsByCsid}
						key={i}
						itemType={itemType}
						onFilmmakerPage={onFilmmakerPage}
						isItemPageFilmCard={isItemPageFilmCard}
						viewMode={viewMode}
						data={d}
						{...d} />
				)
			}
			</div>
			: null;
	}
}

SearchCards.propTypes = {
	data: PropTypes.array.isRequired
}

export default SearchCards;