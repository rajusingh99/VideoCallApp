import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import { Home } from './components/Home';
import { Video } from './components/Video';

function App() {
  const router = createBrowserRouter([
    {
      path:"/",
      element:<Home/>
    },
    {
      path:"/room/:id",
      element:<Video/>
    }
  ])
  return (
    <div className="App">
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
