import React from 'react'

export const Seeker = ( {onSubmit, valorInput, onChange} ) => {
  return (
    <div>
        <form className='form-seeker' onSubmit={onSubmit}>
          <input className='seeker' type="text" value={valorInput} onChange={onChange} />
        </form>
    </div>
  )
}
