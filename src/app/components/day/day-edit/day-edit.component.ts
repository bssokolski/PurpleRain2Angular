import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from'@angular/router';
import { DayService } from 'src/app/services/day.service';
import {FormBuilder, FormGroup,FormControl} from '@angular/forms';
import { Day }from 'src/app/models/Day';
import {Router} from '@angular/router';

@Component({
  selector: 'app-day-edit',
  templateUrl: './day-edit.component.html',
  styleUrls: ['./day-edit.component.css']
})
export class DayEditComponent implements OnInit {

  day: Day;
  editForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private dayService: DayService, private activatedRoute: ActivatedRoute, private router: Router) {
    this.activatedRoute.paramMap.subscribe(params => {
      this.dayService.getDay(params.get('id')).subscribe((day: Day) => {
        this.day = day;
        this.createForm();
      })
    })
   }

  ngOnInit() {
  }

  createForm(){
    this.editForm= this.formBuilder.group({
      DayID: new FormControl(this.day.DayID),
      DayName: new FormControl(this.day.DayName),
      Date: new FormControl(this.day.Date),
    })
  }

  onSubmit(){
    const updatedDay: Day= {
        DayID: this.editForm.value.DayID,
        DayName: this.editForm.value.DayName,
        Date: this.editForm.value.Date,  
        Outfit: this.editForm.value.Date,
        Goal: this.editForm.value.Goal,  
    };
    this.dayService.updateDay(updatedDay).subscribe(() => {
     this.router.navigate(['/goals']);
  });
}
}
