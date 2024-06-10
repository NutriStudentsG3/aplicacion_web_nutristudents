import { Component ,HostListener, ElementRef} from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.css'
})
export class SearchBarComponent {
  searchControl = new FormControl('');
  showDropdown = false;
  items: any[] = [
    { id: 1, name: 'Apple' },
    { id: 2, name: 'Banana' },
    { id: 3, name: 'Cherry' },
    { id: 4, name: 'Date' },
    { id: 5, name: 'Elderberry' }   
  ];
  filteredItems: any[] = [];

  constructor(private hostElement: ElementRef) {
    this.searchControl.valueChanges.subscribe(value => {
      this.filteredItems = this.filterItems(value);
    });
  }

  filterItems(searchTerm: string | null) {
    if (!searchTerm) {
      return [];
    }
    return this.items.filter(item =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }

  clearSearch(){
    this.searchControl.setValue('')

  }

  @HostListener('document:click', ['$event'])
  onClick(event: MouseEvent) {
    if (!this.hostElement.nativeElement.contains(event.target)) {
      this.showDropdown = false;
    }
  }

}