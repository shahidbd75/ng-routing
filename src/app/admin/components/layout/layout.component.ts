import { Component, OnInit, HostListener, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';

declare var bootstrap: any;

interface User {
  name: string;
  email?: string;
}

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit, AfterViewInit {
  sidebarOpen: boolean = false;
  isMobile: boolean = false;
  profileDropdown: any;
  currentUser: User | null = {
    name: 'John Doe',
    email: 'john.doe@example.com'
  };

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.checkScreenSize();
  }

  ngAfterViewInit(): void {
    // Initialize Bootstrap dropdown
    const dropdownElement = document.getElementById('profileDropdown');
    if (dropdownElement && typeof bootstrap !== 'undefined') {
      this.profileDropdown = new bootstrap.Dropdown(dropdownElement);
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(): void {
    this.checkScreenSize();
    // Auto-close sidebar on mobile when window is resized to desktop
    if (!this.isMobile && this.sidebarOpen) {
      this.sidebarOpen = false;
    }
  }

  checkScreenSize(): void {
    this.isMobile = window.innerWidth < 992; // Bootstrap lg breakpoint
  }

  toggleSidebar(): void {
    this.sidebarOpen = !this.sidebarOpen;
    // Close sidebar on mobile when clicking a link
    if (this.isMobile && this.sidebarOpen) {
      // We'll close it when route changes, handled in template
    }
  }

  onNavLinkClick(): void {
    // Close sidebar on mobile when navigation link is clicked
    if (this.isMobile) {
      this.sidebarOpen = false;
    }
  }

  logout(event?: Event): void {
    if (event) {
      event.preventDefault();
    }
    // Close dropdown if open
    if (this.profileDropdown) {
      this.profileDropdown.hide();
    }
    // Implement logout logic here
    this.currentUser = null;
    this.router.navigate(['/login']);
  }
}