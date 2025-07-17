// src/components/01_accordion/components.tsx
import React from 'react';
import { tabVariants, contentVariants, itemVariants, toggleIconVariants } from './variants';
import { TabProps, ContentProps, ItemProps, ToggleIconProps } from './types';

export const Tab = ({
  children,
  onClick,
  isActive,
  state,
  className,
  ...props
}: TabProps) => {
  return (
    <div
      className={`${tabVariants({ state: isActive ? 'active' : 'default' })} ${
        className || ''
      }`}
      onClick={onClick}
      role="button"
      tabIndex={0}
      aria-expanded={isActive}
      onKeyDown={e => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onClick();
        }
      }}
      {...props}
    >
      {children}
    </div>
  );
};

export const Content = ({
  children,
  display,
  isVisible = true,
  className,
  ...props
}: ContentProps) => {
  if (display === 'conditional' && !isVisible) return null;

  return (
    <div
      className={`${contentVariants({ display })} ${className || ''}`}
      role="region"
      {...props}
    >
      {children}
    </div>
  );
};

export const Item = ({ children, type, className, ...props }: ItemProps) => {
  return (
    <li className={`${itemVariants({ type })} ${className || ''}`} {...props}>
      {children}
    </li>
  );
};
