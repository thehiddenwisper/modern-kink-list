import React, { Component } from 'react';
import './KinkListEdit.scss';

import kinklistJson from "../kinklist.json"

export default class KinkListEdit extends Component {

	constructor(props) {
		super(props);

		this.state = {
			name: "Test Name",
			focus: "overview",
			selectedCategory: null,
			selectedOptions: {}
		}
		this.renderOverview = this.renderOverview.bind(this);
		this.renderCategory = this.renderCategory.bind(this);
		// this.renderCategory = this.renderCategory.bind(this);
	}

	renderOverview() {
		return (
			<div id="overview">
				<div id="floating-nav">
					<div><button onClick={this.returnToOverviewNoSave.bind(this)}>Delete</button></div>
					<div><button onClick={this.returnToOverviewSave.bind(this)}>Save</button></div>
					<div><button onClick={this.returnToOverviewSave.bind(this)}>Save</button></div>
					
					
					
				</div>
				{kinklistJson.categories.map((item, index) => {
					return <div className="category-div" key={item.name} onClick={this.selectCategory.bind(this, index)}>
						<div className="title">{item.name}</div>
						{item.description != null && item.description.length > 0 ? <div className="description">{item.description}</div> : ""}
						{/* <button className="button" href={"/kinklist/" + this.props.id + "/" + item.url}>Go</button> */}
					</div>;
				})
				}
			</div>
		);
	}
	renderCategory() {
		return (
			<div id="categories">
				<div id="floating-nav">
					<div><button onClick={this.returnToOverviewNoSave.bind(this)}>Back</button></div>
					<div><button onClick={this.returnToOverviewSave.bind(this)}>Save</button></div>
				</div>
				<div id="kink-list">
					{this.state.selectedCategory.kinks.map((kink) => {
						return <div className="kink" key={this.state.selectedCategory.name + kink.name}>
							<div className="kink-name">{kink.name}</div>
							<div className="kink-description">{kink.description}</div>
							<div className="kink-options">
								{kinklistJson.options.map((option, index) => {
									let shouldHighlight = this.state.selectedOptions[this.state.selectedCategory.name] != null && this.state.selectedOptions[this.state.selectedCategory.name][kink.name] === index;
									return <div className={"kink-option" + (shouldHighlight ? " highlight" : "")} style={{ backgroundColor: option.color }} key={option.name} onClick={this.onOptionClick.bind(this, this.state.selectedCategory.name, kink.name, index)}>{option.name}</div>
								})}
							</div>
						</div>;
					})
					}
				</div>

				{/* Selected Category {this.state.selectedCategory} */}
			</div>
		);
	}

	selectCategory(index) {
		this.setState({ focus: "category", selectedCategory: kinklistJson.categories[index] })
	}

	returnToOverviewNoSave() {
		this.setState({ focus: "overview", selectedCategory: null })
	}

	returnToOverviewSave() {
		console.log("Yay You Saved")
	}

	onOptionClick(categoryName, kinkName, optionIndex) {

		let output = this.state.selectedOptions;
		if (output[categoryName] == null) {
			output[categoryName] = {}
		}
		output[categoryName][kinkName] = optionIndex;
		this.setState({ selectedOptions: output })
	}
	render() {
		// console.log(kinklistJson);

		return (<React.Fragment>
			<div id="kinklistview">
				{
					this.state.focus === "overview" ? this.renderOverview() : (this.state.focus === "category" ? this.renderCategory() : <div>Error no mapping found for state {this.state.focus}</div>)
				}
			</div>
		</React.Fragment>);

	}
}
