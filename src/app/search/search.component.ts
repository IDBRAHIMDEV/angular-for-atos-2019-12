import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  @Input('my-title') title = "";
  
  @Output('searchItemEvent') searchItemEvent = new EventEmitter();


  search: string = "";

  constructor() { }

  ngOnInit() {
  }

  searchItems() {
    this.searchItemEvent.emit(this.search);
  }

}
