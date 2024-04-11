'use client'

import { ClientComponentLvl2 } from "../../registry";

const ClientComponentLvl3: React.FC = () => {
  return (
    <div className="m-12 p-4 border border-blue-800 bg-blue-200 rounded-xl">
      <h1 className="font-bold text-xl mb-6">Client component LVL3. It renders Client component LVL2</h1>
      <p>Refresh Production app with DISABLED CACHE + Fast 3G network speed (in dev tools) to see the issue</p>

      <div>
        <ClientComponentLvl2 />
      </div>
    </div>
  )
}

export default ClientComponentLvl3