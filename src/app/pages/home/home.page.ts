import { Component, OnInit } from '@angular/core';
import { ShoppingListService } from 'src/app/services/shopping-list.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Item } from 'src/app/models/item.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  public shoppingList$: Observable<Item[]>;

  constructor(private shopping: ShoppingListService) { }

  ngOnInit() {
    this.shoppingList$ = this.shopping
      .getShoppingList()
      .snapshotChanges().pipe(
        map(changes => {
          return changes.map(c => ({
            key: c.payload.key,
            ...c.payload.val() }));
        })
      );
  }
}
