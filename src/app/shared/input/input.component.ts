import { Component, Input, OnInit } from '@angular/core';
import { ValidationErrors } from '@angular/forms';


@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {

  @Input() control!: any;
  @Input() label!: string;
  @Input() inputType: string = 'text';

  @Input() isDatePicker: boolean = false;
  @Input() isColorPicker: boolean = false;
  @Input() isIconPicker: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  public get errors(): ValidationErrors | null | undefined  {
    return this.control?.errors;
  }

}
