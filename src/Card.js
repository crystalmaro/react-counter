import React, { Component } from 'react';

export default class Card extends Component {
	state = {
		count: 0,
		isDisabled: false,
	};

	handleClick = () => {
		this.setState(
			{
				isDisabled: true,
				count: 0,
			}
			// this.increment
		);
		this.increment();
		setTimeout(this.handleButton, 5000);
	};

	increment = () => {
		setInterval(() => {
			this.setState((prevState) => {
				return {
					count: prevState.count + 1,
				};
			});
			// this.setState({ count: this.state.count + 1 });
		}, 1000);
	};

	handleButton = () => {
		this.setState({
			isDisabled: false,
		});
	};

	componentWillUnmount() {
		clearInterval(this.increment);
	}

	render() {
		return (
			<div className="Card">
				<div className="Card__title">測試</div>
				<div className="Card__count">{this.state.count}</div>
				<button disabled={this.state.isDisabled} className="Card__button" onClick={this.handleClick}>
					START
				</button>
			</div>
		);
	}
}
