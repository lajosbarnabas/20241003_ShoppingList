import { Component, OnInit } from '@angular/core';
import { ArticleModel } from '../models/article.model';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrl: './article-list.component.css',
})
export class ArticleListComponent implements OnInit{
  itemsInStorage: ArticleModel[] = [];
  itemsInCart: ArticleModel[] = [];

  addItem(article: ArticleModel){
    article.count++;
    if (!this.itemsInCart.includes(article)){
      this.itemsInCart.push(article);
    }
  }

  deleteItem(id: number){
    this.itemsInCart = this.itemsInCart.filter(item => item.id !== id)
  }

  ngOnInit(): void {
    this.itemsInStorage = [
      {
        id: 1,
        name: 'Citromlé',
        image_url: '/images/citromle.png',
        count: 0,
      },
      {
        id: 2,
        name: 'Fagyasztott pizza',
        image_url: '/images/fagyasztottpizza.png',
        count: 0,
      },
      {
        id: 3,
        name: 'Jeges kávé',
        image_url: '/images/jegeskave.png',
        count: 0,
      },
      {
        id: 4,
        name: 'Kenyér',
        image_url: '/images/kenyer.png',
        count: 0,
      },
      {
        id: 5,
        name: 'Kolbász',
        image_url: '/images/kolbasz.png',
        count: 0,
      },
      {
        id: 6,
        name: 'Liszt',
        image_url: '/images/liszt.png',
        count: 0,
      },
      {
        id: 7,
        name: 'Olaj',
        image_url: '/images/olaj.png',
        count: 0,
      },
      {
        id: 8,
        name: 'Sonka',
        image_url: '/images/sonka.png',
        count: 0,
      },
      {
        id: 9,
        name: 'Sör',
        image_url: '/images/sor.png',
        count: 0,
      },
      {
        id: 10,
        name: 'Szalámi',
        image_url: '/images/szalami.png',
        count: 0,
      },
      {
        id: 11,
        name: 'Tej',
        image_url: '/images/tej.png',
        count: 0,
      },
      {
        id: 12,
        name: 'Tészta',
        image_url: '/images/teszta.png',
        count: 0,
      },
      {
        id: 13,
        name: 'Tojás',
        image_url: '/images/tojas.png',
        count: 0,
      },
      {
        id: 14,
        name: 'Virsli',
        image_url: '/images/virsli.png',
        count: 0,
      },
      {
        id: 15,
        name: 'Vodka',
        image_url: '/images/vodka.png',
        count: 0,
      },
      {
        id: 16,
        name: 'WC papír',
        image_url: '/images/wcpapir.png',
        count: 0,
      },
    ];
  }
}
