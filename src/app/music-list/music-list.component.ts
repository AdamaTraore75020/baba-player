import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { StorageSelectors } from '../store/selectors/storage.selectors';

@Component({
  selector: 'app-music-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './music-list.component.html',
  styleUrls: ['./music-list.component.css'],
})
export class MusicListComponent implements OnInit {
  files$: Observable<any>;
  constructor(private store: Store) {
    this.files$ = this.store.select(StorageSelectors.getFiles);
  }

  ngOnInit(): void {
    this.files$.subscribe((files) => {
      console.log(files);
    });
  }
}
