import { Routes } from '@angular/router';

import { PostDetailComponent } from './features/post/post-detail/post-detail.component';
import { CreatePostComponent } from './features/post/create-post/create-post.component';
import { PostListComponent } from './features/post/post-list/post-list.component';

export const routes: Routes = [
  { path: '', redirectTo: '/posts', pathMatch: 'full' },
  { path: 'posts', component: PostListComponent },
  { path: 'posts/:id', component: PostDetailComponent },
  { path: 'create', component: CreatePostComponent },
  { path: '**', redirectTo: '/posts' }
];