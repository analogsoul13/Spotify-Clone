import React from 'react'
import { useNavigate } from 'react-router-dom'

export const ArtistItem = ({image,name,id}) => {
  return (
    <div className='min-w-[180px] p-2 px-3 rounded cursor-pointer hover:bg-[#ffffff26]'>
        <img className='rounded' src={image} alt="" />
        <p className='font-bold mt-2 mb-1'>{name}</p>
    </div>
  )
}
