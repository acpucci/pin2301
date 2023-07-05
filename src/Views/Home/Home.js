import React from 'react'
import './Components/style.scss'

function Home() {
    return (
        <div className="fondo">
            <main>
                <h2 className="title">Sed ut perspiciatis unde omnis iste natus</h2> 
                <p>
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque.
                </p>
                <div className="btn-home">
                    <a href="#nosotros" class="btn">Read more</a>
                </div>
            </main>
        </div>
    );
  }
  
  export default Home;