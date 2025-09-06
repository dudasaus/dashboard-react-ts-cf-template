import { useState } from "react";
import "./App.css";
import {
  Panel,
  PanelGroup,
  PanelResizeHandle,
} from "./components/resizablepanels/ResizablePanels";

function App() {
  const [status, setStatus] = useState("");

  async function checkStatus() {
    const response = await fetch("/api/status/");
    const result = await response.json();
    setStatus(JSON.stringify(result, undefined, 2));
  }

  return (
    <>
      <div className="app">
        <header className="header">
          <strong>My Application</strong> - Fixed Header
        </header>
        <PanelGroup direction="horizontal">
          <Panel defaultSize={20}>Browser</Panel>
          <PanelResizeHandle />
          <Panel defaultSize={60}>
            <PanelGroup direction="vertical">
              <Panel defaultSize={80}>
                <h2>App</h2>
                <button onClick={checkStatus}>Check status</button>
                <pre>{status}</pre>
              </Panel>
              <PanelResizeHandle />
              <Panel defaultSize={20}>Terminal</Panel>
            </PanelGroup>
          </Panel>
          <PanelResizeHandle />
          <Panel defaultSize={20}>Documentation</Panel>
        </PanelGroup>
      </div>
    </>
  );
}

export default App;
