import React from 'react'
import styled from '@emotion/styled';
import '../style/spinner.css'

const Spiner = styled.div`
    margin-top: 50px;
`;

export const Spinner = () => {
  return (
    <Spiner>
      <div className="sk-chase">
              <div className="sk-chase-dot"></div>
              <div className="sk-chase-dot"></div>
              <div className="sk-chase-dot"></div>
              <div className="sk-chase-dot"></div>
              <div className="sk-chase-dot"></div>
              <div className="sk-chase-dot"></div>
      </div>
    </Spiner>
   
  )
}
