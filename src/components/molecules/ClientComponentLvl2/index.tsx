'use client';

import { ClientComponentLvl1 } from "../../registry";

const ClientComponentLvl2: React.FC = () => {
  return (
    <div className="m-12 p-4 border border-yellow-800 bg-yellow-200 rounded-xl">
      <h1 className="font-bold text-xl mb-6">Client component LVL2. CLS is there</h1>

      <div>
        <ClientComponentLvl1 />
      </div>
    </div>
  )
};

export default ClientComponentLvl2