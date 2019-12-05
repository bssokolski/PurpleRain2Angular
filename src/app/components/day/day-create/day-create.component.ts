import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup,FormControl} from '@angular/forms';
import {DayService} from'src/app/services/day.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-day-create',
  templateUrl: './day-create.component.html',
  styleUrls: ['./day-create.component.css']
})
export class DayCreateComponent implements OnInit {

  dayForm: FormGroup;

  constructor(private form: FormBuilder, private dayService: DayService, private router: Router) {
    this.createForm();
   }

  ngOnInit() {
  }
  
  createForm(){
    this.dayForm = this.form.group({
      DayName: new FormControl,
      Content: new FormControl
    });
  }

  onSubmit(){
    this.dayService.createDay(this.dayForm.value).subscribe(() => {
      this.router.navigate(['/days']);
    })
  }

}
