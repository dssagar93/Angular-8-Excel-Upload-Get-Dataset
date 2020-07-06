import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-datatable-grid',
  templateUrl: './datatable-grid.component.html',
  styleUrls: ['./datatable-grid.component.sass']
})
export class DatatableGridComponent implements OnInit {

  @Input() dataFetched;
  dtOptions: DataTables.Settings = {};
 
  constructor() {

  }

  ngOnInit() {
     
  }

}
