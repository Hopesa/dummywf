import React, { useState } from 'react'

const BodyLoader = (props) => (
    <>
        <div className="d-flex justify-content-center">
            <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    </>
)

export default BodyLoader
