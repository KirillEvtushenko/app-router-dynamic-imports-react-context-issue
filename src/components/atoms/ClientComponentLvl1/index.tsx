'use client'

import { Icon } from "../../registry"

const ClientComponentLvl1: React.FC = () => {
  return (
    <div className="m-12 p-4 border border-red-800 bg-red-200 rounded-xl">
      <h1 className="font-bold text-xl mb-6">Client Component LVL1. CLS is there as well</h1>

      <div className="flex gap-4">
        <Icon variant="Variant1" className="w-16 h-16 border rounded-xl border-black p-2" />
        <Icon variant='Variant2' className="w-16 h-16 border rounded-xl border-black p-2" />
      </div>
    </div>
  )
}

export default ClientComponentLvl1