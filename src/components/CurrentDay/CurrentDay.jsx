import React from 'react';

import locationIcon from './assets/location-pin.png';
import styles from './CurrentDay.module.css';

import PropTypes from 'prop-types';

const CurrentDay = ({weekday, date, location, temperature, weatherIcon, weatherDescription}) => (
    <div className="d-flex">
        <div className={
            weatherDescription.includes('Clear') ? styles.img : weatherDescription.includes('Cloud') ? styles.img2 : styles.img3
            
        }></div>
        <div className={styles.gradient}></div>
        <div className={`${styles.cardInner} d-flex flex-column justify-content-between pt-3 pb-2 pl-2`}>
            <div>
                <h2 className='font-weight-bold mb-1'>{weekday}</h2>
                <p className='mb-0'>{date}</p>
                <p className='d-flex align-items-baseline font-weight-lighter mb-1'>
                    <img width="10" heigth="15" src={locationIcon} className='mr-1' alt="location pin icon" />
                    <span>{location}</span>
                </p>

            </div>
            <div>
                <img width="45" src={weatherIcon} alt="" />
                <h2 className="font-weight-bold mb-1">
                    <span>{temperature}°C</span>
                </h2>
                <h5 className="font-weight-lighter">{weatherDescription}</h5>

            </div>
        </div>
    </div>
);

CurrentDay.propTypes = {
    weekday: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    weatherIcon: PropTypes.string.isRequired,
    temperature: PropTypes.number.isRequired,
    weatherDescription: PropTypes.string.isRequired,
}

export default CurrentDay;
