import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from'@angular/router';
import { GoalService } from 'src/app/services/goal.service';
import {FormBuilder, FormGroup,FormControl} from '@angular/forms';
import { Goal }from 'src/app/models/Goal';
import {Router} from '@angular/router';

@Component({
  selector: 'app-goal-edit',
  templateUrl: './goal-edit.component.html',
  styleUrls: ['./goal-edit.component.css']
})
export class GoalEditComponent implements OnInit {

  goal: Goal;
  editForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private goalService: GoalService, private activatedRoute: ActivatedRoute, private router: Router) {
    this.activatedRoute.paramMap.subscribe(params => {
      this.goalService.getGoal(params.get('id')).subscribe((goal: Goal) => {
        this.goal = goal;
        this.createForm();
      })
    })
   }

  ngOnInit() {
  }

  createForm(){
    this.editForm= this.formBuilder.group({
      GoalID: new FormControl(this.goal.GoalID),
      GoalName: new FormControl(this.goal.GoalName),
      GoalDescription: new FormControl(this.goal.GoalDescription),
    })
  }

  onSubmit(){
    const updatedGoal: Goal= {
        GoalID: this.editForm.value.GoalID,
        GoalName: this.editForm.value.GoalName,
        GoalDescription: this.editForm.value.GoalDescription,  
    };
    this.goalService.updateGoal(updatedGoal).subscribe(() => {
     this.router.navigate(['/goals']);
  });
}
}

