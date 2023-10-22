import { useState } from "react";
import PropTypes from 'prop-types';

const Dropdown = ({ children, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
        <div className="relative inline-block text-left">
            <div>
                <div
                    className="inline-flex justify-center transition grayscale hover:grayscale-0 hover:bg-sky-100 text-xl font-medium rounded-xl p-3 cursor-pointer"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {children}
                </div>
            </div>
            {isOpen && (
                <div className="origin-top-right absolute right-0 mt-2">
                    <div className="flex rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <div className="px-1 py-1">
                            {content}
                        </div>
                    </div>
                </div>

            )}
        </div>
  );
};

Dropdown.propTypes = {
    children: PropTypes.node.isRequired,
    content: PropTypes.node,
};

Dropdown.defaultProps = {
    content: null,
};

export default Dropdown;
