import React from 'react';

class List extends React.Component {

    componentDidMount() {
        this.props.getNotes();
    }

    render() {
        return(
            <div className="list-container">

            </div>
        )
    }
}

export default List;