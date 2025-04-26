# React Custom Components

This repository serves as a custom components playground for sharpening React skills. It provides a minimal setup using Vite, enabling fast development with Hot Module Replacement (HMR) and ESLint rules to maintain code quality.

Explore and experiment with React components in an optimized environment, leveraging modern tools and plugins for an enhanced development experience. This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

## Tabs Component

The repository includes a fully functional `Tabs` component built using React and Context API. This component allows you to create accessible and interactive tabbed interfaces with ease. The `Tabs` component is modular and consists of the following subcomponents:

- **`Tabs.TabList`**: A container for the individual tabs. It ensures that only valid `Tab` components are rendered and manages the total number of tabs.
- **`Tabs.Tab`**: Represents an individual tab. It supports keyboard navigation (e.g., arrow keys) and handles selection logic.
- **`Tabs.Panel`**: Displays the content associated with a selected tab. It ensures only the content of the active tab is visible.
- **`TabsProvider`**: Provides the context for managing the state of the tabs, such as the selected tab and total tabs.

### Features

- **Keyboard Accessibility**: Navigate between tabs using the arrow keys, and activate a tab with the Enter or Space key.
- **Dynamic State Management**: The `TabsProvider` manages the selected tab and total tabs dynamically.
- **Error Handling**: Displays a fallback message if the `TabList` component is missing or duplicated.
- **Custom Styling**: Includes a dedicated CSS file (`Tabs.css`) for styling the tabs and panels.

### Example Usage

Below is an example of how to use the `Tabs` component:

```jsx
import { Tabs } from './components/Tabs';

function App() {
  return (
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
  );
}
