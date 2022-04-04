import React from 'react';
import PropTypes from 'prop-types';

import styles from './Form.module.css';
import { useState } from 'react';

const Form = ({submitSearch}) => {
    const [location, setLocation] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();
        if (!location || location === '') return;
        
        submitSearch(location);


    }

    return (
        <form onSubmit={onSubmit}>
            <input
                aria-label="location"
                type="text"
                className={`${styles.input} form-control`}
                placeholder="Type a location"
                required
                value={location}
                onChange={e =>setLocation(e.target.value)}
            />

            <button type="submit" className={styles.button} onClick={onSubmit}>
                SEARCH
            </button>
        </form>
    );
};

Form.propTypes = {
    submitSearch: PropTypes.func.isRequired,
}

export default Form;
