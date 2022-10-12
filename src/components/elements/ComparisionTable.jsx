import React from 'react'
import DataTable from './DataTable'

const ComparisionTable = () => {
  return (
    <div className="comparision-table-section py-5">
        <div className="container">
            <div className="row text-center mb-5">
                <h1 className='fw-bold'>Comparison Table</h1>
                <h4 className='fs-5'>We are building whole ecosystem tools for future identities and data.</h4>
            </div>
            <div className="row">
                <DataTable />
            </div>
        </div>
    </div>
  )
}

export default ComparisionTable