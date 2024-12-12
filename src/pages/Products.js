import React from 'react'
import { Link } from "react-router-dom";
import { useGetAllProductsQuery } from '../features/example/example'
import { useEndpointForNextMonthAnalysisQuery } from '../features/chartData/chartDataService'


function About() {

    const { data, isError, isLoading } = useGetAllProductsQuery()
    const { result, error, loading } = useEndpointForNextMonthAnalysisQuery()
    console.log(result)
    console.log(error)
    console.log(loading)

    if (isError) {
        return <h1>This is the erro</h1>
    }
    if (isLoading) {
        return <h1>This is the Loading...</h1>
    }
    return (
        <div>
            <Link to="/">Click to view our home page</Link>
            <ul>
                {data?.products?.map((product) => (
                    <li key={product.id}>
                        <Link to={`product/${product.id}`}>
                        {product.id}  {product.title} - ${product.price}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default About