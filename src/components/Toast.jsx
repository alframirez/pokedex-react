import React from 'react'

export function Toast ({ message, showToast, onClose, color }) {
  return (
    <div className={`toast ${showToast ? 'show' : ''}`} style={{ backgroundColor: color }}>
      <div className='toast-content'>
        <div className='toast-message'>{message}</div>
        <button className='close-button' onClick={onClose}>
          X
        </button>
      </div>
    </div>
  )
};
