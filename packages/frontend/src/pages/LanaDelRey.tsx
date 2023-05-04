import React from 'react';
import CardNews from '../components/common/CardNews'
  
function LanaDelRey (){
    return (
    <div className='mx-3'>
        <section className='my-4'> 
            <div className='d-flex flex-column align-items-start mb-3'>
                <h2>Last Music Videos</h2>
                <p className="text-justify">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod </p>
            </div>
            <div className='row'>
                
            </div>
       </section>

       <section className='my-4'> 
            <div className='d-flex flex-column align-items-start mb-3'>
                <h2>Inspired Pictures</h2>
                <p className="text-justify">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod </p>
            </div>
            <div className='row'>
                
            </div>
       </section>

       <section className='my-4'> 
            <div className='d-flex flex-column align-items-start mb-3'>
                <h2>Last News</h2>
                <p className="text-justify">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod </p>
            </div>
            <div className='row'>
                <div className='col'><CardNews/></div>
                <div className='col'><CardNews/></div>
                <div className='col'><CardNews/></div>
            </div>
       </section>
    </div>
)}
  
export default LanaDelRey;