import * as Components from "./registry"

const components = {
  ...Components,
}

export const getComponent = (name: keyof typeof components) => components[name] as any