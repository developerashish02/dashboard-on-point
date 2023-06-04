import Table from "./Table";
import Tabs from "../Tabs/Tabs";
import "./Dashboard.css";


const Dashboard = () => {
    // Example data
    const tableData = [
        {
            srNo: 1,
            mobileNumber: "1234567890",
            firstName: "John",
            lastName: "Doe",
            gender: "Male",
            package: "Basic",
        },
        {
            srNo: 2,
            mobileNumber: "12345678a90",
            firstName: "John",
            lastName: "Doe",
            gender: "Male",
            package: "Basic",
        },
        {
            srNo: 3,
            mobileNumber: "12345167890",
            firstName: "John",
            lastName: "Doe",
            gender: "Male",
            package: "Basic",
        },
        // Add more data as needed
    ];

    const tabs = [
        {
            label: "Tab 1",
            content: <div>Content for Tab 1</div>,
        },
        {
            label: "Tab 2",
            content: <div>Content for Tab 2</div>,
        },
        // Add more tabs as needed
    ];
    return (
        <div className="dashboard_container">
            <div className="dashboard_tabs">
                <Tabs tabs={tabs} />
            </div>
            <div className="dashboard_table">
                <Table data={tableData} />
            </div>
        </div>
    );
};

export default Dashboard;
