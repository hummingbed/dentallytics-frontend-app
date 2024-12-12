import React from 'react'
import { Link } from "react-router-dom";
import { useGetproductByIdQuery } from '../features/example/example'
import { useParams } from "react-router-dom";

function ProductDetail() {

    const { productId } = useParams();
    const { data, isError, isLoading } = useGetproductByIdQuery(productId)
    console.log(productId)
    console.log(data)

    if (isError) {
        return <h1>This is the erro</h1>
    }
    if (isLoading) {
        return <h1>This is the Loading...</h1>
    }
    return (
        <div>
            <Link to="/">Click to view our home page</Link>
           <h2>{data.title} - ${data.price}</h2>
        </div>
    )
}

export default ProductDetail;