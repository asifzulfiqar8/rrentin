import React from 'react'
import AgentCardHeader from './AgentCardHeader'
import AgentCard from './AgentCard'
import { myAgentData, myPropertiesData } from '@/data/data'

function MyAgents() {
    return (
        <section
            className="bg-white rounded-lg p-4 mt-4"
            style={{ boxShadow: "0px 2px 12px 0px #3582E71A" }}
        >
            <AgentCardHeader />
            <div className="grid mt-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3 gap-6 max-h-[800px] overflow-y-scroll scroll-0">
                {myAgentData.map((card, i) => (
                    <AgentCard data={card} key={i}/>
                ))}
            </div>
        </section>
    )
}

export default MyAgents