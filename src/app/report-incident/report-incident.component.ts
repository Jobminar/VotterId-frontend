import { Component } from '@angular/core';

@Component({
  selector: 'app-report-incident',
  templateUrl: './report-incident.component.html',
  styleUrl: './report-incident.component.css'
})
export class ReportIncidentComponent {

  formData = { 
    incident: '' ,
    report:'',
    file:''
  };
  submitForm(formData: any) {
    
    this.formData = formData;
    console.log(formData);
  }
}
