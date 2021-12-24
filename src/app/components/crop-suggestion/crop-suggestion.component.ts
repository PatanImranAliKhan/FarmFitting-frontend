import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crop-suggestion',
  templateUrl: './crop-suggestion.component.html',
  styleUrls: ['./crop-suggestion.component.css']
})
export class CropSuggestionComponent implements OnInit {

  public season=""
  constructor() { }

  ngOnInit(): void {
  }

}
