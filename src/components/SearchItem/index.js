import React from 'react';
import {Input} from "antd";

const SearchItem = ({onSearch}) => {

    function handleOnChange(e) {
        onSearch(e.target.value);
    }

    return (
        <div>
            <Input onChange={handleOnChange} autoFocus={true} placeholder={"Search Characters or Comics"} />
        </div>
    );
};

export default SearchItem;