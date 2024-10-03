"use client";
import Image, { StaticImageData } from "next/image";
import PillButton from "../button/PillButton";

interface ICardProp {
  width?: string;
  backgroundColor: string;
  cycle: StaticImageData;
  typeCycle: string;
  title: string;
  price: string;
  actualPrice: string;
  New: string;
  Sale: string;
}
const Card = ({
  width,
  backgroundColor,
  cycle,
  typeCycle,
  title,
  price,
  actualPrice,
  New,
  Sale,
}: ICardProp) => {
  return (
    <div
      className={`"rounded-sm border hover:bg-sonex-cartBackGround"  ${
        width && width
      } ${backgroundColor}`}
    >
      <div className="px-4 pt-2  py-10">
        <h1 className="font-bold">{title}</h1>
        <span className="text-stone-600 text-sm">{typeCycle}</span>
      </div>
      <Image
        src={cycle}
        alt="card_arival_"
        className=" translate-y-0 hover:-translate-y-1 ease-in-out transition-all duration-700"
      />
      <div className="px-4 pb-2 py-10">
        <span className=" line-through text-sonex-blackBackGroundCol">
          {actualPrice}
        </span>

        <div className="flex justify-between">
          <h2 className="text-bold">{price}</h2>

          <div>
            <PillButton text={New} variant="primary-outline" padding="px-2" />
            <PillButton text={Sale} variant="danger" padding="px-2" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;

const data = [
  {
    id: 1,
    title: "Turbo Como SL 5.0 - Smoke / Transparent",
    type: "Diamond",
    price: "$ 2,349.00 USD",
    actualPrice: "$ 4,250.00 USD",
    new: "New",
    sale: "Sale",
  },
  {
    id: 2,
    title: "Turbo Como SL 5.0 - Smoke / Transparent",
    type: "Diamond",
    price: "$ 2,349.00 USD",
    actualPrice: "$ 4,250.00 USD",
    new: "New",
    sale: "Sale",
  },
  {
    id: 3,
    title: "Turbo Como SL 5.0 - Smoke / Transparent",
    type: "Diamond",
    price: "$ 2,349.00 USD",
    actualPrice: "$ 4,250.00 USD",
    new: "New",
    sale: "Sale",
  },
];
/* 



Turbo Como SL 5.0 - Smoke / Transparent


New
Sale
Jett 20 Single Speed - Gloss Cobalt Blue
Lizard
Jett 20 Single Speed - Gloss Cobalt Blue
$ 425.00 USD
New
Turbo Vado 4.0 - Cast Black
Guff
Turbo Vado 4.0 - Cast Black
$ 4,000.00 USD
$ 2,749.00 USD
New
Sale
S-Works Turbo Levo SL Carbon - Rusted Red / Redwood
Enduro
S-Works Turbo Levo SL Carbon - Rusted Red / Redwood
$ 21,199.00 USD
$ 14,599.00 USD
New
Sale
Crux Expert - Gloss Carbon / Tarmac Black
Steel
Crux Expert - Gloss Carbon / Tarmac Black
$ 7,200.00 USD
$ 4,299.00 USD
New
Sale
Diverge Comp Carbon - Amber Glow / Gloss Metallic
Guff
Diverge Comp Carbon - Amber Glow / Gloss Metallic
$ 4,000.00 USD
New



*/
