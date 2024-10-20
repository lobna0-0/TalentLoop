import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-post-a-jop',
  templateUrl: './post-a-jop.component.html',
  styleUrls: ['./post-a-jop.component.css']
})


export class PostAJopComponent {
  jobPostForm!: FormGroup;
  jobTypes: string[] = ['Full Time', 'Part Time', 'Freelance', 'Internship', 'Temporary'];

  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  createForm() {
    this.jobPostForm = this.fb.group({
      priceOption1: [false],
      priceOption2: [false],
      jobTitle: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(100)]],
      companyName: ['', Validators.required],
      jobType: ['', Validators.required],
      location: ['', Validators.required],
      jobDescription: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.jobPostForm.invalid) {
      this.jobPostForm.markAllAsTouched();
    } else {
      console.log('Form Submitted:', this.jobPostForm.value);
      alert('Post Created Successfully');
    }
  }

  isFieldInvalid(fieldName: string): boolean {
    const control = this.jobPostForm.get(fieldName);
    return !!control && control.invalid && control.touched;
  }

}
