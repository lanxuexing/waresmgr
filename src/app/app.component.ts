import { Component } from '@angular/core';
import { ScrollableTab, Carousel } from './models';
import { Confirm } from '@decorators/confirm';

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
      // tslint:disable-next-line:max-line-length
      imgUrl : 'https://m.360buyimg.com/mobilecms/s700x280_jfs/t1/100563/23/13332/81509/5e58ec6cEd3575a24/475d405d5a7e765b.jpg!cr_1125x445_0_171!q70.jpg',
      caption : '女神爆品清单'
    },
    {
      // tslint:disable-next-line:max-line-length
      imgUrl : 'https://m.360buyimg.com/mobilecms/s700x280_jfs/t1/103102/30/13113/136841/5e561432E6ecda47c/f93fab80bccb1a01.jpg!cr_1125x445_0_171!q70.jpg',
      caption : '科学防脱，熬夜不脱发'
    },
    {
      // tslint:disable-next-line:max-line-length
      imgUrl : 'https://m.360buyimg.com/mobilecms/s700x280_jfs/t1/92879/2/13685/128557/5e5a1932E2990f3c1/6b4d6a8083f87fcc.jpg!cr_1125x445_0_171!q70.jpg',
      caption : '雅思兰黛海外'
    },
    {
      // tslint:disable-next-line:max-line-length
      imgUrl : 'https://m.360buyimg.com/mobilecms/s700x280_jfs/t1/95014/10/11781/81228/5e3bb21aE7fbb83b8/dc00b537e9c11dd1.jpg!cr_1125x445_0_171!q70.jpg',
      caption : '天然翡翠'
    },
    {
      // tslint:disable-next-line:max-line-length
      imgUrl : 'https://imgcps.jd.com/ling4/65788105779/5a6J5YWo56ys5LiA/54m55q6K5pe25pyf5L-d5oqk5aW96Ieq5bex/p-5d91a4f642dd5b7c7d52cbe1/288b807a/cr/s1125x690/q70.jpg',
      caption : '安全防护，保护自己'
    },
    {
      // tslint:disable-next-line:max-line-length
      imgUrl : 'https://m.360buyimg.com/mobilecms/s700x280_jfs/t1/103607/38/13259/157756/5e5628fbE2137b5ca/30aee4d8fc38790a.jpg!cr_1125x445_0_171!q70.jpg',
      caption : '女神心选礼'
    },
    {
      // tslint:disable-next-line:max-line-length
      imgUrl : 'https://m.360buyimg.com/mobilecms/s700x280_jfs/t1/95842/38/12546/80187/5e4ba3e7E09e0da3b/92aac67aefdf6b6f.jpg!cr_1125x445_0_171!q70.jpg',
      caption : '大牌空调聚惠'
    },
    {
      // tslint:disable-next-line:max-line-length
      imgUrl : 'https://m.360buyimg.com/mobilecms/s700x280_jfs/t1/94711/36/13532/88700/5e5a126aE07ebc5ed/4ba19b99333cb6ce.jpg!cr_1125x445_0_171!q70.jpg',
      caption : '冰洗宠你，礼物拿去'
    }
  ];

  @Confirm('确定要打印信息吗？')
  onScrollableTabSelectChange(event: any) {
    console.log('菜单点击了...', event);
  }

}
