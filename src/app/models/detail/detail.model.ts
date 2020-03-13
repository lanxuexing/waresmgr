import { Goods } from '@models/goods';
import { Carousel } from '@models/carousel';

export interface Detail {
    id: number;
    goods: Goods;
    name: string;
    price: number;
    listPrice: number;
    goodsSpecsImage: Carousel[];
    coupon: string[];
    guarantee: string[];
}
