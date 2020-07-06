import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CustomServiceService } from '../services/custom-service.service';
import { isNullOrUndefined } from 'util';

declare var $: any;

@Component({
  selector: 'app-query-builder',
  templateUrl: './query-builder.component.html',
  styleUrls: ['./query-builder.component.scss']
})
export class QueryBuilderComponent implements OnInit {

  public data: [];
  title = 'BrandChannelTable';
  dtOptions: DataTables.Settings = {};

  public FetchingData: boolean = false;

  protected rules_basic = {
    condition: 'AND',
    rules: [{
      id: 'brand',
      operator: 'equal',
      value: ''
    }]
  };


  constructor(private customService: CustomServiceService, private cdr: ChangeDetectorRef) { }

  ngOnInit() {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      processing: true
    };

  }

  ngAfterViewInit() {
    this.getQueryBuilder();
  }

  private getQueryBuilder() {
    $("#builder").queryBuilder({

      filters: [{
        id: 'brand',
        label: 'Brand',
        type: 'string'
      },
      {
        id: 'channel',
        label: 'Channel',
        type: 'string'
      },
      {
        id: 'impactbase',
        label: 'ImpactBase',
        type: 'string',
        input: 'select',
        values: {
          'Impact': 'Impact',
          'Base': 'Base'
        },
        operators: ['equal', 'not_equal']
      },
      {
        id: 'activitydate',
        label: 'ActivityDate',
        type: 'date',
        validation: {
          format: 'YYYY-MM-DD'
        },
        plugin: 'datepicker',
        plugin_config: {
          format: 'yyyy-mm-dd',
          todayBtn: 'linked',
          todayHighlight: true,
          autoclose: true
        }
      }
      ],

      rules: this.rules_basic
    });
  }


  reset() {
    $('#builder').queryBuilder('reset');
    this.data = [];
    this.cdr.detectChanges();
  }

  setRules(rules: any) {
    $('#builder').queryBuilder('setRules', rules);
  }

  getRules() {
    var sql_raw = $('#builder').queryBuilder('getSQL', false, true);
    if(isNullOrUndefined(sql_raw)) return;
    this.GetBrandChannel(sql_raw);

  }

  GetBrandChannel(qry) {

    this.data = [];
    this.cdr.detectChanges();
    this.FetchingData = true;

    this.customService.GetBrandChannel(qry).subscribe((res) => {
      var datatableRecords = JSON.parse(res["jsonData"]);
      this.data = datatableRecords;
      this.FetchingData = false;

    },
      error => {
        alert("Error Occurred");
        this.FetchingData = false;

      }
    );
  }

}
