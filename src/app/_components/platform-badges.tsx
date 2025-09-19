import React from 'react'

type PlatformBadge = {
    title:string;
    description:string;
}

const PlatformBadge = ({
    title,
    description
}:PlatformBadge) => {
  return (
    <div className='text-center'>
        <p className='font-bold text-2xl text-primary'>{title}</p>
        <p className='text-sm text-muted-foreground'>{description}</p>
    </div>
  )
}

export default PlatformBadge