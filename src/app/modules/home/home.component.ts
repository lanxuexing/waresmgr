import { Component, OnInit } from '@angular/core';
import { ScrollableTab } from '@models/index';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  scrollableTab: ScrollableTab[] = [
    {
      id: 1,
      title: '热门推荐',
      link: 'hot-rec'
    },
    {
      id: 2,
      title: '手机数码',
      link: 'mobile-digi'
    },
    {
      id: 3,
      title: '家用电器',
      link: 'hh-apls'
    },
    {
      id: 4,
      title: '电脑办公',
      link: 'comp-off'
    },
    {
      id: 5,
      title: '计生情趣',
      link: 'fam-plan'
    },
    {
      id: 6,
      title: '美妆护肤',
      link: 'beauty-skin'
    },
    {
      id: 7,
      title: '个护清洁',
      link: 'personal-care'
    },
    {
      id: 8,
      title: '汽车生活',
      link: 'car-life'
    },
    {
      id: 9,
      title: '兜兜超市',
      link: 'supermarket'
    },
    {
      id: 10,
      title: '男装',
      link: 'men'
    },
    {
      id: 11,
      title: '男鞋',
      link: 'men-shoes'
    },
    {
      id: 12,
      title: '女装',
      link: 'women'
    },
    {
      id: 13,
      title: '女鞋',
      link: 'women-shoes'
    },
    {
      id: 14,
      title: '母婴童装',
      link: 'maternal-child'
    },
    {
      id: 15,
      title: '图书音像',
      link: 'audiovisual-books'
    },
    {
      id: 16,
      title: '运动户外',
      link: 'outdoor-sport'
    },
    {
      id: 17,
      title: '内衣配饰',
      link: 'underwear-acc'
    },
    {
      id: 18,
      title: '食品生鲜',
      link: 'fresh-food'
    },
    {
      id: 19,
      title: '酒水饮料',
      link: 'drinks'
    },
    {
      id: 20,
      title: '家具家装',
      link: 'furniture-home'
    },
    {
      id: 21,
      title: '家居厨房',
      link: 'home-kitchen'
    },
    {
      id: 22,
      title: '箱包手袋',
      link: 'luggage-bags'
    },
    {
      id: 23,
      title: '钟表珠宝',
      link: 'watches-jewellery'
    },
    {
      id: 24,
      title: '玩具乐器',
      link: 'toy-music'
    },
    {
      id: 25,
      title: '医药保健',
      link: 'health-care'
    },
    {
      id: 26,
      title: '宠物生活',
      link: 'pet-life'
    },
    {
      id: 27,
      title: '礼品鲜花',
      link: 'gift-flowers'
    },
    {
      id: 29,
      title: '农资绿植',
      link: 'agricultural-materials'
    },
    {
      id: 30,
      title: '生活旅行',
      link: 'life-travel'
    },
    {
      id: 31,
      title: '奢侈品',
      link: 'luxury'
    },
    {
      id: 32,
      title: '兜兜国际',
      link: 'intl'
    },
    {
      id: 33,
      title: '艺术邮币',
      link: 'art-coin'
    },
    {
      id: 34,
      title: '二手商品',
      link: 'second-hand-product'
    },
    {
      id: 35,
      title: '特产馆',
      link: 'specialty-museum'
    },
    {
      id: 36,
      title: '兜兜金融',
      link: 'financial'
    },
    {
      id: 37,
      title: '国际名牌',
      link: 'intl-brand'
    },
    {
      id: 38,
      title: '拍卖',
      link: 'auction'
    },
    {
      id: 39,
      title: '房产',
      link: 'real-estate'
    },
    {
      id: 40,
      title: '工业品',
      link: 'industrial-products'
    }
  ];

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void { }

  // 滚动菜单点击事件
  onScrollableTabSelectChange(topMenu: ScrollableTab) {
    console.log('菜单点击了...', topMenu);
    this.router.navigate(['home', topMenu.link]);
  }

}
