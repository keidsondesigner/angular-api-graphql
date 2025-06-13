import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostCardComponent } from '../post-card/post-card.component';
import { RickMortyService } from '../services/rick-morty.service';


export interface Post {
  id: string;
  title: string;
  content: string;
  author: string;
  createdAt: Date;
  imageUrl?: string;
}

@Component({
  selector: 'app-post-list',
  standalone: true,
  imports: [CommonModule, PostCardComponent],
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {
  posts: Post[] = [];
  loading = true;

  constructor(private rickMortyService: RickMortyService) {}

  ngOnInit() {
    this.loadPosts();
  }

  loadPosts() {
    this.loading = true;
    this.rickMortyService.getCharacters().subscribe({
      next: (characters) => {
        this.posts = characters;
        this.loading = false;
      },
      error: (error) => {
        console.error('Erro ao carregar personagens Rick and Morty:', error);
        this.loading = false;
      }
    });
  }
}