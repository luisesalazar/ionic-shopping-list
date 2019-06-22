import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/models/item.model';
import { ShoppingListService } from 'src/app/services/shopping-list.service';
import { Router } from '@angular/router';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-add-shopping-item',
  templateUrl: './add-shopping-item.page.html',
  styleUrls: ['./add-shopping-item.page.scss'],
})
export class AddShoppingItemPage implements OnInit {

  public item: Item = {
    name: '',
    qty: undefined,
    price: undefined
};

  constructor(
    private shopping: ShoppingListService,
    private router: Router,
    private toast: ToastService
  ) { }

  ngOnInit() {
  }

  addItem(item: Item) {
    this.shopping.addItem(item).then(ref => {
      this.toast.show(`${item.name} added!`);
      this.router.navigate(['/home', {key: ref.key}]);
    });
  }

}
