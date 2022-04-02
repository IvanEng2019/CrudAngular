import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Product } from '../product.model';
import { ProductService } from '../product.service';
import { Action } from 'rxjs/internal/scheduler/Action';

@Component({
  selector: 'app-productt-delete',
  templateUrl: './productt-delete.component.html',
  styleUrls: ['./productt-delete.component.css']
})
export class ProducttDeleteComponent implements OnInit {

  product!: Product;
  
  constructor(
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute

  ) { }
  
  ngOnInit(): void {
    //const ID= +this.route.snapshot.paramMap.get['id'];
    const ID= this.route.snapshot.params['id'];
    this.productService.readById(parseInt(ID)).subscribe(product =>{
         this.product = product
    })
  }

  deleteProduct():  void{
      this.productService.delete(this.product.id).subscribe(()=>{
          this.productService.showMessage('Produto excluido!');
          this.router.navigate(['/products'])
      })
  }

  cancel() {
     this.router.navigate(['/products'])
  }
}
