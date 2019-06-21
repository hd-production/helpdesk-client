import {Comment} from './comment';

export class Ticket {
  id?: number;
  issue: string;
  details: string;
  assigneeId?: number;
  statusId: number;
  priorityId: number;
  comments: Comment[];
}
