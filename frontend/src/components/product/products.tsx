import React from 'react';
import { Link } from 'react-router-dom';

const products:React.FC = ({product, col}:any) => {

  return (
    <>
      <div className='container'>
        <div className='row'>
          <div className='col-6 mb-mt-3'>
            <div className='card-header'>
              <article className='card-body'>
                <article className='card-content'>
                  <img src="../../../images" alt="" />
                </article>

              </article>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default products 