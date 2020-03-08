import { Injectable } from '@angular/core';
import { Carousel } from '@models/carousel';
import { HorizontalGrid } from '@models/horizontal-grid';
import { ScrollableTab } from '@models/scrollable-tab';

@Injectable()
export class HomeService {
    private scrollableTab: ScrollableTab[] = [
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
    private banners: Carousel[] = [
        {
            // tslint:disable-next-line:max-line-length
            imgUrl: 'https://m.360buyimg.com/mobilecms/s700x280_jfs/t1/100563/23/13332/81509/5e58ec6cEd3575a24/475d405d5a7e765b.jpg!cr_1125x445_0_171!q70.jpg',
            caption: '女神爆品清单'
        },
        {
            // tslint:disable-next-line:max-line-length
            imgUrl: 'https://m.360buyimg.com/mobilecms/s700x280_jfs/t1/103102/30/13113/136841/5e561432E6ecda47c/f93fab80bccb1a01.jpg!cr_1125x445_0_171!q70.jpg',
            caption: '科学防脱，熬夜不脱发'
        },
        {
            // tslint:disable-next-line:max-line-length
            imgUrl: 'https://m.360buyimg.com/mobilecms/s700x280_jfs/t1/92879/2/13685/128557/5e5a1932E2990f3c1/6b4d6a8083f87fcc.jpg!cr_1125x445_0_171!q70.jpg',
            caption: '雅思兰黛海外'
        },
        {
            // tslint:disable-next-line:max-line-length
            imgUrl: 'https://m.360buyimg.com/mobilecms/s700x280_jfs/t1/95014/10/11781/81228/5e3bb21aE7fbb83b8/dc00b537e9c11dd1.jpg!cr_1125x445_0_171!q70.jpg',
            caption: '天然翡翠'
        },
        {
            // tslint:disable-next-line:max-line-length
            imgUrl: 'https://imgcps.jd.com/ling4/65788105779/5a6J5YWo56ys5LiA/54m55q6K5pe25pyf5L-d5oqk5aW96Ieq5bex/p-5d91a4f642dd5b7c7d52cbe1/288b807a/cr/s1125x690/q70.jpg',
            caption: '安全防护，保护自己'
        },
        {
            // tslint:disable-next-line:max-line-length
            imgUrl: 'https://m.360buyimg.com/mobilecms/s700x280_jfs/t1/103607/38/13259/157756/5e5628fbE2137b5ca/30aee4d8fc38790a.jpg!cr_1125x445_0_171!q70.jpg',
            caption: '女神心选礼'
        },
        {
            // tslint:disable-next-line:max-line-length
            imgUrl: 'https://m.360buyimg.com/mobilecms/s700x280_jfs/t1/95842/38/12546/80187/5e4ba3e7E09e0da3b/92aac67aefdf6b6f.jpg!cr_1125x445_0_171!q70.jpg',
            caption: '大牌空调聚惠'
        },
        {
            // tslint:disable-next-line:max-line-length
            imgUrl: 'https://m.360buyimg.com/mobilecms/s700x280_jfs/t1/94711/36/13532/88700/5e5a126aE07ebc5ed/4ba19b99333cb6ce.jpg!cr_1125x445_0_171!q70.jpg',
            caption: '冰洗宠你，礼物拿去'
        }
    ];
    private channels: HorizontalGrid[] = [
        {
            id: '1',
            icon: 'https://m.360buyimg.com/mobilecms/s120x120_jfs/t1/20983/16/10753/6124/5c8a16aaE5d6b15d7/01e0e818a7505267.png',
            title: '兜兜超市',
            link: 'Supermarket'
        },
        {
            id: '2',
            icon: 'https://m.360buyimg.com/mobilecms/s120x120_jfs/t1/39401/17/2391/5859/5cc06fcfE2ad40668/28cda0a571b4a576.png',
            title: '数码电器',
            link: 'Digital appliance'
        },
        {
            id: '3',
            icon: 'https://m.360buyimg.com/mobilecms/s120x120_jfs/t1/17169/3/4127/4611/5c2f35cfEd87b0dd5/65c0cdc1362635fc.png',
            title: '兜兜服饰',
            link: 'Clothes Accessories'
        },
        {
            id: '4',
            icon: 'https://m.360buyimg.com/mobilecms/s120x120_jfs/t17725/156/1767366877/17404/f45d418b/5ad87bf0N66c5db7c.png',
            title: '兜兜生鲜',
            link: 'fresh'
        },
        {
            id: '5',
            icon: 'https://m.360buyimg.com/mobilecms/s120x120_jfs/t16990/157/2001547525/17770/a7b93378/5ae01befN2494769f.png',
            title: '兜兜到家',
            link: 'Get home'
        },
        {
            id: '6',
            icon: 'https://m.360buyimg.com/mobilecms/s120x120_jfs/t18454/342/2607665324/6406/273daced/5b03b74eN3541598d.png',
            title: '充值缴费',
            link: 'Repaid payment'
        },
        {
            id: '7',
            icon: 'https://m.360buyimg.com/mobilecms/s120x120_jfs/t22228/270/207441984/11564/88140ab7/5b03fae3N67f78fe3.png',
            title: '9.9元拼',
            link: 'Spell purchase'
        },
        {
            id: '8',
            icon: 'https://m.360buyimg.com/mobilecms/s120x120_jfs/t1/7068/29/8987/5605/5c120da2Ecae1cc3a/016033c7ef3e0c6c.png',
            title: '领券',
            link: 'Coupon'
        },
        {
            id: '9',
            icon: 'https://m.360buyimg.com/mobilecms/s120x120_jfs/t17116/175/2673385904/6610/50f5ef50/5b03b7aeNf3a7fa37.png',
            title: '借钱',
            link: 'Borrow money'
        },
        {
            id: '10',
            icon: 'https://m.360buyimg.com/mobilecms/s120x120_jfs/t1/22262/9/1470/4527/5c120cd0E5d3c6c66/4792ec307a853e9f.png',
            title: 'PLUS会员',
            link: 'Plus Member'
        },
        {
            id: '11',
            icon: 'https://m.360buyimg.com/mobilecms/s120x120_jfs/t1/89640/36/2804/8167/5dd6aca9E4b04fedd/fbc6adc345138b30.png',
            title: '兜兜国际',
            link: 'International'
        },
        {
            id: '12',
            icon: 'https://m.360buyimg.com/mobilecms/s120x120_jfs/t1/32245/22/2820/6521/5c6df9b3E1466dcd3/9f4cd68276f4e971.png',
            title: '兜兜拍卖',
            link: 'Auction'
        },
        {
            id: '13',
            icon: 'https://m.360buyimg.com/mobilecms/s120x120_jfs/t1/25651/12/1391/4836/5c120c34Eb93a70fa/3a1735f6a79d0721.png',
            title: '唯品会',
            link: 'Vip Shop'
        },
        {
            id: '14',
            icon: 'https://m.360buyimg.com/mobilecms/s120x120_jfs/t28723/45/1332082024/6421/ead422d3/5cdd0be3Nfce1ba98.jpg',
            title: '玩3C',
            link: 'Play 3C'
        },
        {
            id: '15',
            icon: 'https://m.360buyimg.com/mobilecms/s120x120_jfs/t1/19699/10/1440/6755/5c120ca6Eaa521f62/f9d57f39e55c7321.png',
            title: '沃尔玛',
            link: 'Wal-Mart'
        },
        {
            id: '16',
            icon: 'https://m.360buyimg.com/mobilecms/s120x120_jfs/t1/19745/21/1415/4886/5c120cbbEe58af0bf/4d19bf58d42fc9c4.png',
            title: '美妆馆',
            link: 'Beauty shop'
        },
        {
            id: '17',
            icon: 'https://m.360buyimg.com/mobilecms/s120x120_jfs/t1/27748/22/1419/4913/5c120d0eEa52ea62f/3c2b78a40edc97b2.png',
            title: '兜兜旅行',
            link: 'Travel'
        },
        {
            id: '18',
            icon: 'https://m.360buyimg.com/mobilecms/s120x120_jfs/t1/14996/29/2195/11094/5c1afdb7Ee54cf069/d6ab6a0f64fee068.png',
            title: '拍拍二手',
            link: 'Patting second-hand'
        },
        {
            id: '19',
            icon: 'https://m.360buyimg.com/mobilecms/s120x120_jfs/t5842/205/151189300/13247/a6de2d/591d94edNc42fb94d.png',
            title: '物流查询',
            link: 'Logistics query'
        },
        {
            id: '20',
            icon: 'https://m.360buyimg.com/mobilecms/s120x120_jfs/t1/28873/5/1455/6885/5c120bb9Eb6610bee/29d349f92aeb6eaf.png',
            title: '全部',
            link: 'All'
        }
    ];

    // 获取顶部ScrollTabs数据
    getScrollTabData(): ScrollableTab[] {
        return this.scrollableTab;
    }

    // 获取轮播图数据
    getBannerData(): Carousel[] {
        return this.banners;
    }

    // 获取分类数据
    getHorizontalGridData(): HorizontalGrid[] {
        return this.channels;
    }


}