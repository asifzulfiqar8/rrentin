import { insightCardsData } from '@/data/data';
import Image from 'next/image';

const TopCards = ({ data }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-5 xl:grid-cols-5 gap-4 md:gap-6 mt-4">
      {data.map((card, i) => (
        <Card key={i} card={card} />
      ))}
    </div>
  );
};
export default TopCards;

const Card = ({ card }) => {
  return (
    <div className="bg-white rounded-lg p-4" style={{ boxShadow: '0px 2px 12px 0px #3582E71A' }}>
      <div className="flex items-center gap-3">
        <Image src={card.img} width={30} height={30} alt="image" />
        <h6 className="text-sm font-medium text-textColor">{card.title}</h6>
      </div>
      <div className="mt-6">
        <div className="flex items-end  gap-2">
          <div className="flex items-center gap-2">
            <h4 className="text-lg md:text-2xl text-textColor font-medium">{card.value}</h4>
            <div className="bg-[#EEFFF2] flex items-center justify-center w-8 h-4">
              <span className="text-[#39DA4C] text-[10px] font-bold">{card.percentage}</span>
            </div>
          </div>
        </div>
        <p
          className="mt-2 text-[#969696] text-xs"
          dangerouslySetInnerHTML={{ __html: card.para }}
        ></p>
      </div>
    </div>
  );
};
