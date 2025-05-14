import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export const sortByDate = (a, b) => {
  return new Date(b.created) - new Date(a.created);
};


export function cn(...inputs) {
  return twMerge(clsx(inputs));
}
