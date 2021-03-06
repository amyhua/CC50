import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  withRouter
} from 'react-router-dom';
import './SearchCard.css';

import { itemTypeToCollectionSearchVal } from '../../collection-context';
import FilmmakerContent from './FilmmakerContent';
import FilmContent from './FilmContent';
import EphemeraContent from './EphemeraContent';
import ProgramContent from './ProgramContent';
import CoverCarousel, { MAX_CAROUSEL_IMAGES } from '../Carousel/CoverCarousel';
import { CSpaceCanvasSize } from '../CSpacePhoto/CSpacePhoto';
import { getItemsMedia } from '../../actions/items-media-actions';
import {
	blobCsidToSrc,
	getShortIdentifierFromRefName,
	getDisplayNameFromRefName,
	fullSizedCarouselCaption,
	fullSizedCarouselCaptionLink
} from '../../utils/parse-data';

const getPhotoSrcs = mediaObjs =>
	(mediaObjs || []).map(m => blobCsidToSrc(m.blobCsid, '360x270'));

const mappedMediaShortIdentifier = (props) =>
	getShortIdentifierFromRefName(props.data.refName, null, props.data.refName);

const mapStateToProps = (state, ownProps) => ({
	// note: exhibitions do not have short identifiers; only refNames
	// enable an option on SearchCard to fetch its media keyed by RefName
	media: state.itemsMedia.dataByShortIdentifier &&
		state.itemsMedia.dataByShortIdentifier.get(
			mappedMediaShortIdentifier(ownProps)
		)
});

const mapDispatchToProps = (dispatch, ownProps) => ({
	getItemsMedia: 	(...args) => dispatch(getItemsMedia(...args))
});

class SearchCard extends Component {
	componentDidMount() {
		// get media for this card
		const { data, csid, itemType, mediaIsByCsid } = this.props;
		if (!itemType) throw new Error('Requires itemType');
		this.props.getItemsMedia({
			item: data,
			itemType: itemType,
			mappedShortIdentifier: mappedMediaShortIdentifier(this.props)
		});
	}
	render() {
		const {
			data,
			csid,
			media,
			shortIdentifier,
			itemType, // film, program, ephemera, or filmmaker
			photos,
			hideTags,
			viewMode,
			onFilmmakerPage, // TODO fix use of isItemPageFilmCard || onFilmmakerPage
			isItemPageFilmCard,
			showFilmFilmmaker,
			history
		} = this.props;
		// Note: certain design rules exist for cards on filmmaker pages.
		// See Cards design spec.
		const itemTypeClassName = itemType.toLowerCase().replace(' ', '-');
		const listView = viewMode === 'list';
		return (
			<div
				className={[
					'SearchCard',
					'shadow-on-hover',
					itemTypeClassName,
					onFilmmakerPage ||  isItemPageFilmCard ? 'is-item-page-film-card': null,
					viewMode,
					].join(' ')}
				onClick={(e) => {
					e.stopPropagation();
					const path = `/collection/${itemTypeToCollectionSearchVal(itemType)}/${shortIdentifier}`;
					history.push(path);
				}}>
				<div className={listView ?
						(onFilmmakerPage || isItemPageFilmCard) ? 'no-gutters single-line' : 'd-flex'
						: 'no-gutters'}>
				<div className={listView && (onFilmmakerPage || isItemPageFilmCard) ?
						'filmmaker-film-still' :  ''}>
					<div className="media">
						<CoverCarousel
							fromCSpace={true}
							captions={itemType !== 'filmmaker' ?
								null :
								(media || []).map(m => fullSizedCarouselCaption(m))
							}
							captionLinks={itemType !== 'filmmaker' ?
								null :
								(media || []).map(m => fullSizedCarouselCaptionLink(m))
							}
							blobCsids={(media || []).map(m => m.blobCsid).slice(0, MAX_CAROUSEL_IMAGES)}
							canvasSize={
								listView ?
									(isItemPageFilmCard || onFilmmakerPage) ?
										CSpaceCanvasSize.large
									: CSpaceCanvasSize.list
								: CSpaceCanvasSize.grid
							}
							id={csid}
							title={data.termDisplayName}
							itemType={itemType} />
					</div>
				</div>
				<div className={listView && (onFilmmakerPage || isItemPageFilmCard) ? 'filmmaker-content' : 'container-fluid'}>
					<div className="content">
						{
							itemType === 'filmmaker' ?
							<FilmmakerContent
								onFilmmakerPage={onFilmmakerPage || isItemPageFilmCard}
								viewMode={viewMode}
								item={data}
							/> : null
						}
						{
							itemType === 'film' ?
							<FilmContent
								isItemPageFilmCard={isItemPageFilmCard || onFilmmakerPage}
								viewMode={viewMode}
								item={data}
								showFilmFilmmaker={showFilmFilmmaker}
								hideTags={hideTags}
							/> : null
						}
						{
							itemType === 'ephemera' ?
							<EphemeraContent
								viewMode={viewMode}
								{...data}
							/> : null
						}
						{
							itemType === 'program' ?
							<ProgramContent
								viewMode={viewMode}
								{...data}
							/> : null
						}
					</div>
					</div>
				</div>
			</div>
		);
	}
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SearchCard));
