import { Component, OnInit } from '@angular/core';
import { GlobalServiceService } from '../global-service.service';
// import { FormBuilder } from '@angular/forms'


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
newresponse : any;
response : any;
  constructor(private data: GlobalServiceService,
  	// private formBuilder: FormBuilder,
  	 ) {}


allData() {

   var postData = {
        limit : 100,
   }
  this.data.getAllData(postData).subscribe(data => {
  	this.response = data;
  	 if (this.response.statusCode == 200) {
  	 	this.newresponse = this.response;
  	 	console.log('response');
  	 }

    // console.log(result);
     // this.getNews();
  }, )
}
  ngOnInit() {
  	this.allData();
  }

}
