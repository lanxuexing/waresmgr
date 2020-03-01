import { Component } from '@angular/core';
import { ScrollableTab, Carousel } from './models';

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

  banners: Carousel[] = [
    {
      imgUrl : "https://images.unsplash.com/photo-1441742917377-57f78ee0e582?h=1024",
      caption : "你那一笑倾国倾城"
    },
    {
      imgUrl : "https://images.unsplash.com/photo-1441716844725-09cedc13a4e7?h=1024')",
      caption : "那里记录了最唯美的爱情故事"
    },
    {
      imgUrl : "https://images.unsplash.com/photo-1441448770220-76743f9e6af6?h=1024')",
      caption : "我怎么是一个剩女"
    },
    {
      imgUrl : "https://images.unsplash.com/photo-1441260038675-7329ab4cc264?h=1024')",
      caption : "生命中最后的四分钟"
    },
    {
      imgUrl : "https://images.unsplash.com/photo-1441126270775-739547c8680c?h=1024')",
      caption : "我们都需要治疗"
    },
    {
      imgUrl : "https://images.unsplash.com/photo-1440964829947-ca3277bd37f8?h=1024')",
      caption : "雨漓漓地下一滴就是一颗心愿"
    },
    {
      imgUrl : "https://images.unsplash.com/photo-1440847899694-90043f91c7f9?h=1024')",
      caption : "想拥有这世界的每缕阳光"
    }
  ];

  onScrollableTabSelectChange(event: any) {
    console.log('菜单点击了...', event);
  }

}
