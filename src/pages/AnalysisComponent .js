import React from 'react';
import { Link } from "react-router-dom";
import { useEndpointForNextMonthAnalysisQuery } from '../features/chartData/chartDataService'


const AnalysisComponent = () => {
    const { data, error, isLoading } = useEndpointForNextMonthAnalysisQuery({
        apiToken: 'HDuNDsxFxxogP3GTxFFeLqALTiLbsQbQBqFdUAru',
        corpId: 9999,
        clinicId: 24,
        startDate: '2024-04-01',
        endDate: '2024-04-30',
    });

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

    return (
        <div>
            <Link to="/">Click to view our home page</Link>
            <h1>Next Month Analysis</h1>
            <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
    );
};

export default AnalysisComponent;
