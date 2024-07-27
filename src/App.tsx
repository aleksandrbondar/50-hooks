import ExampleComponent from "./UseLayoutEffect.tsx";
import Memo from "./Memo.tsx";
import UseMemo from "./UseMemo.tsx";
import UseCallback from "./UseCallback.tsx";

const App = () => {
    return (
      <>
        <div style={{padding: '20px', margin: '20px', backgroundColor: 'rgba(0,0,0,0.3)'}}>
          <h1 style={{textAlign: 'center'}}>Use layout effect</h1>
          <ExampleComponent/>
        </div>
        <div style={{padding: '20px', margin: '20px', backgroundColor: 'rgba(0,0,0,0.3)'}}>
          <h1 style={{textAlign: 'center'}}>Use Callback</h1>
          <UseCallback/>
        </div>
        <div style={{padding: '20px', margin: '20px', backgroundColor: 'rgba(0,0,0,0.3)'}}>
          <h1 style={{textAlign: 'center'}}>Use Memo</h1>
          <UseMemo/>
        </div>
        <div style={{padding: '20px', margin: '20px', backgroundColor: 'rgba(0,0,0,0.3)'}}>
          <h1 style={{textAlign: 'center'}}>React.memo</h1>
          <Memo/>
        </div>

      </>
    );
};

export default App;
