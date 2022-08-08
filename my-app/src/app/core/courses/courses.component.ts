import { Component, OnInit } from '@angular/core';
import { Course } from 'src/app/models/models';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {
  courses: Course[] = [];
  filteredCourses = this.courses;
  count = 3;
  filteredShownCourses = this.filteredCourses.slice(this.filteredCourses.length - this.count);
  constructor() { }

  ngOnInit(): void {
  }
  filter(input: string): void {
    let itemList = this.courses.slice();
    input = input.toLowerCase();
    let twoMatches = itemList.filter(e => e.header.toLowerCase().includes(input) && e.description.toLowerCase().includes(input));
    let titleMatches = itemList.filter(e => e.header.toLowerCase().includes(input) && !twoMatches.includes(e));
    let summaryMatches = itemList.filter(e => e.description.toLowerCase().includes(input) && !twoMatches.includes(e))
    this.filteredCourses = [...twoMatches, ...titleMatches, ...summaryMatches];
  }

  loadMore() { this.count += 3 }

  addCourse() {
    //go to new course 
    //push new course
  }
}
