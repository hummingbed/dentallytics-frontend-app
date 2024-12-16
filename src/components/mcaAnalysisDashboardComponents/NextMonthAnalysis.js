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
        <div className="my-5 border rounded">
            <p className='fw-bold p-3'>Next Month Analysis</p>
            <div className="container overflow-hidden">
                <div className="row gx-5">
                    <div className="col">
                        <div className="row text-center px-5">
                            <span className='fs-4'>$59,323.42</span> <br />
                            <small className='fw-lighter text-uppercase'>MTD DDS Revenue Actual</small>
                            <span className='fs-4'>$59,323.42</span> <br />
                            <small className='fw-bold text-uppercase'>MTD DDS Revenue Actual</small>
                        </div>
                        <StackedBarChart data={data} categories={categories} colors={colors} chartShape={false} height={400} width={40} colorsPosition={'bottom'} colorAllignment={'center'} />
                    </div>
                    <div className="col">
                        <div className="row text-center px-5">
                            <span className='fs-4'>$59,323.42</span> <br />
                            <small className='fw-lighter text-uppercase'>MTD DDS Revenue Actual</small>
                            <span className='fs-4'>$59,323.42</span> <br />
                            <small className='fw-bold text-uppercase'>MTD DDS Revenue Actual</small>
                        </div>
                        <StackedBarChart data={data} categories={categories} colors={colors} chartShape={false} height={400} width={40} colorsPosition={'bottom'} colorAllignment={'center'} />
                    </div>
                    <div className="col">
                        <div className="row text-center px-5">
                            <span className='fs-4'>$59,323.42</span> <br />
                            <small className='fw-lighter text-uppercase'>MTD DDS Revenue Actual</small>
                            <span className='fs-4'>$59,323.42</span> <br />
                            <small className='fw-bold text-uppercase'>MTD DDS Revenue Actual</small>
                        </div>
                        <StackedBarChart data={data} categories={categories} colors={colors} chartShape={false} height={400} width={40} colorsPosition={'bottom'} colorAllignment={'center'} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NextMonthAnalysis;
