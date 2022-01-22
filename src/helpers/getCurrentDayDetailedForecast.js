const currentDayForecast = data => [
    {
        name: 'probabilidad',
        value: data.predictability,
        unit: '%',
    },
    {
        name: 'humedad',
        value: data.humidity,
        unit: '%',
    },
    {
        name: 'viento',
        value: Math.round(data.wind_speed),
        unit: 'km/h',
    },
    {
        name: 'presion atmosferica',
        value: data.air_pressure,
        unit: 'mb',
    },
    {
        name: 'maxima',
        value: Math.round(data.max_temp),
        unit: '°C',
    },
    {
        name: 'minima',
        value: Math.round(data.min_temp),
        unit: '°C',
    },
];

export default currentDayForecast;
