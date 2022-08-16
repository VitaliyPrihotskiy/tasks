import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-course',
  templateUrl: './new-course.component.html',
  styleUrls: ['./new-course.component.scss'],
  providers: [FormBuilder],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NewCourseComponent implements OnInit {
  time: string | null = null;
  titleControl = new FormControl('', Validators.required);
  descriptionControl = new FormControl('', Validators.required);
  durationControl = new FormControl('', [Validators.required, Validators.pattern(/[0-9]+]/)]);
  dateControl = new FormControl('', Validators.required);
  authorsControl = new FormControl('', Validators.required);
  course: FormGroup = this._formBuilder.group({
    title: this.titleControl,
    description: this.descriptionControl,
    duration: this.durationControl,
    date: this.dateControl,
    authors: this.authorsControl,
  });

  constructor(private _formBuilder: FormBuilder) { }

  setTime(minutes: string): void {
    let hours = Math.floor(+minutes / 60);
    let rest = +minutes % 60;
    this.time = hours + "h" + rest + "m"
  }

  ngOnInit(): void {

  }

}
