import { Component, OnInit } from '@angular/core';
import {QuestionService} from './services/question.service';
import {Question} from './models/question';
import {Vote} from './models/vote';

@Component({
  selector: 'sl-qa',
  templateUrl: './qa.component.html',
  styleUrls: ['./qa.component.scss']
})
export class QaComponent implements OnInit {
  public questions: Question[];

  constructor(public readonly questionService: QuestionService) {
    questionService.getQuestions().subscribe((questions: Question[]) => {
      this.questions = questions;
      
      this.questions.map((question: Question) => {
        question.answers.map((answer: any)=>{
          answer.upvotes = this.amountOfVotes(answer.votes, 'up');
          answer.downvotes = this.amountOfVotes(answer.votes, 'down');
        });
      });
    });
  }

  private amountOfVotes(votes: Vote[], searchedType: string): number {
    let count = 0;

    votes.forEach((vote: Vote) => {
      if(vote.type.name === searchedType) {
        count++;
      }
    });

    return count;
  }

  ngOnInit(): void {
  }

}
