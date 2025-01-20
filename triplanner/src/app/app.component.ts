import { Component } from '@angular/core';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  name: string = '';
  type: string = '';
  duration: string = '';

  constructor(public dataService: DataService) { }

  addWorkout(name: string, type: string, duration: string) {
    this.dataService.createRWorkout(this.name, this.type, this.duration);
  }
}
