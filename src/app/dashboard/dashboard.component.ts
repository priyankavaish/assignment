import { Component, OnInit } from '@angular/core';
import { GlobalServiceService } from '../global-service.service';
// import { FormBuilder } from '@angular/forms'
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
newresponse : any;
response : any;
res: any;
public postData: any = {};
  constructor(private data: GlobalServiceService,
    private router: Router,
  	// private formBuilder: FormBuilder,
  	 ) {}



allData(){
  debugger;
 let postData = {
        limit : 100,
   }
  this.data.getAllData(postData).subscribe(res => {
    // this.newresponse = [];
    this.response = res;

    if (this.response.statusCode == 200) {
      this.newresponse = this.response;
    }
    

     })

}
allData2() {
   let postData = {
        limit : 100,
   }
  this.data.getAllData(postData).subscribe(res => {
  	this.response = res;
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
