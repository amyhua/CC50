import React from 'react';
import { Row, Col } from 'reactstrap';
import './EventTiles.css';

import EventTile from '../EventTile/EventTile';

const EventTiles = ({className, data}) => {
	return (
		<Row className={[className, 'EventTiles'].join(' ')}>
			{
				data.map((d, i) => {
					return (
						<Col sm="4">
							<EventTile {...d} key={i} />
						</Col>
					);
				})
			}
		</Row>
	);
};

export default EventTiles;
