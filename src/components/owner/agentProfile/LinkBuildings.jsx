import React from 'react'
import AgentProperties from './AgentProperties'
import Image from 'next/image'

function LinkBuildings() {
  return (
    <div className='w-full '>
      {<div className="flex items-center gap-4">
        <Image
          src="/images/dashboard/rental.png"
          width={32}
          height={32}
          alt="icon"
        />
        <span className="text-sm font-semibold">Linked Properties</span>
      </div>}
      <AgentProperties/>
    </div>
  )
}

export default LinkBuildings