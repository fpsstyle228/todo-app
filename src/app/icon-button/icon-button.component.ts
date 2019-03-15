import { Component, EventEmitter, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'app-icon-button',
  templateUrl: './icon-button.component.html',
  styleUrls: ['./icon-button.component.css']
})
export class IconButtonComponent implements OnInit {
  @Input() buttonName: string;
  @Input() inputText: string;
  @Output() onButtonAdd = new EventEmitter<string>();
  iconButtonClick(inputText: string) {
    this.onButtonAdd.emit(inputText);
  }
  constructor() { }

  ngOnInit() {
  }

}
