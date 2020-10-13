import { Component, OnInit } from '@angular/core';
import {Category} from '../../models/Category';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  categories: Category[];

}
