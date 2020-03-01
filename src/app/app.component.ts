import { Component } from '@angular/core';
import { ScrollableTab } from './models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  scrollableTab: ScrollableTab[] = [
    {
      title: '热门',
      link: ''
    },
    {
      title: '男装',
      link: ''
    },
    {
      title: '女装',
      link: ''
    },
    {
      title: '上衣',
      link: ''
    },
    {
      title: '鞋子',
      link: ''
    },
    {
      title: '裤子',
      link: ''
    },
    {
      title: '帽子',
      link: ''
    },
    {
      title: 'T恤',
      link: ''
    },
    {
      title: '衬衣',
      link: ''
    },
    {
      title: '男鞋',
      link: ''
    },
    {
      title: '女鞋',
      link: ''
    },
    {
      title: '羽绒服',
      link: ''
    },
    {
      title: '内衣',
      link: ''
    }
  ];

  onScrollableTabSelectChange(event: any) {
    console.log('菜单点击了...', event);
  }

}
