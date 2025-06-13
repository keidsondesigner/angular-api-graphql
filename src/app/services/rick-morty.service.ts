import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { Observable, map } from 'rxjs';
import { Post } from '../components/post-list/post-list.component';

@Injectable({
  providedIn: 'root'
})
export class RickMortyService {

  constructor(private apollo: Apollo) { }

  // Query para buscar personagens
  getCharacters(): Observable<Post[]> {
    return this.apollo.query<any>({
      query: gql`
        query {
          characters(page: 1) {
            results {
              id
              name
              status
              species
              type
              gender
              image
              created
              origin {
                name
              }
              location {
                name
              }
            }
          }
        }
      `
    }).pipe(
      map(result => {
        // Mapear os personagens para o formato Post
        return result.data.characters.results.map((character: any) => {
          return {
            id: character.id,
            title: character.name,
            content: `Espécie: ${character.species}\nStatus: ${character.status}\nGênero: ${character.gender}\nOrigem: ${character.origin.name}\nLocalização atual: ${character.location.name}\nTipo: ${character.type || 'Não especificado'}`,
            author: `Rick and Morty Universe`,
            createdAt: new Date(character.created),
            imageUrl: character.image
          };
        });
      })
    );
  }

  // Query para buscar um personagem específico por ID
  getCharacter(id: string): Observable<Post> {
    return this.apollo.query<any>({
      query: gql`
        query GetCharacter($characterId: ID!) {
          character(id: $characterId) {
            id
            name
            status
            species
            type
            gender
            image
            created
            origin {
              name
              type
              dimension
            }
            location {
              name
              type
              dimension
            }
            episode {
              name
              episode
            }
          }
        }
      `,
      variables: {
        characterId: id
      }
    }).pipe(
      map(result => {
        const character = result.data.character;
        
        // Lista de episódios formatada
        const episodes = character.episode.map((ep: any) => 
          `${ep.name} (${ep.episode})`
        ).join('\n• ');
        
        // Mapear o personagem para o formato Post
        return {
          id: character.id,
          title: character.name,
          content: `Espécie: ${character.species}
Status: ${character.status}
Gênero: ${character.gender}
Tipo: ${character.type || 'Não especificado'}

Origem: ${character.origin.name}
Tipo de origem: ${character.origin.type || 'Desconhecido'}
Dimensão de origem: ${character.origin.dimension || 'Desconhecida'}

Localização atual: ${character.location.name}
Tipo de localização: ${character.location.type || 'Desconhecido'}
Dimensão atual: ${character.location.dimension || 'Desconhecida'}

Aparece nos episódios:
• ${episodes}`,
          author: `Rick and Morty Universe`,
          createdAt: new Date(character.created),
          imageUrl: character.image
        };
      })
    );
  }
}
