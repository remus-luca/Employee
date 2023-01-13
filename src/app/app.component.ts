import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, AfterViewInit {
  ngOnInit(): void {}
  title = 'Employee';
  @ViewChild('tempButton') buttontemp: any;

  educationOptions = [
    '10th pass',
    'diploma',
    'graduate',
    'post graduate',
    'PhD',
  ];

  ngAfterViewInit(): void {
    this.buttontemp.nativeElement.click();
  }
}
