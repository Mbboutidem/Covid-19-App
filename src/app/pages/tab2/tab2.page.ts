import { Component } from '@angular/core';
import { Covid19Service } from 'src/app/services/covid19-services.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  
  countries: any = null;
  searchItem: any;
  constructor(
    private covid19services: Covid19Service,
    private router: Router,
  ) 
  {  
    
    this.getCountryInfo();
  }
  //get country info
  getCountryInfo()
  {
    this.covid19services.getCountyData().subscribe(data => {
      console.log('countries', data);
      this.countries = data;
    });
  }

  //navigate to a new page
  countryInfo(country)
  {
    this.covid19services.countryData = country;
    this.router.navigate(['/details-page']);
    
  }

}
