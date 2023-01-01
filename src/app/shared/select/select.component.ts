import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent implements OnInit {

  @Input() control!: any;
  @Input() label!: string;
  @Input() options!: any[];

  constructor() { }

  ngOnInit(): void {
  }

}
