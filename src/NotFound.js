// import React from 'react'
// import { Link } from 'react-router-dom'

// export default function NotFound() {
//   return (
//     <div style={{
//         backgroundImage: "url('https://cdn.dribbble.com/users/469578/screenshots/2597126/404-drib23.gif')",
//         backgroundSize: 'cover',
//       }}>
//       <center>
//       <h1>404.Page not found!</h1>
//       <h2><Link to='/portal/home'>Back to Home page</Link></h2>
//       {/* <img style={{backgroundSize:''}} src="https://cdn.dribbble.com/users/469578/screenshots/2597126/404-drib23.gif"/> */}
//       </center>
//     </div>
//   )
// }

import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div style={{
      backgroundImage: "url('https://cdn.dribbble.com/users/469578/screenshots/2597126/404-drib23.gif')",
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      color: 'black',
    }}>
      <h1>404 - Page not found!</h1>
      <h2><Link style={{textDecoration:'none', color:'#00bfff'}}to='/portal/home'>Back to Home page</Link></h2>
    </div>
  );
}
