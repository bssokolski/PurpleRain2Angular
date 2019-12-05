import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from'@angular/router';
import { DayService } from 'src/app/services/day.service';
import { Day }from 'src/app/models/Day';

@Component({
  selector: 'app-day-detail',
  templateUrl: './day-detail.component.html',
  styleUrls: ['./day-detail.component.css']
})
export class DayDetailComponent implements OnInit {

  day: Day;

  constructor(private activatedRoute: ActivatedRoute, private dayService: DayService) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(routeData => {
      this.dayService.getDay(routeData.get('id')).subscribe((day: Day) => {
        this.day = day;
        console.log(this.day)
    });
  });
}
}
