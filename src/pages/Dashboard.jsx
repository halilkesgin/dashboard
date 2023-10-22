import SectionGap from "../components/SectionGap/SectionGap";
import StatsCard from "../components/Card/StatsCard";
import { BsCurrencyBitcoin } from "react-icons/bs";
import { FaEthereum } from "react-icons/fa";
import { SiBinance, SiRipple } from "react-icons/si"
import Test from "../components/Test";

const Dashboard = () => {
    const cryptoItems = [
        {
            title: "BTC",
            percent: "2.25",
            amount: "0.1334",
            price: "1,950.40",
            icon: BsCurrencyBitcoin,
            extra: "bg-amber-400",
            percentColor: "text-amber-400",
        },
        {
            title: "ETH",
            percent: "1.15",
            amount: "0.2134",
            price: "1,100.30",
            icon: FaEthereum,
            extra: "bg-sky-400",
            percentColor: "text-sky-400",
        },
        {
            title: "BNB",
            percent: "4.15",
            amount: "2.2783",
            price: "660.30",
            icon: SiBinance,
            extra: "bg-orange-400",
            percentColor: "text-orange-400",
        },
        {
            title: "XRP",
            percent: "1.15",
            amount: "0.8912",
            price: "1,225.30",
            icon: SiRipple,
            extra: "bg-stone-800",
            percentColor: "text-stone-800",
        },
    ];

    return (
        <>
            <Test />
            
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
                {cryptoItems.map((cryptoItem, index) => (
                    <StatsCard key={index} icon={cryptoItem.icon} title={cryptoItem.title} percent={cryptoItem.percent} amount={cryptoItem.amount} price={cryptoItem.price} extra={cryptoItem.extra} percentColor={cryptoItem.percentColor} />
                ))}
            </div>

            <SectionGap />
        </>
    );
};

export default Dashboard;
