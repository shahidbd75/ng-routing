import { Component, OnInit } from '@angular/core';
import { ThemeService } from './services/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ng-routing';

  constructor(private themeService: ThemeService) {}

  ngOnInit(): void {
    // Initialize theme service to apply saved theme
    this.themeService.getCurrentTheme();
  }
}
