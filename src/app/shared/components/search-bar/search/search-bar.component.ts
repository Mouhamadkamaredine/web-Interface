import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent {

  @Input() placeholder: string = 'Search...';
  @Output() search = new EventEmitter<string>();
  @Input() searchInput: string = '';

  onSearchChange() {
    this.search.emit(this.searchInput);
  }

}
