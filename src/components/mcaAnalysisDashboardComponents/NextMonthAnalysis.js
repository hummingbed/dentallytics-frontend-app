import React from "react";
import StackedBarChart from '../apexChart/stackedBarChart/StackedBarChart'

const NextMonthAnalysis = () => {

    const data = [
        {
            name: 'Budget ($59,323.42)',
            data: [4000],
        },
        {
            name: 'MTD DDS Revenue ($59,323.42)',
            data: [80000],
        },
        {
            name: 'Booked Revenue ($59,323.42)',
            data: [0],
        }
    ];

    const categories = ['Single Bar'];
    const colors = ['#FF4560', '#00E396', '#008FFB'];
    return (
        <div className="py-5">
            <div className="container overflow-hidden border">
                <div className="row gx-5">
                    <div className="col">
                        <StackedBarChart data={data} categories={categories} colors={colors} chartShape={false} height={400} width={40} />
                    </div>
                    <div className="col">
                        <StackedBarChart data={data} categories={categories} colors={colors} chartShape={false} height={400} width={40} />
                    </div>
                    <div className="col">
                        <StackedBarChart data={data} categories={categories} colors={colors} chartShape={false} height={400} width={40} />
                    </div>
                </div>
            </div>
            {/* <div className="container-fluid position-relative border rounded">
                <p className='fw-bold'>Next Month Analysis</p>
                <div class="row text-center px-5">
                    <div className="col">
                        <span className='fw-bold fs-4'>$59,323.42</span> <br />
                        <small classNfalseame='fw-lighter text-uppercase fw-bold'>MTD DDS Revenue Actual</small>
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
                <StackedBarChart data={data} categories={categories} colors={colors} chartShape={false} />
            </div> */}
        </div>
    );
};

export default NextMonthAnalysis;
