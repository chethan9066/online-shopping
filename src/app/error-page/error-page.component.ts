import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Data } from '@angular/router';

@Component({
  selector: 'app-error-page',
  templateUrl: './error-page.component.html',
  styleUrls: ['./error-page.component.css']
})
export class ErrorPageComponent implements OnInit {

  imagePath="https://safetymanagementgroup.com/wp-content/uploads/2017/07/Oopsbutton.jpg";
  errorMsg:string;

  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.data.subscribe(
      (data:Data) => {
        this.errorMsg = data['msg'];
      }
    )
  }

}
