import { InjectionToken } from '@angular/core';

export interface NavbarItem {
  key: string;
  title?: string;
  url?: string;
  parent?: string;
  isEdit?: boolean;
  newValue?: boolean;
  active?: boolean;
  children?: NavbarItem[];
}

export const NAVIGATIONS = new InjectionToken<NavbarItem[]>('Navigations');
