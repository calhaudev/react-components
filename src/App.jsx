import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Tabs } from './components/Tabs'

function App() {
  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>React Custom Components</h1>
      <p>This repository serves as a custom components playground for sharpening React skills.</p>
      <div className="card">
        <Tabs>
          <Tabs.TabList>
            <Tabs.Tab>Tab 1</Tabs.Tab>
            <Tabs.Tab>Tab 2</Tabs.Tab>
            <Tabs.Tab>Tab 3</Tabs.Tab>
          </Tabs.TabList>
          <Tabs.Panel>
            <h4>Title 1</h4>
            <p>Content for Tab 1</p>
          </Tabs.Panel>
          <Tabs.Panel>
            <h4>Title 2</h4>
            <p>Content for Tab 2</p>
          </Tabs.Panel>
          <Tabs.Panel>
            <h4>Title 3</h4>
            <p>Content for Tab 3</p>
          </Tabs.Panel>
        </Tabs>
      </div>
    </>
  )
}

export default App
