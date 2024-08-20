import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ItemService } from '../../services/item.service';
import { Item } from '../../interfaces/item';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-item-add-form',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './item-add-form.component.html',
  styleUrls: ['./item-add-form.component.css']
})
export class ItemAddFormComponent implements OnInit {
  item: Item = { id: '', name: '', description: '' };
  isEdit = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private itemService: ItemService
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.isEdit = true;
      this.itemService.getItem(id).subscribe((data: Item) => {
        this.item = data;
      });
    }
  }

  onSubmit(): void {
    if (this.isEdit && this.item.id) {
      this.itemService.updateItem(this.item.id, this.item)
        .subscribe(() => {
          this.router.navigate(['/list-item']);
        });
    } else {
      this.itemService.addItem(this.item)
        .subscribe(() => {
          this.router.navigate(['/list-item']);
        });
    }
  }

  deleteItem(): void {
    if (this.isEdit && this.item.id) {
      this.itemService.deleteItem(this.item.id).subscribe(() => {
        this.router.navigate(['/list-item']);
      });
    }
  }
}
