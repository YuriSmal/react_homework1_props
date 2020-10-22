import React from 'react';

function Title(props) {
    return (
        <h3>{props.name}</h3>
    )
}

Title.defaultProps = {
    name: "Nothing is typed yet..."
}

export default Title;