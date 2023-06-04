/* eslint-disable react/prop-types */
import { getAllTours } from "../../services/toursService";
import Table from "../dashboard/Table";
import "./Tabs.css";
import { useEffect, useState } from "react";

const Tabs = ({ tabs }) => {
    const [activeTab, setActiveTab] = useState(0);
    const [tableData, setTableData] = useState([]);

    const handleTabClick = (index) => {
        setActiveTab(index);
    };

    useEffect(() => {
        if (activeTab === 0) {
            getTours();
        }

    }, [activeTab]);


    const getTours = async () => {
        try {
            const response = await getAllTours();
            const data = await response.data;
            if (data?.status === "success") {
                setTableData(data?.data?.tours)
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="tabs">
            <div className="tabs_items">
                {tabs.map((tab, index) => (
                    <div
                        key={index}
                        className={`tab ${index === activeTab ? "active" : ""} tabs_text`}
                        onClick={() => handleTabClick(index)}
                    >
                        {tab.label}
                    </div>
                ))}
            </div>

            <div className="dashboard_table">
                <Table data={tableData} />
            </div>
        </div>
    );
};

export default Tabs;    
