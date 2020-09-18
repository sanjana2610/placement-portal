import {sidebarLinks} from './sidebarLinks';

export class Sidebar {
  title: string;
  links: sidebarLinks[];

  constructor(title, links) {
    this.title = title;
    this.links = links;
  }
}
