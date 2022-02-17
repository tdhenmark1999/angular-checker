import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import { Checker } from 'src/app/models/checker.model';
import { CheckerService } from 'src/app/services/checker.service';

@Component({
  selector: 'app-checkers-list',
  templateUrl: './checkers-list.component.html',
  styleUrls: ['./checkers-list.component.css']
})
export class CheckersListComponent implements OnInit {

  checkers?: Checker[];
  currentChecker: Checker = {};
  currentIndex = -1;
  title = '';
  searchText:any;

  constructor(private checkerService: CheckerService) { }

  ngOnInit(): void {
    this.retrieveCheckers();
  }

  retrieveCheckers(): void {
    this.checkerService.getAll()
      .subscribe({
        next: (data) => {
          this.checkers = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

  refreshList(): void {
    this.retrieveCheckers();
    this.currentChecker = {};
    this.currentIndex = -1;
  }

  setActiveChecker(checker: Checker, index: number): void {
    this.currentChecker = checker;
    this.currentIndex = index;
  }

// Sample Functionality for 
  searchPostId(): void {
    this.currentChecker = {};
    this.currentIndex = -1;

    this.checkerService.findByPostId(this.title)
      .subscribe({
        next: (data) => {
          this.checkers = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

}
