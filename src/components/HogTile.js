import React from 'react';
// import hogs from '../porkers_data'

class HogTile extends React.Component {
    constructor() {
        super();
        this.state = {
               showDetails: false
        }
    }

    toggleDetails = () => {
        this.setState(state => ({showDetails: !state.showDetails}));
    }
    getImage = hogName => {
        let formattedName = hogName
            .split(" ")
            .join("_")
            .toLowerCase();
        let pigPics = require(`../hog-imgs/${formattedName}.jpg`);
        return pigPics;
    };

    render() {

        return <div onClick={this.toggleDetails}>
            <h2>{this.props.hog.name}</h2>
            <img src={this.getImage(this.props.hog.name)} alt="hogPic" />
            <div style={{display: this.state.showDetails ? 'block' : 'none' }}>
                <h3>Specialty: {this.props.hog.specialty}</h3>
                <h3>Greased: {this.props.hog.greased.toString()}</h3>
                <h3>Weight: {this.props.hog['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']}</h3>
                <h3>Highest Medal: {this.props.hog['highest medal achieved']}</h3>
            </div> 
          </div>;
            }  
        }
        
export default HogTile;