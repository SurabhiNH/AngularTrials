import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TabsComponent } from "./tabs/tabs.component";

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [RouterOutlet, TabsComponent]
})
export class AppComponent {
  title = 'MyAngularHub';
  timeHoursNow: any = new Date().getHours();
  timeMinutesNow: any = new Date().getMinutes();
  currentDate: any = new Date().toString();
  arrays = [];

  ngOnInit() {
    //Wed,Jun,05,2024,20:32:00,GMT+0530,(India,Standard,Time)
    this.arrays = this.currentDate.split(' ');
    this.currentDate = this.arrays[2] + " " + this.arrays[1]+ " " + this.arrays[3];
  }
}
