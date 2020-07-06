import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { CustomServiceService } from '../services/custom-service.service';
import { isNullOrUndefined } from 'util';


@Component({
  selector: 'app-upload-excel',
  templateUrl: './upload-excel.component.html',
  styleUrls: ['./upload-excel.component.sass']
})
export class UploadExcelComponent implements OnInit {
  @ViewChild('inputFile', { static: false }) fileUploadEl: ElementRef;

  public uploading: boolean = false;
  public uploadedFiles: any;
  public selectedFileName: any;
  public uploadAPI: string = 'https://localhost:44327/api/UploadExcelFile'; // better use a service class

  public statusMsg: string = "";

  constructor(private customService: CustomServiceService) {


  }

  ngOnInit() {
  }

  fileChange(element) {
    this.uploadedFiles = element.target.files[0];
    this.selectedFileName = this.uploadedFiles.name;

    var fileExtension = this.uploadedFiles.name.split('.').pop();

    if (fileExtension != "xlsx" && fileExtension != "xls") {
      this.Reset();
      alert("Selected file is not Excel file, only .xls and .xlsx files are allowed.");
      return;
    }
  }



  uploadFile() {
    if (isNullOrUndefined(this.uploadedFiles)) {
      alert("Please select an excel file to upload");
      return;
    }
    var formdata = new FormData();
    formdata.append("file", this.uploadedFiles, this.uploadedFiles.name);

    this.uploading = true;

    this.customService.uploadToUrl(formdata).subscribe(success => {
      this.statusMsg = success["results"];
      alert(this.statusMsg);
      this.Reset();
    },
      error => {
        this.statusMsg = "Error Occurred";
        alert(this.statusMsg);
        this.Reset();
      }
    );

  }


  Reset() {
    this.uploadedFiles = null;
    this.selectedFileName = null;
    this.fileUploadEl.nativeElement.value = '';
    this.uploading = false;

  }

  public OpenFileUploader(){
    let el:HTMLElement=document.querySelector('#fileUpload') as HTMLElement;
    el.click();
  }

}
