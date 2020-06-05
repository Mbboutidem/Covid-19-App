import { Component, OnInit } from '@angular/core';
import { Covid19Service } from 'src/app/services/covid19-services.service';

@Component({
  selector: 'app-details-page',
  templateUrl: './details-page.page.html',
  styleUrls: ['./details-page.page.scss'],
})
export class DetailsPagePage implements OnInit {
  data: any;
  country: any;

  constructor(
    private covid19services: Covid19Service,
  ) 
  {
    this.country = this.covid19services.countryData;
   }

  ngOnInit() 
  {
    this.country = this.covid19services.countryData;
    this.data = this.covid19services.countryData;
    console.log(this.data)
  }


}
