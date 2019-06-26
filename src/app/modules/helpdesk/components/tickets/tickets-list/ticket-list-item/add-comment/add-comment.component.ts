import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Comment} from '../../../../../models/comment';

@Component({
  selector: 'app-add-comment',
  templateUrl: './add-comment.component.html',
  styleUrls: ['./add-comment.component.scss']
})
export class AddCommentComponent implements OnInit {

  @Output()
  public sendComment: EventEmitter<Comment> = new EventEmitter();

  public commentText: string;

  constructor() { }

  ngOnInit() {
  }

  send() {
    this.sendComment.emit({text: this.commentText});
    this.commentText = '';
  }

}
