import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { timeInterval } from 'rxjs';
import { getCourses } from 'src/app/constants/courses-list';
import { Course } from 'src/app/models/models';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CoursesComponent implements OnInit {
  courses: Course[] = [];
  filteredCourses: Course[] = [];
  count = 3;
  filteredShownCourses: Course[] = [];
  constructor() { }

  ngOnInit(): void {
    this.courses = getCourses(10)
    this.refresh()
  }
  filter(input: string): void {
    let itemList = this.courses.slice();
    input = input.toLowerCase();
    let twoMatches = itemList.filter(e => e.header.toLowerCase().includes(input) && e.description.toLowerCase().includes(input));
    let titleMatches = itemList.filter(e => e.header.toLowerCase().includes(input) && !twoMatches.includes(e));
    let summaryMatches = itemList.filter(e => e.description.toLowerCase().includes(input) && !twoMatches.includes(e))
    this.filteredCourses = [...twoMatches, ...titleMatches, ...summaryMatches];
  }

  loadMore(): void {
    this.count += 3;
    this.refresh();
  }

  addCourse(): void {
    //go to new course 
    //push new course
    console.log("Course added")
  }

  refresh(): void {
    this.filteredCourses = this.courses;
    this.filteredShownCourses = this.filteredCourses.slice().splice(0, this.count);
  }

  deleteCourse(id: number): void {
    let course = this.courses.find(item => item.id == id);
    if (course) {
      this.courses.splice(this.courses.indexOf(course), 1);
    }
    this.refresh()
  }
}
