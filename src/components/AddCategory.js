import React, { useState } from 'react'; 
import PropTypes from 'prop-types';

export const AddCategory = ({ setCategories }) => {

    const [inputValue, setinputValue] = useState('');

    const handleInputValue = (e) => {
        setinputValue(e.target.value);
    }

    const handleSubnit = (e) => {
        e.preventDefault();
        if(inputValue.trim().length > 2){
            setCategories( cats => [ inputValue, ...cats]);
            setinputValue('');
        }
    }

    return (
        <form onSubmit={ handleSubnit }>
            <input 
                type="text"
                value={ inputValue }
                onChange={ handleInputValue }
            />
        </form>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}