import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup,FormControl} from '@angular/forms';
import {GoalService} from'src/app/services/goal.service';
import {Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-goal-create',
  templateUrl: './goal-create.component.html',
  styleUrls: ['./goal-create.component.css']
})
export class GoalCreateComponent implements OnInit {

  goalForm: FormGroup;

  constructor(private form: FormBuilder, private goalService: GoalService, private router: Router,private activatedRoute: ActivatedRoute) {
    this.createForm();
   }

  ngOnInit() {
  }
  
  createForm(){
    this.goalForm = this.form.group({
      GoalName: new FormControl,
      GoalDescription: new FormControl
    });
  }

  onSubmit(){
    this.activatedRoute.paramMap.subscribe(params => {
    this.goalService.createGoal(params.get('id'),this.goalForm.value).subscribe(() => {
      this.router.navigate(['/goals']);
    })
  })
  } 

}
