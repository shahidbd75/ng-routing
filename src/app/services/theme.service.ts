import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export interface ThemeColors {
  primary: string;
  secondary: string;
  primaryDark: string;
  secondaryDark: string;
}

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private readonly STORAGE_KEY = 'app-theme';
  
  // Default theme: Green primary, Purple secondary
  private defaultTheme: ThemeColors = {
    primary: '#22c55e', // green-500
    secondary: '#a855f7', // purple-500
    primaryDark: '#16a34a', // green-600
    secondaryDark: '#9333ea' // purple-600
  };

  private themeSubject: BehaviorSubject<ThemeColors>;
  public theme$: Observable<ThemeColors>;

  constructor() {
    // Load theme from localStorage or use default
    const savedTheme = this.loadThemeFromStorage();
    this.themeSubject = new BehaviorSubject<ThemeColors>(savedTheme || this.defaultTheme);
    this.theme$ = this.themeSubject.asObservable();
    
    // Apply initial theme
    this.applyTheme(savedTheme || this.defaultTheme);
  }

  getCurrentTheme(): ThemeColors {
    return this.themeSubject.value;
  }

  setTheme(theme: ThemeColors): void {
    this.themeSubject.next(theme);
    this.saveThemeToStorage(theme);
    this.applyTheme(theme);
  }

  resetTheme(): void {
    this.setTheme(this.defaultTheme);
  }

  private applyTheme(theme: ThemeColors): void {
    const root = document.documentElement;
    root.style.setProperty('--bs-primary', theme.primary);
    root.style.setProperty('--bs-secondary', theme.secondary);
    root.style.setProperty('--bs-primary-dark', theme.primaryDark);
    root.style.setProperty('--bs-secondary-dark', theme.secondaryDark);
    
    // Also set custom CSS variables
    root.style.setProperty('--theme-primary', theme.primary);
    root.style.setProperty('--theme-secondary', theme.secondary);
    root.style.setProperty('--theme-primary-dark', theme.primaryDark);
    root.style.setProperty('--theme-secondary-dark', theme.secondaryDark);
  }

  private saveThemeToStorage(theme: ThemeColors): void {
    try {
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(theme));
    } catch (error) {
      console.warn('Failed to save theme to localStorage:', error);
    }
  }

  private loadThemeFromStorage(): ThemeColors | null {
    try {
      const saved = localStorage.getItem(this.STORAGE_KEY);
      return saved ? JSON.parse(saved) : null;
    } catch (error) {
      console.warn('Failed to load theme from localStorage:', error);
      return null;
    }
  }
}
