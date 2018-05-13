import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  searchTerm = '';
  isCollapsed = true;

  /** Return login token */
  get token() {
    return localStorage.getItem('token');
  }

  /**
   *  Use to control with wheter is
   *  menu collapsed or no.
   */
  collapse() {
    this.isCollapsed = true;
  }

  /** Close navbar dropdown */
  closeDropdown(dropdown) {
    dropdown.close();
  }

  logout() { }

  search() { }
}
