import { Button, Box, Typography } from "@mui/material";

function App() {
  return (
    <div className="mt-6 flex gap-4">
      <button className="px-4 py-2 bg-red-500 text-white rounded">
        Tailwind Button
      </button>

      <Button variant="contained">MUI Button</Button>
    </div>
  );
}

export default App;
