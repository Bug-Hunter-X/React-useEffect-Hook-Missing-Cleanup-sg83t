```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    // Correct: Added cleanup function
    fetch('https://api.example.com/data', {signal})
      .then(response => {
        if (!response.ok) throw new Error('Network response was not ok');
        return response.json();
      })
      .then(data => setCount(data.count))
      .catch(error => {
        if (error.name !== 'AbortError') {
          console.error('Error fetching data:', error);
        }
      });

    return () => {
      controller.abort();
    };
  }, []);

  return <div>Count: {count}</div>;
}
```