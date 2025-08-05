# Progress Kit

React için geliştirilmiş progress bar bileşenleri kiti. Otomatik sayfa geçişlerini takip eden provider ve manuel progress bileşenleri içerir.

## Kurulum

```bash
npm install progress-kit
```

## Kullanım

### Progress Provider (Otomatik Sayfa Geçişleri)

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
      {/* Uygulama içeriği */}
    </div>
  );
}
```

### Circular Progress (Manuel)

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

### Line Progress (Manuel)

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

## Props

### ProgressProvider
- `type`: Progress tipi (`'line'` | `'circular'`)
- `height`: Yükseklik (line için) veya boyut (circular için)
- `bgColor`: Arka plan rengi
- `place`: Konum (`'top'` | `'bottom'`)

### CircularProgress
- `value`: Progress değeri (0-100)
- `size`: Boyut (`'small'` | `'medium'` | `'large'`)
- `variant`: Renk varyantı (`'primary'` | `'secondary'` | `'success'` | `'warning'` | `'danger'`)
- `textColor`: Metin rengi (opsiyonel)

### LineProgress
- `value`: Progress değeri (0-100)
- `size`: Boyut (`'small'` | `'medium'` | `'large'`)
- `variant`: Renk varyantı (`'primary'` | `'secondary'` | `'success'` | `'warning'` | `'danger'`)
- `textColor`: Metin rengi (opsiyonel)

### HalfProgress
- `value`: Progress değeri (0-100)
- `size`: Boyut (`'small'` | `'medium'` | `'large'`)
- `variant`: Renk varyantı (`'primary'` | `'secondary'` | `'success'` | `'warning'` | `'danger'`)
- `textColor`: Metin rengi (opsiyonel)

### ProgressBar
- `value`: Progress değeri (0-100)
- `size`: Boyut (`'small'` | `'medium'` | `'large'`)
- `variant`: Renk varyantı (`'primary'` | `'secondary'` | `'success'` | `'warning'` | `'danger'`)
- `textColor`: Metin rengi (opsiyonel)

## Lisans

MIT 