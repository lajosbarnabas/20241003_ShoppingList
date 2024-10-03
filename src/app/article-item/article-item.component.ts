import { Component, Input, OnInit } from '@angular/core';
import { ArticleModel } from '../models/article.model';

@Component({
  selector: 'app-article-item',
  templateUrl: './article-item.component.html',
  styleUrl: './article-item.component.css',
})
export class ArticleItemComponent implements OnInit {
  @Input() article!: ArticleModel;

  constructor() {}

  ngOnInit(): void {
    // this.article.count = 1;
  }

  increase() {
    this.article.count++;
  }

  decrease() {
    if (this.article.count >= 1) this.article.count--;
  }
}
