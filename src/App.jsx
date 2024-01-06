// import { useState } from 'react';
// // import reactLogo from './assets/react.svg'
// // import viteLogo from '/vite.svg'
// import Profile from './components/Profile';

// import './App.css';

// function App() {
//   const [count, setCount] = useState(0);

//   return (
//     <>
//       <div className="app">
//         <Profile />
//       </div>
//     </>
//   );
// }

// export default App;

// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import { useEffect, useState } from 'react';

// import Profile from './components/Profile';
// import SignUpPage from './components/SignUpPage';
// export default function App() {
//   return (
//     <div className="app">
//       <BrowserRouter>
//         <Routes>
//           <Route index element={<Profile></Profile>} />

//           {/* <Route path="/NewUser" element={<NewUser></NewUser>} /> */}
//           <Route path="/SignUpPage" element={<SignUpPage></SignUpPage>} />
//           {/* <Route path="/Signup" element={<SignUp></SignUp>} />
//           <Route path="/NewUser" element={<NewUser></NewUser>} />
//           <Route path="/Login" element={<Login></Login>} /> */}
//           {/* <Route path="/profile">
//             {' '}
//             <Profile />
//           </Route> */}
//           {/* <Route path="*" element={<NoPage></NoPage>} /> */}
//         </Routes>
//       </BrowserRouter>
//     </div>
//   );
// }


import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';

import Profile from './components/Profile';
import SignUpPage from './components/SignUpPage';

export default function App() {
  return (
    <div className="app">
      <BrowserRouter basename="/NDIS-React">
        <Routes>
          <Route path="/" element={<Profile />} />
          <Route path="/SignUpPage" element={<SignUpPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
