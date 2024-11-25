import {OfferType} from '../enums/offer-type.ts';
import {City} from './city.ts';
import {Location} from './location.ts';

type Offer = {
  title: string;
  isPremium: boolean;
  previewImage: string;
  rating: number;
  type: OfferType;
  id: string;
  price: number;
  location: Location;
  city: City;
  isFavourite: boolean;
}

export default Offer;
