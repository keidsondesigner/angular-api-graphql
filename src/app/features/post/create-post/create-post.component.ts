import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-post',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.scss']
})
export class CreatePostComponent {
  post = {
    title: '',
    content: '',
    author: '',
    imageUrl: ''
  };

  isSubmitting = false;

  constructor(private router: Router) {}

  onSubmit() {
    if (this.isValidForm()) {
      this.isSubmitting = true;

      // Simulando envio para API
      setTimeout(() => {
        console.log('Post criado:', this.post);
        this.isSubmitting = false;
        this.router.navigate(['/posts']);
      }, 1500);
    }
  }

  isValidForm(): boolean {
    return !!(this.post.title.trim() && 
              this.post.content.trim() && 
              this.post.author.trim());
  }

  resetForm() {
    this.post = {
      title: '',
      content: '',
      author: '',
      imageUrl: ''
    };
  }
}