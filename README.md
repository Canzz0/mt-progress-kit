# Progress Kit

A React progress bar components kit. Includes provider for automatic page transitions and manual progress components.

## Installation

```bash
npm install progress-kit
```

## Usage

### Progress Provider (Automatic Page Transitions)

```jsx
import { ProgressProvider } from 'progress-kit';

function App() {
  return (
    <div>
      <ProgressProvider 
        type="line" 
        height="4px" 
        bgColor="#007bff"
      />
      {/* Application content */}
    </div>
  );
}
```
![Progress Kit Demo](./assets/provider.png)

### Circular Progress (Manual)

```jsx
import { CircularProgress } from 'progress-kit';

function App() {
  return (
    <CircularProgress 
      value={75} 
      size="medium"
      variant="primary"
    />
  );
}
```

### Line Progress (Manual)

```jsx
import { LineProgress } from 'progress-kit';

function App() {
  return (
    <LineProgress 
      value={60} 
      size="medium"
      variant="success"
    />
  );
}
```

### Half Circular Progress

```jsx
import { HalfProgress } from 'progress-kit';

function App() {
  return (
    <HalfProgress 
      value={50} 
      size="medium"
      variant="warning"
    />
  );
}
```

### Progress Bar

```jsx
import { ProgressBar } from 'progress-kit';

function App() {
  return (
    <ProgressBar 
      value={80} 
      size="large"
      variant="danger"
    />
  );
}
```

![Progress Kit Demo](./assets/value.png)

## License

MIT 