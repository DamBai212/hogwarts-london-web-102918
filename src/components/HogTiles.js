import React from 'react';
import HogTile from './HogTile'

class HogTiles extends React.Component {
    constructor(props) {
        super()
        this.state = {
            hogs: props.hogs
        }
    }
    sortfunction = (e) => {
    let sortKey = e.target.value
    let sortedHogs = [...this.state.hogs];

    if (sortKey === "greased") {
        sortedHogs = sortedHogs.filter(hog => hog.greased === true)
    } else {
       sortedHogs.sort((a, b) =>{
          if (a[sortKey] > b[sortKey]) return 1;
          if (a[sortKey] < b[sortKey]) return -1;
          return 0;
      })
    }
      this.setState({
          hogs: sortedHogs
      })
    }

    render() {
       return <div>
           <button value="name" onClick={this.sortfunction}>
             Sort by Name
           </button>
           <button value="weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water" onClick={this.sortfunction}>
             Sort by Weight
           </button>
           <button value="greased" onClick={this.sortfunction}>
             Hide Greased Hogs
           </button>
           {this.state.hogs.map(hog => <HogTile hog={hog} />)}
         </div>;
    }
}

export default HogTiles;