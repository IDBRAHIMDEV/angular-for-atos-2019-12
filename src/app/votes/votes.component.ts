import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-votes',
  templateUrl: './votes.component.html',
  styleUrls: ['./votes.component.css']
})
export class VotesComponent implements OnInit {

  @Input('like') like: number = 0;
  @Input('dis-like') disLike: number = 0;
  constructor() { }

  ngOnInit() {
  }

  incLike() {
    this.like++;
  }

  incDisLike() {
    this.disLike++;
  }

}
