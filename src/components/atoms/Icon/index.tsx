'use client';

import { IconsRegistry } from './registry';

type IconVariant = keyof typeof IconsRegistry;

interface Props {
  variant: IconVariant;
  className?: string;
}

export function getIcon(variant: IconVariant) {
  return IconsRegistry[variant];
}

export const Icon: React.FC<Props> = ({ variant, ...props }) => {
  if (!variant) {
    return null;
  }

  const { component: IconComponent } = IconsRegistry[variant] ?? {};

  if (!IconComponent) {
    return null;
  }

  return (
    <IconComponent
      role="img"
      {...props}
    />
  );
};

export default Icon;
