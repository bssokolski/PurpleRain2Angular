import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from'@angular/router';
import { GoalService } from 'src/app/services/goal.service';
import { Goal }from 'src/app/models/Goal';
import {Router} from '@angular/router';

@Component({
  selector: 'app-goal-delete',
  templateUrl: './goal-delete.component.html',
  styleUrls: ['./goal-delete.component.css']
})
export class GoalDeleteComponent implements OnInit {

  goal: Goal;

  constructor(private activatedRoute: ActivatedRoute, private goalService: GoalService, private router: Router) { 
    this.activatedRoute.paramMap.subscribe(params => {
      this.goalService.getGoal(params.get('id')). subscribe((goal: Goal) => {
        this.goal = goal;
      });
    });
  }

  ngOnInit() {
  }

  onDelete(){
    this.goalService.deleteGoal(this.goal.GoalID).subscribe(()=> {
      this.router.navigate(['/goals']);
    });
  }
}