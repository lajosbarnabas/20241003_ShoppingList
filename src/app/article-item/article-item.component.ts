import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ArticleModel } from '../models/article.model';

@Component({
  selector: 'app-article-item',
  templateUrl: './article-item.component.html',
  styleUrl: './article-item.component.css',
})
export class ArticleItemComponent implements OnInit {
  @Input() article!: ArticleModel;
  @Output() articleDeleted = new EventEmitter<number>();

  constructor() {}

  ngOnInit(): void {
    // this.article.count = 1;
  }

  increase() {
    this.article.count++;
  }

  decrease() {
    this.article.count--;
    if(this.article.count == 0){
      this.articleDeleted.emit(this.article.id);
    }
  }
}
