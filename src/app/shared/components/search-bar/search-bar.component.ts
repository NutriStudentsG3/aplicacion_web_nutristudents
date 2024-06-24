import { Component ,HostListener, ElementRef} from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { FoodService } from '../../../plans/services/food.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.css'
})
export class SearchBarComponent {
  searchControl = new FormControl('');
  showDropdown = false;
  filteredItems: any[] = [];

  constructor(private hostElement: ElementRef, private foodService: FoodService) {
    this.searchControl.valueChanges.subscribe(value => {
      this.filteredItems = this.filterItems(value);
    });

  }

  filterItems(searchTerm: string | null) {
    if (!searchTerm) {
      return [];
    }
    return this.foodService.filterItems(searchTerm);
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