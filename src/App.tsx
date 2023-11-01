import "./App.css";

const App = () => {
  return (
    <>
      <div className="form">
        <span className="input">
          <label className="required">Name</label>
          <input type="text" required />
        </span>
        <button className="submit" data-tooltip="Tooltip">
          Submit form
        </button>
      </div>
      <div className="divs">
        <div className="div1">This is a div</div>
        <div className="div2">This is a second div</div>
        <div className="div3">This is a third div</div>
        <span className="span1">This is a span</span>
        <span className="span2">This is a second span</span>
      </div>
      <div className="flexbox-container">
        <div className="flexbox-item flexbox-item-1"></div>
        <div className="flexbox-item flexbox-item-2"></div>
        <div className="flexbox-item flexbox-item-3"></div>
      </div>
    </>
  );
};

export default App;
