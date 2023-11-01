import "./App.css";

const App = () => {
  return (
    <div className="form">
      <span className="input">
        <label className="required">Name</label>
        <input type="text" required />
      </span>
      <button data-tooltip="Tooltip">Submit form</button>
    </div>
  );
};

export default App;
