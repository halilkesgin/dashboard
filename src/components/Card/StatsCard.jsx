import PropTypes from 'prop-types';
import { HiArrowTrendingUp } from "react-icons/hi2";
import {FaUser} from "react-icons/fa";

const StatsCard = ({ icon: Icon, title, percent, amount, price, extra, percentColor }) => {
    return (
        <>
            <div className="flex flex-col gap-5 rounded-2xl bg-white text-gray-700 dark:bg-purple-600 p-5">
                <div className="flex justify-between gap-5">
                    <div className="flex justify-between gap-5">
                        <div className={`p-3 bg-orange-400 rounded-xl text-white ${extra}`}>
                            <Icon className="text-2xl" />
                        </div>
                        <div className="self-center font-bold">
                            {title}
                        </div>
                    </div>
                    <div className={`flex justify-between self-center text-orange-400 gap-2 ${percentColor}`}>
                        <HiArrowTrendingUp className="text-2xl" />
                        <div className="text-[0.9rem]">+ {percent}%</div>
                    </div>
                </div>
                <div className="flex justify-between gap-5">
                    <div className="text-2xl font-medium">{amount}</div>
                    <div className="font-medium text-[0.9rem]">${price}</div>
                </div>
            </div>
        </>
    )
}

StatsCard.propTypes = {
    title: PropTypes.string,
    percent: PropTypes.string,
    amount: PropTypes.string,
    price: PropTypes.string,
    icon: PropTypes.string,
    extra: PropTypes.string,
    percentColor: PropTypes.string
};

StatsCard.defaultProps = {
    title: 'Text',
    percent: '2.30',
    amount: '0.1234',
    price: '2.100.00',
    icon: <FaUser />,
    extra: 'bg-orange-400',
    percentColor: 'text-orange-400'
}

export default StatsCard;