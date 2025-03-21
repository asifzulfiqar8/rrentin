import MyTenants from "@/components/owner/Tenants/MyTenants"
import TenantsHeader from "@/components/owner/Tenants/TenantsHeader"
import TopCards from "@/components/owner/Tenants/TopCards"

const Tenants = () => {
  return (
    <div>
      <TenantsHeader/>
      <TopCards/>
      <MyTenants/>
    </div>
  )
}

export default Tenants
