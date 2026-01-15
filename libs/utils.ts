import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import * as LucideIcons from 'lucide-react';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


const iconNameToPascalCase = (str: string): string => {
  return str.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join('');
};

export const getIconComponent = (iconName: string): React.ComponentType<{ className?: string }> => {
  if (!iconName) return LucideIcons.Circle; // Default fallback icon
  
  // First, try the exact name as provided (handles PascalCase like "FileTerminal")
  let IconComponent = LucideIcons[iconName as keyof typeof LucideIcons];
  
  // If not found and the name contains a dash, convert kebab-case to PascalCase
  if (!IconComponent && iconName.includes("-")) {
    const pascalCaseName = iconNameToPascalCase(iconName);
    IconComponent = LucideIcons[pascalCaseName as keyof typeof LucideIcons];
  }
  
  // If still not found and the name is all lowercase or mixed case without dashes,
  // try capitalizing first letter (handles "home" -> "Home")
  if (!IconComponent && !iconName.includes("-")) {
    const capitalizedName = iconName.charAt(0).toUpperCase() + iconName.slice(1);
    IconComponent = LucideIcons[capitalizedName as keyof typeof LucideIcons];
  }
  
  return (IconComponent as React.ComponentType<{ className?: string }>) || LucideIcons.Circle; // Fallback to Circle if icon not found
};