import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'openglclevel-app';
  isExpanded = false;

  links: Array<{ text: string, path: string }> = [];

  ngOnInit(){
    this.links.push(
      { text: "Principal", path: "" },
      { text: "Bitácora", path: "clients" },
      { text: "Agregar registro", path: "profile" },
      );
  }

  toggle() {
    this.isExpanded = !this.isExpanded;
  }
}
