import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
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

  onSubmit(postForm: NgForm) { //  NgForm para gerenciar o estado atual e a validação do formulário.
    if (postForm.valid) {
      this.isSubmitting = true;

      // Simulando envio para API
      setTimeout(() => {
        console.log('Post criado:', this.post);
        console.log('Form value:', postForm.value);
        console.log('Form valid:', postForm.valid);
        this.isSubmitting = false;
        this.router.navigate(['/posts']);
      }, 1500);
    }
  }


  resetForm(form?: NgForm) {
    this.post = {
      title: '',
      content: '',
      author: '',
      imageUrl: ''
    };

    // Resetar estado do formulário se fornecido
    if (form) {
      form.resetForm();
    }
  }
}