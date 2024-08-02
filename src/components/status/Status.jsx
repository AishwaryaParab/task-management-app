import "./Status.css";

const Status = ({ status }) => {
  let legendColor = status === 'In Progress' ? "#FFB03C" : (status === 'Pending' ? "#D0D0D0" : "#368A04");
  return (
    <div className="status">
        <div style={{
            backgroundColor: legendColor,
            borderRadius: "50%",
            width: "10px",
            height: "10px"
        }}></div>
        <p>{status}</p>
    </div>
  )
}

export default Status