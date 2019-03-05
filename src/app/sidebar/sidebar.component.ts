import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  // @Input() user: any = {};

  constructor(
    // private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  navigate(link): void {
    this.router.navigate([link]);
  }

}
