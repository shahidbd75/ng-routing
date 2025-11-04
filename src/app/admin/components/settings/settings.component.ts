import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ThemeService, ThemeColors } from '../../../services/theme.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
  settingsForm!: FormGroup;
  currentTheme: ThemeColors;
  
  presetThemes: { name: string; colors: ThemeColors }[] = [
    {
      name: 'Default (Green/Purple)',
      colors: {
        primary: '#22c55e',
        secondary: '#a855f7',
        primaryDark: '#16a34a',
        secondaryDark: '#9333ea'
      }
    },
    {
      name: 'Blue/Orange',
      colors: {
        primary: '#3b82f6',
        secondary: '#f97316',
        primaryDark: '#2563eb',
        secondaryDark: '#ea580c'
      }
    },
    {
      name: 'Red/Pink',
      colors: {
        primary: '#ef4444',
        secondary: '#ec4899',
        primaryDark: '#dc2626',
        secondaryDark: '#db2777'
      }
    },
    {
      name: 'Teal/Amber',
      colors: {
        primary: '#14b8a6',
        secondary: '#f59e0b',
        primaryDark: '#0d9488',
        secondaryDark: '#d97706'
      }
    },
    {
      name: 'Indigo/Cyan',
      colors: {
        primary: '#6366f1',
        secondary: '#06b6d4',
        primaryDark: '#4f46e5',
        secondaryDark: '#0891b2'
      }
    }
  ];

  constructor(
    private fb: FormBuilder,
    private themeService: ThemeService
  ) {
    this.currentTheme = this.themeService.getCurrentTheme();
  }

  ngOnInit(): void {
    this.settingsForm = this.fb.group({
      primaryColor: [this.currentTheme.primary],
      secondaryColor: [this.currentTheme.secondary],
      presetTheme: ['']
    });
  }

  onPresetThemeChange(event: any): void {
    const selectedTheme = this.presetThemes.find(t => t.name === event.target.value);
    if (selectedTheme) {
      this.settingsForm.patchValue({
        primaryColor: selectedTheme.colors.primary,
        secondaryColor: selectedTheme.colors.secondary
      });
      this.applyTheme(selectedTheme.colors);
    }
  }

  onPrimaryColorChange(): void {
    const primaryColor = this.settingsForm.get('primaryColor')?.value;
    const secondaryColor = this.settingsForm.get('secondaryColor')?.value;
    const primaryDark = this.darkenColor(primaryColor);
    const secondaryDark = this.darkenColor(secondaryColor);
    
    const newTheme: ThemeColors = {
      primary: primaryColor,
      secondary: secondaryColor,
      primaryDark,
      secondaryDark
    };
    
    this.applyTheme(newTheme);
    this.settingsForm.patchValue({ presetTheme: '' }); // Clear preset selection
  }

  onSecondaryColorChange(): void {
    const primaryColor = this.settingsForm.get('primaryColor')?.value;
    const secondaryColor = this.settingsForm.get('secondaryColor')?.value;
    const primaryDark = this.darkenColor(primaryColor);
    const secondaryDark = this.darkenColor(secondaryColor);
    
    const newTheme: ThemeColors = {
      primary: primaryColor,
      secondary: secondaryColor,
      primaryDark,
      secondaryDark
    };
    
    this.applyTheme(newTheme);
    this.settingsForm.patchValue({ presetTheme: '' }); // Clear preset selection
  }

  applyTheme(theme: ThemeColors): void {
    this.currentTheme = theme;
    this.themeService.setTheme(theme);
  }

  resetTheme(): void {
    this.themeService.resetTheme();
    const defaultTheme = this.presetThemes[0].colors;
    this.currentTheme = defaultTheme;
    this.settingsForm.patchValue({
      primaryColor: defaultTheme.primary,
      secondaryColor: defaultTheme.secondary,
      presetTheme: 'Default (Green/Purple)'
    });
  }

  private darkenColor(color: string): string {
    // Darken color by reducing RGB values by 15%
    const hex = color.replace('#', '');
    if (hex.length !== 6) {
      return color; // Return original if invalid format
    }
    
    const r = Math.max(0, Math.round(parseInt(hex.substring(0, 2), 16) * 0.85));
    const g = Math.max(0, Math.round(parseInt(hex.substring(2, 4), 16) * 0.85));
    const b = Math.max(0, Math.round(parseInt(hex.substring(4, 6), 16) * 0.85));
    
    return `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`;
  }
}