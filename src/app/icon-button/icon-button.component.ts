import { Component, EventEmitter, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'app-icon-button',
  templateUrl: './icon-button.component.html',
  styleUrls: ['./icon-button.component.css']
})
export class IconButtonComponent implements OnInit {
  @Input() buttonName: string;
  @Output() onAdd = new EventEmitter<string>();
  click(inputText: string) {
    this.onAdd.emit(inputText);
  }
  constructor() { }

  ngOnInit() {
  }

}
