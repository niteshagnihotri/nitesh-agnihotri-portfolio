import React from 'react'

export default function SkillBadgeComponent({text}:{text: string;}) {
  return (
    <div className='bg-slate-100 w-fit text-[#1f4272] text-sm py-1 px-4 hover:bg-opacity-30 rounded-lg shadow-sm'>{text}</div>
  )
}
