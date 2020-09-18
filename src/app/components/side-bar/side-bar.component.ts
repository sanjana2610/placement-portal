import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Sidebar} from '../../models/sidebar';
import sidebarJSON from "../../../assets/sidebar.json";
import {sidebarLinks} from '../../models/sidebarLinks';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css'],
})
export class SideBarComponent implements OnInit {
  sidebarItems: Sidebar[] = [];
  constructor(private router: Router) {

  }

  ngOnInit() {
    this.buildSidebar();
  }
  buildSidebar() {
    for (const item of sidebarJSON) {
        const temp = [];
        for (const link of item.links) {
          temp.push(new sidebarLinks(link.name, link.route));
        }
        this.sidebarItems.push(new Sidebar(item.title, temp));
    }
  }

  navigate(url: string) {
    this.router.navigateByUrl(url);
  }
}
