import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CourseComponent } from '../course/course.component';

import { CoursesComponent } from './courses.component';

describe('CoursesComponent', () => {
  let component: CoursesComponent;
  let fixture: ComponentFixture<CoursesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CoursesComponent, CourseComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(CoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create 3 courses', () => {
    const ourDomCoursesUnderTest = Array.from(
      document.getElementsByTagName('app-course')
    );
    expect(ourDomCoursesUnderTest.length).toBe(3);
  });

  it('should show 3 more courses', () => {
    component.loadMore();
    fixture.detectChanges();
    const ourDomCoursesUnderTest = Array.from(
      document.getElementsByTagName('app-course')
    );
    expect(ourDomCoursesUnderTest.length).toBe(6);
  });

  it('should delete first course', () => {
    const lenghtBefore = component.courses.length;
    component.deleteCourse(1);
    fixture.detectChanges();
    expect(component.courses.length).toBe(lenghtBefore-1);
  });

  it('should filter courses to 1 course', () => {
    component.filter("Video Course 1.Name tag");
    fixture.detectChanges();
    expect(component.filteredShownCourses.length).toBe(1);
  });
  

});
