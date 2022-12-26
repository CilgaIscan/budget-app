import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, Form, FormControl, ValidationErrors } from '@angular/forms';


@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {

  @Input() control!: any;
  @Input() label!: string;

  constructor() { }

  ngOnInit(): void {
  }

  public get errors(): ValidationErrors | null | undefined  {
    return this.control?.errors;
  }

}
