import { Component } from '@angular/core';
import { Covid19Service } from 'src/app/services/covid19-services.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  update: any = null;

  constructor(
    private covid19services: Covid19Service, 
  ) 
  {
    this.covid19services.getSummaryData().subscribe
    (data => { this.update = data; });
  }
  

}
