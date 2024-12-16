import React from 'react';
import DdsRevenueAnalysis from '../../components/mcaAnalysisDashboardComponents/DdsRevenueAnalysis'
import HygRevenueAnalysis from '../../components/mcaAnalysisDashboardComponents/HygRevenueAnalysis'
import HygVisitAnalysis from '../../components/mcaAnalysisDashboardComponents/HygVisitAnalysis'
import NextMonthAnalysis from '../../components/mcaAnalysisDashboardComponents/NextMonthAnalysis'

const McaAnalysisDashboard = () => {
    return (
        <div>
            <DdsRevenueAnalysis />
            <HygRevenueAnalysis />
            <HygVisitAnalysis />
            <NextMonthAnalysis />
        </div>
    );
};

export default McaAnalysisDashboard;