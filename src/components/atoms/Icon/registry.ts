import dynamic from "next/dynamic";

// Consider this as real icons registry.
export const IconsRegistry = {
  Variant1: {
    title: 'Variant1',
    component: dynamic(() => import(`./components/Variant1`)),
  },
  Variant2: {
    title: 'Variant2',
    component: dynamic(() => import(`./components/Variant2`)),
  },
};