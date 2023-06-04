/* eslint-disable react/prop-types */
import "./Table.css";
import { useDispatch } from "react-redux";
import { openModal } from "../../features/modal/modalSlice";

const Table = ({ data }) => {
    const dispatch = useDispatch();

    const handleOpenModal = () => {
        dispatch(openModal())
    }

    return (
        <table className="table">
            <thead>
                <tr>
                    <th>Sr No</th>
                    <th>Mobile Number</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Gender</th>
                    <th>Package</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {data?.map((item) => (
                    <tr key={item?._id}>
                        <td>{item?.ratingsAverage}</td>
                        <td>{item?.Odisha.bg}</td>
                        <td>{item?.Odisha.tagLine}</td>
                        <td>{item?.lastName}</td>
                        <td>{item?.gender}</td>
                        <td>{item?.package}</td>
                        <td className="actions">
                            <i className="fa-solid fa-trash"></i>
                            <i className="fa-solid fa-pen-to-square" onClick={handleOpenModal}></i>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default Table;
