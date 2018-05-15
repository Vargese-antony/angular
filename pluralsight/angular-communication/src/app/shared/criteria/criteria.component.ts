import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'pm-criteria',
  templateUrl: './criteria.component.html',
  styleUrls: ['./criteria.component.css']
})
export class CriteriaComponent implements OnInit, AfterViewInit {
  listFilter: string;

  @ViewChild('listFilterElementRef') listFilterElemRef: ElementRef;

  constructor() { }

  ngAfterViewInit(): void {
    this.listFilterElemRef.nativeElement.focus();
  }

  ngOnInit() {
  }

}
