import React, { Component } from 'react';
import $clamp from 'clamp-js';
import './NewsTile.css';

import PhotoFill from '../PhotoFill/PhotoFill';
import DateTimeString from '../DateTimeString/DateTimeString';

class NewsTile extends Component {
	constructor(props) {
		super(props)
		this.newsNameRef = React.createRef();
	}

	componentDidMount() {
		const name = this.newsNameRef.current;
		$clamp(name, { clamp: 3 });
	}

	render() {
		const { name, created, photo, author, link } = this.props;
		const authorByline = author ? ` by ${author}` : null;
		return (
			<div className="NewsTile">
				<PhotoFill src={photo} height="202px" />
				<div className="content">
					<h4 ref={this.newsNameRef}>{name}</h4>
					<div>
						<DateTimeString dateTime={created} format="long-date" />
						{authorByline}
					</div>
					<div className="read-more">
						<a href={link}>Read More →</a>
					</div>
				</div>
			</div>
		);
	}
};

export default NewsTile;