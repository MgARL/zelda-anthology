import React,{useState} from 'react'
import Pagination from 'react-bootstrap/Pagination'

function PaginationNums({ itemsPerPage, totalItems, paginate }) {
    const [active, setActive] = useState(1);
    let pageNumbers = [];
    for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
        pageNumbers.push(
            <Pagination.Item key={i} active={i === active} onClick={() => {
                paginate(i)
                setActive(i)
            }}>
                {i}
            </Pagination.Item>,
        );
    }
    return (
        <Pagination className='mt-3'>
            {pageNumbers ? pageNumbers : null}
        </Pagination>
    )
}

export default PaginationNums