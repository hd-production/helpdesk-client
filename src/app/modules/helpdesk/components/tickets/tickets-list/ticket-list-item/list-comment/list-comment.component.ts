import {Component, Input, OnInit} from '@angular/core';
import {Comment} from '../../../../../models/comment';

@Component({
  selector: 'app-list-comment',
  templateUrl: './list-comment.component.html',
  styleUrls: ['./list-comment.component.scss']
})
export class ListCommentComponent implements OnInit {

  @Input()
  public comments: Array<Comment>;

  constructor() { }

  ngOnInit() {
  }

}
