'use client'

import { getComponent } from "@/components/registryEntry";

const ClientComponentLvl3: React.FC = () => {
  const ClientComponentLvl2 = getComponent('ClientComponentLvl2');

  return (
    <div className="m-12 p-4 border border-blue-800 bg-blue-200 rounded-xl">
      <h1 className="font-bold text-xl mb-6">Client component LVL3. It renders Client component LVL2</h1>
      <p>You will immediately see the content if you open page directly</p>

      <div>
        <ClientComponentLvl2 />
      </div>
    </div>
  )
}

export default ClientComponentLvl3