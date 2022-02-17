import { Component, Input, OnInit } from '@angular/core';
import { CheckerService } from 'src/app/services/checker.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Checker } from 'src/app/models/checker.model';

@Component({
  selector: 'app-checker-details',
  templateUrl: './checker-details.component.html',
  styleUrls: ['./checker-details.component.css']
})
export class CheckerDetailsComponent implements OnInit {

  @Input() viewMode = false;

  @Input() currentChecker: Checker = {
    title: '',
    description: '',
    published: false
  };
  
  message = '';

  constructor(
    private checkerService: CheckerService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    if (!this.viewMode) {
      this.message = '';
    }
  }
 

 

}
