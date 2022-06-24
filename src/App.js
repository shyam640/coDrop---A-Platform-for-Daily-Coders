import './App.css';
import {Route, Routes} from 'react-router-dom';
import { Header,Home,Library,Collab,News,About,Updates,Dashboard } from './components'

function App() {
  return (
    <div>
      <div className="w-screen h-auto flex flex-col">
        <Header/>
        <main className='mt-24 p-8 w-full'>
          <Routes>
            <Route path='/*' element={<Home/>}/>
            <Route path='/library' element={<Library/>}/>
            <Route path='/collab' element={<Collab/>}/>
            <Route path='/ai-news' element={<News/>}/>
            <Route path='/about-us' element={<About/>}/>
            <Route path='/updates' element={<Updates/>}/>
            <Route path='/user/dashboard' element={<Dashboard/>}/>
          </Routes>
        </main>
      </div>
    </div>
  );
}

export default App;
