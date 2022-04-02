import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar} from '@angular/material/snack-bar';
import { catchError, EMPTY, map, Observable } from 'rxjs';
import { Product } from './product.model';

@Injectable({
  providedIn: 'root'
})

export class ProductService {

   baseUrl = "http://localhost:3001/products"
  
   constructor(
      private snackBar: MatSnackBar,
      private http: HttpClient
  ) { }

  showMessage(msg: string, isError: boolean=false): void{
    this.snackBar.open(msg, 'Close', { 
      duration: 5000,
      horizontalPosition: "center",
      verticalPosition:"top",
      panelClass: isError? ['msg-error']: ['msg-success'],
    });
  }

  //Função para criar novo produto
    create(product: Product): Observable<Product>{
      return this.http.post<Product>(this.baseUrl, product).pipe(
        map(obj => obj),
        catchError(e=>this.errorHandler(e))
      );
    }

      //Função para ler os produtos
    read():Observable<Product[]>{
      return this.http.get<Product[]>(this.baseUrl).pipe(
        map(obj => obj),
        catchError(e=>this.errorHandler(e))
      );
   }

     //Função para buscar id de um unico produto
    readById(id: number): Observable<Product>{
      const url =`${this.baseUrl}/${id}`
      return this.http.get<Product>(url).pipe(
        map(obj => obj),
        catchError(e=>this.errorHandler(e))
      );
    }

    //  Função para atualizar novo produto
    update(product: Product): Observable<Product>{
      const url =`${this.baseUrl}/${product.id}`
      return this.http.put<Product>(url, product).pipe(
        map(obj => obj),
        catchError(e=>this.errorHandler(e))
      );
    }

    //Função para excluir um produto
    delete(id: number): Observable<Product>{
      const url =`${this.baseUrl}/${id}`
      return this.http.delete<Product>(url).pipe(
        map(obj => obj),
        catchError(e=>this.errorHandler(e))
      );
    }

    // função utilizada para tratar os erros de acesso ao servidor com ....pipe( map(obj => obj),  catchError(e=>this.errorHandler(e))
    errorHandler(e: any): Observable<any> {
      this.showMessage( "Ocorrencia de erro!", true);
      return EMPTY
    }

  }