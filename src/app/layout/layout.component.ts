import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit {
  level = 1;
  enableNotTable = false;

  registers = [
    {
      title: 'One',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      icon: 'fa-user',
    },
    {
      title: 'Two',
      content:
        'Ut maximus tincidunt nulla sit amet tempus. Ut eget interdum lacus.',
      icon: 'fa-plus',
    },
    {
      title: 'Three',
      content: 'Vestibulum ac luctus ipsum..',
      icon: 'fa-minus',
    },
    {
      title: 'Four',
      content:
        'Nam hendrerit mattis nisi a tempor. In pharetra felis quis magna accumsan malesuada. Suspendisse tristique purus quam, id auctor enim molestie ut.',
      icon: 'fa-angle-up',
    },
    {
      title: 'Five',
      content:
        'Proin non odio id nisl fringilla vestibulum in vehicula nibh. Sed vel tincidunt eros.',
      icon: 'fa-angle-down'
    },
  ];

  constructor() {}

  ngOnInit(): void { }

  getLabel(): string {
    return `level-${this.level}`;
  }
}

