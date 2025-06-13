import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from '../post-list/post-list.component';
import { RickMortyService } from '../../services/rick-morty.service';

@Component({
  selector: 'app-post-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.scss']
})
export class PostDetailComponent implements OnInit {
  post: Post | null = null;
  loading = true;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private rickMortyService: RickMortyService
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.loadPost(id);
    }
  }

  loadPost(id: string) {
    this.loading = true;
    this.rickMortyService.getCharacter(id).subscribe({
      next: (character) => {
        this.post = character;
        this.loading = false;
        
        if (!this.post) {
          this.router.navigate(['/posts']);
        }
      },
      error: (error) => {
        console.error('Erro ao carregar personagem Rick and Morty:', error);
        this.loading = false;
        this.router.navigate(['/posts']);
      }
    });
  }

  formatDate(date: Date): string {
    return new Intl.DateTimeFormat('pt-BR', {
      day: '2-digit',
      month: 'long',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    }).format(date);
  }

  goBack() {
    this.router.navigate(['/posts']);
  }
}