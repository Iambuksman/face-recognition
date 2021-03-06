import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
    return (
        <div>
            <p className='f3'>
                {'This magic Brain will detect faces in your pictures. Give it a trial.'}
            </p>
            <div className='center'>
                <div className='form center pa4 br3 shadow-5'>
                <input className='f4 pa2 w-70 center' type='tex' onChange={onInputChange}/>
                    <button 
                    className='w-35 grow  f4 link ph3 pv2 dib pointer bg-black white'
                    onClick={onButtonSubmit}>
                    DETECT
                    </button>
                </div>
            </div>
        </div>
    );
}
export default ImageLinkForm; 
