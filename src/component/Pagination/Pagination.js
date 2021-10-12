import React from 'react'
import CustomButton from '../CustomButton/CustomButton'



const Pagination = ({gotToPrevPage, gotToNextPage}) => {
  return (
    <>
       {gotToPrevPage && 
        <CustomButton 
          variant="secondary"
          handleClick={gotToPrevPage}
        >
          Prev
        </CustomButton>}

       {gotToNextPage && 
        <CustomButton 
          variant="primary" 
          handleClick={gotToNextPage}
        >
          Next
        </CustomButton>}
    </>
  )
}

export default Pagination
