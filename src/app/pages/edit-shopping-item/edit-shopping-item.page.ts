import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Item } from 'src/app/models/item.model';
import { ShoppingListService } from 'src/app/services/shopping-list.service';
import { map } from 'rxjs/operators';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-edit-shopping-item',
  templateUrl: './edit-shopping-item.page.html',
  styleUrls: ['./edit-shopping-item.page.scss'],
})
export class EditShoppingItemPage implements OnInit {
  public item: Item;
  constructor(
    private shopping: ShoppingListService,
    private route: ActivatedRoute,
    private router: Router,
    private toast: ToastService
  ) {}

  ngOnInit() {
    this.item = {
      key: this.route.snapshot.paramMap.get('key'),
      name: this.route.snapshot.paramMap.get('name'),
      qty: +this.route.snapshot.paramMap.get('qty'),
      price: +this.route.snapshot.paramMap.get('price')
    };
  }

  saveItem(item: Item) {
    this.shopping.saveItem(item).then(() => {
      this.toast.show(`${item.name} saved!`);
      this.router.navigate(['/home']);
    });
  }

  removeItem(item: Item) {
    this.shopping.removeItem(item).then(() => {
      this.toast.show(`${item.name} deleted!`);
      this.router.navigate(['/home']);
    });
  }

}
