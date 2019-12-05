import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from'@angular/router';
import { DayService } from 'src/app/services/day.service';
import { Day }from 'src/app/models/Day';
import {Router} from '@angular/router';

@Component({
  selector: 'app-day-delete',
  templateUrl: './day-delete.component.html',
  styleUrls: ['./day-delete.component.css']
})
export class DayDeleteComponent implements OnInit {

  day: Day;

  constructor(private activatedRoute: ActivatedRoute, private dayService: DayService, private router: Router) { 
    this.activatedRoute.paramMap.subscribe(params => {
      this.dayService.getDay(params.get('id')). subscribe((day: Day) => {
        this.day = day;
      });
    });
  }

  ngOnInit() {
  }

  onDelete(){
    this.dayService.deleteDay(this.day.DayID).subscribe(()=> {
      this.router.navigate(['/notes']);
    });
  }
}
