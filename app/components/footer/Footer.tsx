"use client";

interface Icommon {
  id: number;
  link: string;
  name: string;
}

interface IlistFooter {
  lists: Icommon[];
  subList?: Icommon[] | undefined | null;
}
interface IcolumnFooter {
  head: IlistFooter;
}
interface IdataFooter {
  id: number;
  column: IcolumnFooter;
}

const data: IdataFooter[] = [
  {
    id: 1,
    column: {
      head: {
        lists: [
          { id: 1, link: "/about", name: "BIKES" },
          { id: 2, link: "/services", name: "GEAR" },
          { id: 3, link: "/blogs", name: "PARTS" },
          { id: 4, link: "/events", name: "BRANDS" },
          { id: 5, link: "/events", name: "OUTLET" },
        ],
        subList: [],
      },
    },
  },
  {
    id: 2,
    column: {
      head: {
        lists: [{ id: 1, link: "/", name: "EXPLORE" }],
        subList: [
          { id: 1, link: "/about", name: "About Us" },
          { id: 2, link: "/services", name: "Services" },
          { id: 3, link: "/blogs", name: "Blogs" },
          { id: 4, link: "/events", name: "Events" },
        ],
      },
    },
  },
  {
    id: 3,
    column: {
      head: {
        lists: [{ id: 1, link: "/", name: "SUPPORT" }],
        subList: [
          { id: 1, link: "/about", name: "FAQs" },
          { id: 2, link: "/services", name: "Orders & Shipping" },
          { id: 3, link: "/blogs", name: "Returns & Refunds" },
          { id: 4, link: "/events", name: "Warranty & Repair" },
          { id: 5, link: "/events", name: "Payments" },
        ],
      },
    },
  },
];
const Footer = () => {
  return (
    <div className="bg-black text-white">
      <div className="grid grid-cols-4 gap-1 ">
        {data?.map((footer) => (
          <div key={footer.id} className="border border-white">
            <h1 className="text-2xl font-bold">{footer.column.head}</h1>
            {footer.column.lists?.map((path) => (
              <div key={path.id}>
                <h1 className="text-xl ">{path.name}</h1>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Footer;
