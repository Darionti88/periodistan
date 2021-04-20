import React from 'react'
import Pagination from 'react-bootstrap/Pagination'

export default function Paginationizer(){
    return(
        <Pagination>
            <Pagination.Item>{1}</Pagination.Item>
            <Pagination.Item>{2}</Pagination.Item>
            <Pagination.Item>{3}</Pagination.Item>
            <Pagination.Item>{4}</Pagination.Item>
            <Pagination.Item>{5}</Pagination.Item>
    </Pagination>
    )
}