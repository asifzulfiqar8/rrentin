import AgentHeader from '@/components/owner/agents/AgentHeader'
import MyAgents from '@/components/owner/agents/MyAgents'
import TopCards from '@/components/owner/agents/TopCards'
import React from 'react'

function Agent() {
    return (
        <div>
            <AgentHeader />
            <TopCards />
            <MyAgents />
        </div>
    )
}

export default Agent