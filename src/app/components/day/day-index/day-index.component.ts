import { Component, OnInit } from '@angular/core';
import {DayService} from '../../../services/day.service';
import {Day} from '../../../models/Day'
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-day-index',
  templateUrl: './day-index.component.html',
  styleUrls: ['./day-index.component.css']
})
export class DayIndexComponent implements OnInit {

  constructor(private _dayService: DayService) { }

  columnNames = ['details', 'DayID', 'DayName', 'Date', 'Outfit', 'Goal', 'buttons']

  dataSource: MatTableDataSource<Day>
  
  ngOnInit() {
    this._dayService.getDays().subscribe((days: Day[])=> {
      this.dataSource = new MatTableDataSource<Day>(days);
    });
  }
}
