import PropTypes from 'prop-types';
const IconButton = ({ icon: Icon, extra }) => {
    return (
        <button className={`inline-flex items-center p-3 hover:bg-sky-100 hover:text-sky-800 text-gray-500 text-sm font-medium rounded-xl ${extra}`}>
            <Icon />
        </button>
    );
};

IconButton.propTypes = {
    extra: PropTypes.string,
    icon: PropTypes.elementType.isRequired,
};

IconButton.defaultProps = {
    extra: 'text-gray-500',
};

export default IconButton;
