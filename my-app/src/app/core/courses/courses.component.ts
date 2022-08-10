import { Component, OnInit } from '@angular/core';
import { timeInterval } from 'rxjs';
import { Course } from 'src/app/models/models';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {
  courses: Course[] = [];
  filteredCourses: Course[] = [];
  count = 3;
  filteredShownCourses: Course[] = [];
  constructor() { }

  ngOnInit(): void {
    for (let i = 1; i < 6; i++) {
      console.log(i, this.courses)
      this.courses.push({
        header: "Video Course " + i + ".Name tag",
        time: "1h " + Math.floor(Math.random() * i) + "m",
        date: new Date,
        description: "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?",
        id: i
      }
      )
    }
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

  loadMore() {
    this.count += 3;
    this.refresh();
  }

  addCourse() {
    //go to new course 
    //push new course
    console.log("Course added")
  }

  refresh() {
    this.filteredCourses = this.courses;
    this.filteredShownCourses = this.filteredCourses.slice().splice(0, this.count); 
  }

  deleteCourse(id: number) {
    let course = this.courses.find(item => item.id == id);
    if (course) {
      this.courses.splice(this.courses.indexOf(course), 1);
    }
    this.refresh()
  }
}
