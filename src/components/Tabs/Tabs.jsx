/* eslint-disable react/prop-types */
import "./Tabs.css";
import { useState } from "react";


const Tabs = ({ tabs }) => {
    const [activeTab, setActiveTab] = useState(0);

    const handleTabClick = (index) => {
        setActiveTab(index);
    };


    return (
        <div className="tabs">
            <div className="tabs_items">
                {tabs.map((tab, index) => (
                    <div
                        key={index}
                        className={`tab ${index === activeTab ? 'active' : ''} tabs_text`}
                        onClick={() => handleTabClick(index)}
                    >
                        {tab.label}
                    </div>
                ))}
            </div>
            {/* <div className="tab-content">
                {tabs[activeTab].content}
            </div> */}
        </div>
    );
}

export default Tabs;
