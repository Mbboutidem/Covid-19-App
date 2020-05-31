import { Component } from '@angular/core';
import { Covid19Service } from 'src/app/services/covid19-services.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(
    private covid19services: Covid19Service,
  ) 
  {}

}
