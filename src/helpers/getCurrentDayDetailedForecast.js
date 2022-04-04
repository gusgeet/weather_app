const currentDayForecast = data => [
    {
        name: 'Predictability',
        value: data.predictability,
        unit: '%',
    },
    {
        name: 'Humidity',
        value: data.humidity,
        unit: '%',
    },
    {
        name: 'Wind speed',
        value: Math.round(data.wind_speed),
        unit: 'km/h',
    },
    {
        name: 'Air pressure',
        value: data.air_pressure,
        unit: 'mb',
    },
    {
        name: 'Max',
        value: Math.round(data.max_temp),
        unit: '°C',
    },
    {
        name: 'Min',
        value: Math.round(data.min_temp),
        unit: '°C',
    },
];

export default currentDayForecast;
