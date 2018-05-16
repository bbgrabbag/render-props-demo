import React from 'react';
import uuid from "uuid";

function DataList(props) {
    const { data, className } = props;
    return (
        <div className={className}>
            {data.map((item, index) => props.render({ index, key: uuid(), ...item }))}
        </div>
    )
}

export default DataList;