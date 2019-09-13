import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-panel',
  templateUrl: './side-panel.component.html',
  styleUrls: ['./side-panel.component.scss']
})
export class SidePanelComponent implements OnInit {
  navOptions: any;
  isExpanded = false;
  navOptionsExpanded: string[];

  constructor() { }

  ngOnInit() {
    this.navOptions = ['fa fa-tachometer', 'fa fa-users', 'fa fa-sticky-note-o', 'fa fa-newspaper-o'];
    this.navOptionsExpanded = [ 'Dashboard', 'Placement', 'Notes', 'Blogs' ];
  }

  expandSidePanel() {
    this.isExpanded = this.isExpanded ? false : true;
  }

}
