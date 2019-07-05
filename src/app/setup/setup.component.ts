import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-setup',
  templateUrl: './setup.component.html',
  styleUrls: ['./setup.component.scss']
})
export class SetupComponent implements OnInit {

  github: FormGroup;
  linearMode = true;
  constructor(private builder:FormBuilder) { }

  ngOnInit() {
    this.github = this.builder.group({
      baseUrl: ['', Validators.required],
      token:['', Validators.required]
    });
  }

}
