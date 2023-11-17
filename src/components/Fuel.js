import React from 'react';


class Fuel extends React.Component{
    render() {
        return(
            <p>{this.props.idx} : {this.props.kname}</p>
        );
    }
}

export default Fuel;