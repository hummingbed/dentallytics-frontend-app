import React from "react";
import StackedBarChart from '../apexChart/stackedBarChart/StackedBarChart'

const DdsRevenueAnalysis = () => {

    const data = [
        {
            name: 'Budget ($59,323.42)',
            data: [10000],
        },
        {
            name: 'MTD DDS Revenue ($59,323.42)',
            data: [40000],
        },
        {
            name: 'Booked Revenue ($59,323.42)',
            data: [0],
        }
    ];

    const categories = ['Single Bar'];
    const colors = ['#FF4560', '#206b0a', '#008FFB'];
    return (
        <div>
            <div className="container-fluid position-relative border rounded">
                <p className='fw-bold'>Revenue Data Analysis</p>
                <div className="row text-center px-5">
                    <div className="col">
                        <span className='fw-bold fs-4'>$59,323.42</span> <br />
                        <small className='fw-lighter text-uppercase fw-bold'>MTD DDS Revenue Actual</small>
                    </div>
                    <div className="col">
                        <span className='fw-bold fs-4'>$59,323.42</span> <br />
                        <small className='fw-lighter text-uppercase fw-bold'>MTD DDS Revenue Actual</small>
                    </div>
                    <div className="col">
                        <span className='fw-bold fs-4'>$59,323.42</span> <br />
                        <small className='fw-lighter text-uppercase fw-bold'>MTD DDS Revenue Actual</small>
                    </div>
                    <div className="col">
                        <span className='fw-bold fs-4'>$59,323.42</span> <br />
                        <small className='fw-lighter text-uppercase fw-bold'>MTD DDS Revenue Actual</small>
                    </div>
                    <div className="col">
                        <span className='fw-bold fs-4'>$59,323.42</span> <br />
                        <small className='fw-lighter text-uppercase fw-bold'>MTD DDS Revenue Actual</small>
                    </div>
                </div>
                <p className='text-center fw-bold'>DDS Revenue Analysis (Deemeber 2024)</p>
                <StackedBarChart data={data} categories={categories} colors={colors} chartShape={false} height={200} width={50} />
            </div>
        </div>
    );
};

export default DdsRevenueAnalysis;
