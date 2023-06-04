
import Tabs from "../Tabs/Tabs";
import "./Dashboard.css";


const Dashboard = () => {
    // Example data

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
        </div>
    );
};

export default Dashboard;
