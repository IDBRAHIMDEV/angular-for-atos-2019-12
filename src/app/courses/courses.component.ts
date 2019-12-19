import { Component } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent {

  toggleDisplay: boolean = false;

  editable: boolean = false;
  myCourse: any = {
    id: 0,
    name: '',
    active: false
  };

  courses: any[] = [
    {id: 1, name: 'Learn Angular', active: false},
    {id: 2, name: 'Learn VueJS', active: false},
    {id: 3, name: 'Learn Spring', active: true},
    {id: 4, name: 'Learn Laravel', active: false}
  ];

  myPicture = "https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:705/https://www.filepicker.io/api/file/Xkl7CSRPTwstEiOYIWsg";

  constructor() { }

  addCourse() {
    //spread operators
    this.courses = [this.myCourse, ...this.courses];
    this.myCourse = '';
  }

  deleteCourse(index) {
    
    Swal.fire({
      title: 'Are you sure?',
      text: 'You will not be able to recover this imaginary file!',
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Delete',
      cancelButtonText: 'Cancel'
    }).then((result) => {
      if (result.value) {

        this.courses.splice(index, 1);

        Swal.fire({
          title: 'Deleted !',
          text: 'This course is deleted !',
          icon: 'success',
          timer: 5000
        })
      // For more information about handling dismissals please visit
      // https://sweetalert2.github.io/#handling-dismissals
      } 
    })
  }

  editCourse(course) {
    this.editable = true;
    this.myCourse = course;
  }

  updateCourse() {
    this.editable = false;
    this.myCourse = {
      id: 0,
      name: '',
      active: false
    }
  }

  changeDisplay() {
    this.toggleDisplay = !this.toggleDisplay
  }

}
