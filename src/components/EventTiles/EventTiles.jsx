import React from 'react';
import { Row, Col } from 'reactstrap';
import './EventTiles.css';

import EventTile from '../EventTile/EventTile';

const EventTiles = ({className, customColSize, data}) => {
	console.log('events', data);
	return (
		<Row className={[className, 'EventTiles'].join(' ')}>
			{
				data.map((d, i) => {
					return (
						<Col key={i} sm={customColSize || 4}>
							<EventTile {...d} key={i} />
						</Col>
					);
				})
			}
		</Row>
	);
};

export default EventTiles;
