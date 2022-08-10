import { Component, Input , Output, EventEmitter} from '@angular/core';
import { Course } from 'src/app/models/models';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent {
  @Input() course: Course | null = null;
  @Output() deleteItemEvent = new EventEmitter<number>();

  constructor() { }

  delete(id:number){
    this.deleteItemEvent.emit(id);
  }
}
