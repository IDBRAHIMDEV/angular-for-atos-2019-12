import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-votes',
  templateUrl: './votes.component.html',
  styleUrls: ['./votes.component.css']
})
export class VotesComponent implements OnInit {

  @Input('like') like: number = 0;
  @Input('dis-like') disLike: number = 0;

  @Output('voteChildToParent') voteChildToParent = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  incLike() {
    this.like++;
    this.voteChildToParent.emit({ status: 'like', value: this.like });
  }

  incDisLike() {
    this.disLike++;    
    this.voteChildToParent.emit({ status: 'dislike', value: this.disLike });

  }

}
